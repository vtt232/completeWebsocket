import { NavLink } from "react-router-dom";
function HeaderAuth () {
    return (
    <div className="page-header mb-3">
        <h1>This is header</h1>  
        <NavLink className="link ms-3" style={({isActive})=>({color: isActive ? 'blue' : 'gray'})}  to="/">Singup Page</NavLink>
        <NavLink className="link ms-3" style={({isActive})=>({color: isActive ? 'blue' : 'gray'})}   to="/login">Login Page</NavLink>    
      </div>
    )
}
export default HeaderAuth;