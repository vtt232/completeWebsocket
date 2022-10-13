import { useDispatch } from "react-redux"
import { modifiedStudent } from "../../sagas/actions"
import {useState} from 'react'

function UpdateAgeForm(props) {


    const [ageUpdate, setAgeUpdate] = useState("")

    const onUpdateNameFieldChange = (event)=> {
        event.preventDefault()
        setAgeUpdate(event.target.value)
    }

    const dispatch = useDispatch()

    const onUpdateAgeSubmit = async () => {
       
        const queryRequest = {url:`http://localhost:8080/students/${props.id}`, method:"PUT",
                                headers: {'Content-Type': 'application/json',}, 
                                body: {age: ageUpdate}}

        dispatch(modifiedStudent(queryRequest))
        props.onPageChange(1)
    }



    return (
    <form className="col" onSubmit={onUpdateAgeSubmit}>
        <label className="me-1">Enter new age:</label>
            <input className="me-1" type="number" onChange={onUpdateNameFieldChange}></input>
        <input type="submit" />
    </form>
    )

}

export default UpdateAgeForm;