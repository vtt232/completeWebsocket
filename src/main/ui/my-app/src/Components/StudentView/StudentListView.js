import Student from "./StudentView";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { modifiedStudentSuccess } from "../../sagas/actions";
import { useDispatch } from "react-redux";


function StudentList(props){

    const dispatch = useDispatch()

    function handleOnDragEnd(result) {

        if (!result.destination) return;

        const items = Array.from(props.studentList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        dispatch(modifiedStudentSuccess(items))

    }


    const studentList = props.studentList.map((student, i)=>{
        return(
        <Draggable  key={student.id} draggableId={student.id.toString()} index={i}>
            {(provided)=>(
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Student id={student.id} name={student.name} age={student.age} onPageChange={props.onPageChange}/> 
                </li>
            )}
        </Draggable>)
    })
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
             <Droppable droppableId="students" >
                {(provided)=>(
                    <ul className="students" {...provided.droppableProps} ref={provided.innerRef}>
                        {studentList}
                        {provided.placeholder}
                    </ul>

                )}
             </Droppable>
        </DragDropContext>
    );
}

export default StudentList;