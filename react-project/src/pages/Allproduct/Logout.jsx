import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");  // remove login key
    navigate("/");  // redirect to login
  };

  return (
    <button onClick={handleLogout} className="btn p-0">
      <img width="25" height="25" src="https://img.icons8.com/windows/32/user-male-circle.png" alt="user-male-circle"/>
      <span className="p-0 mb-1" style={{height:"20px"}}>Logout</span>
    </button>
  );
}

export default Logout;
