import StudentList from "../StudentView/StudentListView";
import SearchBar from "../Forms/SearchByAgeForm";
import AddNewStudentForm from "../Forms/AddNewStudentForm";
import Pagination from "../Pagination/Pagination";


function Body (props) {
    
    return (
        <div className="ms-3">
            <section>
                <SearchBar onPageChange={page => props.setCurrentPage(page)}/>
            </section>
            <section>
                <AddNewStudentForm onPageChange={page => props.setCurrentPage(page)}/>
            </section>
            <section>
                {!props.studentList.loading && <StudentList onPageChange={page => props.setCurrentPage(page)} studentList={props.studentList.students}/>}
                {props.studentList.loading && <p>Loading...</p>}
            </section>
            <section>
                <Pagination
                    dataSize={props.dataSize}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChange={page => props.setCurrentPage(page)}/>
            </section>
        </div>
    )
}

export default Body;