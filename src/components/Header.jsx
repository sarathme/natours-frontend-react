import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useEffect } from "react";
import toast from "react-hot-toast";

function Header() {
  const { logout } = useAuth();

  const { user, errorFetchingUser, userError } = useCurrentUser();

  useEffect(() => {
    if (errorFetchingUser) {
      toast.error(userError.message);
    }
  }, [errorFetchingUser, userError]);

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">
          All Tours
        </Link>
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours Logo" />
      </div>
      <nav className="nav nav--user">
        {user && (
          <nav className="nav nav--user">
            <button className="nav__el nav__el--logout" onClick={logout}>
              Logout
            </button>
            <Link to="#" className="nav__el">
              <span>{user.name}</span>
            </Link>
          </nav>
        )}

        {!user && (
          <>
            <Link className="nav__el" to="/login">
              Log in
            </Link>
            <Link className="nav__el nav__el--cta" to="/signup">
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
