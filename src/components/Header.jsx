import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { logout, user, isFetching } = useAuth();

  console.log("---------------Header------------------");
  console.log(isFetching);
  console.log(user);

  console.log("---------------Header------------------");
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
        {user && !isFetching && (
          <nav className="nav nav--user">
            <button className="nav__el nav__el--logout" onClick={logout}>
              Logout
            </button>
            <Link to="#" className="nav__el">
              <span>{user.name}</span>
            </Link>
          </nav>
        )}

        {isFetching && !user && (
          <button className="nav__el nav__el--logout"></button>
        )}

        {!user && !isFetching && (
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
