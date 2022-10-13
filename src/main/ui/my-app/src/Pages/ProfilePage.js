import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import userAvatar from "../images/userAvatar.png"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useHttp from "../httpHandler/use-http";

function ProfilePage (props){
    let {id}=useParams()
    const {isLoading, error, sendRequest: fetchStudentProfile} = useHttp()
    const [idInfor,setIdInfor]=useState(0)
    const [nameInfor, setNameInfor]=useState("")
    const [ageInfor,setAgeInfor]=useState(0)
    const [userModified, setUserModified] = useState("")
    const [dateModified, serDateModified] =  useState()


    useEffect(()=>{
        const transformStudent = (studentObj)=>{
            setUserModified(studentObj.lastModifiedBy)
            serDateModified(studentObj.lastModifiedDate)
            setIdInfor(studentObj.id)
            setNameInfor(studentObj.name)
            setAgeInfor(studentObj.age)
        }
        fetchStudentProfile({url: `http://localhost:8080/students/${id}`}, transformStudent)
    },[idInfor,nameInfor,ageInfor])
    return(
        <div>
            <Header/>
            <div className="row text-center justify-content-center">
                <img src={userAvatar} style={{height: "60vh", width:  "50%",}} />
                <h1>Id: {idInfor}</h1>
                <h2>Name: {nameInfor}</h2>
                <h2>Age: {ageInfor}</h2>
                {userModified && <h2>Modified by: {userModified}</h2> }
                {dateModified && <h2>Modified at: {dateModified}</h2> }
            </div>
            <Footer/>
        </div>
    )
}

export default ProfilePage;