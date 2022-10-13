import { useDispatch } from "react-redux"
import { useState, useEffect, useRef } from "react"
import { modifiedStudent } from "../../sagas/actions"

function SearchBar (props) {
    const [searchAge, setSearchAge] = useState()
    const dispatch = useDispatch()

    useEffect(() => {

        if(searchAge!=null)
        {
            const queryRequest = {url: `http://localhost:8080/students/?age=${searchAge}`}
            dispatch(modifiedStudent(queryRequest))
            props.onPageChange(1)
        }
    },[searchAge]) 

    const onSearchByAgeFieldChange = (event) => {
        event.preventDefault()
        setSearchAge(event.target.value)
    }



    
    return (
        <form>
            <div className="mb-3"> 
                <label >Search age:
                    <input
                        className="ms-3"
                        type="number"
                        placeholder="Only number"
                        onChange={onSearchByAgeFieldChange}
                    />
                </label>
            </div>
        </form>
    )

}
    


export default SearchBar;