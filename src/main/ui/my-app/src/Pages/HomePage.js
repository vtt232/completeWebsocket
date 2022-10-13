import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import { useEffect, useState} from "react";
import Body from "../Components/Layouts/Body";
import { useDispatch, useSelector } from "react-redux";
import { requestStudent, requestSize } from "../sagas/actions";

function HomePage () {


    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2 

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(requestStudent(currentPage))
        dispatch(requestSize())
    },[currentPage])

    const dataSize = useSelector((state) => state.size.size)
    const studentList = useSelector((state)=> state.students)
    


        

    return (
        <div>
            <Header/>
            <Body studentList={studentList}
            currentPage={currentPage} setCurrentPage={setCurrentPage} 
            pageSize={pageSize} dataSize={dataSize}/>
            <Footer/>
        </div>

    )
}




   
export default HomePage;