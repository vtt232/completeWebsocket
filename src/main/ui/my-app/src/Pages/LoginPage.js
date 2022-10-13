import Footer from "../Components/Layouts/Footer";
import { useState } from "react"
import useHttp from "../httpHandler/use-http";
import { useNavigate } from "react-router-dom";
import HeaderAuth from "../Components/Layouts/HeaderAuth";
function LoginPage(){
    const {isLoading, error, sendRequest: sendLoginRequest} = useHttp()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const onUsernameFieldChange = (event)=> {
        event.preventDefault()
        setUsername(event.target.value)
    } 

    const onPasswordFieldChange = (event)=> {
        event.preventDefault()
        setPassword(event.target.value)
    } 

    

    const onLoginSubmit = async (event) => {
        event.preventDefault();
        const onLoginSuccess= (resultObj) =>{
            console.log(resultObj)
            console.log(resultObj.response)
            navigate("../home",{replace: true})
        }

        sendLoginRequest({url:"http://localhost:8080/auth/login/", method:"POST",
                                 headers: {
                                    'withCredentials': true,
                                    'Content-Type': 'application/json',
                                    "Authorization": 'Basic '+window.btoa(username+":"+password),

                                 }, body: {username: username, password: password}}, onLoginSuccess)
    }
    return (
        <div>
            <HeaderAuth/>
            <div className="ms-3">
                <form  onSubmit={onLoginSubmit}>
                <div className="form-group col-md-6 mb-3">
                    <label>Enter username:</label>
                    <input
                        className="form-control" 
                        type="text" 
                        name="username" 
                        value={username || ""} 
                        onChange={onUsernameFieldChange}
                    />
                </div>
                <div className="form-group col-md-6 mb-3">
                    <label>Enter password:</label>
                    <input
                        className="form-control"  
                        type="text" 
                        name="password" 
                        value={password || ""} 
                    onChange={onPasswordFieldChange}
                    />
                </div>
                <input className="btn btn-primary mb-4" type="submit" />
                </form>
            </div>
            <Footer/>
        </div>
        )
}
export default LoginPage;