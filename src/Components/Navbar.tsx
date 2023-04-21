import React from 'react'
import { Link } from 'react-router-dom'


interface Props {
    user:{
      name: string
      password: string
    }
    setUser: React.Dispatch<React.SetStateAction<null>>
    onLogout: React.Dispatch<React.SetStateAction<null>>
  }

const Navbar:React.FC<Props> = ({setUser, user}) => {

    function handleLogoutOnClick() {
        fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      //const navigate = useNavigate();

      return (
        <>
           <div className="header-background">
              <div>
              <p className="welcome">Welcome, {user.name}!</p>
              <button onClick={handleLogoutOnClick} className="logout-button"> Logout </button>
              </div>
              {/* <Link to="/comments" className="nav-button"> Your Thoughts? </Link> */}
              <Link to="*" className="nav-button"> Home </Link>

          </div>
      </>
    )

}

export default Navbar
