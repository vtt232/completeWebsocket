import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../../styles/App.css';

function Header () {
  const navigate = useNavigate()


  const onLogOut = async () => {
        fetch("http://localhost:8080/auth/logout", {method: "GET", credentials: 'include',})
                .then(navigate("../login",{replace: true}))
                .catch((err) => {throw err})

}
    return (
    <div className="page-header mb-3">
        <h1>This is header</h1>  
        <NavLink className="link ms-3" style={({isActive})=>({color: isActive ? 'blue' : 'gray'})}  to="/home">Home Page</NavLink>
        <NavLink className="link ms-3" style={({isActive})=>({color: isActive ? 'blue' : 'gray'})}   to="/test">Test Page</NavLink>
        <NavLink className="link ms-3" style={({isActive})=>({color: isActive ? 'blue' : 'gray'})}   to="/images">Images Page</NavLink>
        <NavLink className="link ms-3" style={({isActive})=>({color: isActive ? 'blue' : 'gray'})}   to="/video">Video Page</NavLink>
        <NavLink className="link ms-3" style={({isActive})=>({color: isActive ? 'blue' : 'gray'})}   to="/transfer">Transfer Page</NavLink>
        <input id="logoutButton" placeholder="logout" className="btn btn-primary ms-3" onClick={onLogOut} />    
      </div>
    )
}
export default Header;