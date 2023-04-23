import React from "react";
import { Link } from "react-router-dom";

import "./styles.css"

interface Props {
  user: {
    name: string;
    password: string;
  };
  setUser: React.Dispatch<React.SetStateAction<null>>;
  onLogout: () => void;
}

const Navbar: React.FC<Props> = ({ setUser, user, onLogout }) => {
  function handleLogoutOnClick(): void {
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
          <button onClick={handleLogoutOnClick} className="logout-button">
            Logout
          </button>
        </div>
        {/* <Link to="/comments" className="nav-button"> Your Thoughts? </Link> */}
        <Link to="/tasks" className="nav-button">
          Home
        </Link>
      </div>
    </>
  );
};

export default Navbar;
