import { modifiedStudent } from "../../sagas/actions"
import { useDispatch } from "react-redux"
import UpdateAgeForm from "../Forms/UpdateAgeForm"
import { Link } from "react-router-dom";
function Student(props){

    const dispatch = useDispatch()

    const onDeleteStudent = async () => {
        const queryRequest={url:`http://localhost:8080/students/${props.id}`, method:"DELETE",}
        
        dispatch(modifiedStudent(queryRequest))

        props.onPageChange(1)
    }

    function confirmDeleteStudent() {
        if(window.confirm("Do you want to delete this student?")){
            onDeleteStudent()
        }
    }





    return (
        <ul>
            <li><Link to={`/student/${props.id}`}>{props.name}</Link></li>
            <li>{props.age}</li>
            <UpdateAgeForm id={props.id} onPageChange={props.onPageChange}/>
            <button type="button" onClick={confirmDeleteStudent} >Delete</button>

        </ul>
      );
}

export default Student;