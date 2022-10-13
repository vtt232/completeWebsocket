import Footer from "../Components/Layouts/Footer";
import { useState } from "react"
import useHttp from "../httpHandler/use-http";
import { useNavigate } from "react-router-dom";
import HeaderAuth from "../Components/Layouts/HeaderAuth";
function SignupPage(){
    const {isLoading, error, sendRequest: sendLoginRequest} = useHttp()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [optionRoles, setOptionRole] = useState( { 'ROLE_USER': true, 'ROLE_ADMIN': false} )
    const [roles, setRoles] = useState([]) 
    const navigate = useNavigate()


    const onUsernameFieldChange = (event)=> {
        event.preventDefault()
        setUsername(event.target.value)
    } 

    const onPasswordFieldChange = (event)=> {
        event.preventDefault()
        setPassword(event.target.value)
    }
    
    function toggleRole(event) {
        const role=event.target.value
    
        optionRoles[role] = !optionRoles[role]; 
        
        // Update animal likings 
        let newRoles = [] 
        for ( var roleChecked in optionRoles ) { 
            if ( optionRoles[roleChecked] ) { 
                newRoles.push(roleChecked) 
            }
        } 
        
        setRoles(newRoles); 
    } 

    

    const onSignupSubmit = async (event) => {
        event.preventDefault();
        const onSignupSuccess= (resultObj) =>{
            console.log(resultObj.response)
            navigate("../login",{replace: true})
        }

        sendLoginRequest({url:"http://localhost:8080/auth/signup/", method:"POST",
                                 headers: {
                                    'Content-Type': 'application/json',
                                 }, body: {username: username, password: password, role: roles}}, onSignupSuccess)
    }
    return (
        <div>
            <HeaderAuth/>
            <div className="ms-3">
                <form  onSubmit={onSignupSubmit}>
                <div className="form-group col-md-6 mb-3">
                    <label>Enter new username:</label>
                    <input
                        className="form-control" 
                        type="text" 
                        name="username" 
                        value={username || ""} 
                        onChange={onUsernameFieldChange}
                    />
                </div>
                <div className="form-group col-md-6 mb-3">
                    <label>Enter new password:</label>
                    <input
                        className="form-control"  
                        type="text" 
                        name="password" 
                        value={password || ""} 
                    onChange={onPasswordFieldChange}
                    />
                </div>
                <div>
                    <input name="userCheckbox" type="checkbox" onChange={toggleRole} value="ROLE_USER" defaultChecked/>
                    <label htmlFor="userCheckbox">User</label><br></br>
                    <input name="adminCheckbox" type="checkbox" onChange={toggleRole} value="ROLE_ADMIN"/>
                    <label htmlFor="adminCheckbox">Admin</label><br></br>
                </div>
                <input className="btn btn-primary mb-4" type="submit" />
                </form>
            </div>
            <Footer/>
        </div>
        )
}
export default SignupPage;