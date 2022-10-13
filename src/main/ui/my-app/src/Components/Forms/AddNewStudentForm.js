import { useState } from "react"
import { useDispatch } from "react-redux"
import { modifiedStudent } from "../../sagas/actions"


function AddNewStudentForm (props) {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const onNameFieldChange = (event)=> {
        event.preventDefault()
        setName(event.target.value)
    } 

    const onAgeFieldChange = (event)=> {
        event.preventDefault()
        setAge(event.target.value)
    } 


    const dispatch = useDispatch()
    

    const onAddNewStudentSubmit = async () => {
        const queryRequest={url:"http://localhost:8080/students/", method:"POST",
                                 headers: {
                                    'Content-Type': 'application/json' 
                                 }, body: {name: name, age: age}}

        dispatch(modifiedStudent(queryRequest))
        props.onPageChange(1)
    }



    return (
        <form  onSubmit={onAddNewStudentSubmit}>
            <div className="form-group col-md-6 mb-3">
                <label>Enter new student name:</label>
                <input
                    className="form-control" 
                    type="text" 
                    name="username" 
                    value={name || ""} 
                    onChange={onNameFieldChange}
                />
            </div>
            <div className="form-group col-md-6 mb-3">
                <label>Enter new student age:</label>
                <input
                    className="form-control"  
                    type="number" 
                    name="age" 
                    value={age || ""} 
                    onChange={onAgeFieldChange}
                />
            </div>
            <input className="btn btn-primary mb-4" type="submit" />
      </form>
    )

} 

export default AddNewStudentForm