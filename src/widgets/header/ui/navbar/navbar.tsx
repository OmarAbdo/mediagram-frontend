import { Link } from "react-router";
import { useMyCustomAuthHook } from "../../../../app/context/auth"

export const Navbar = () => {
  const { user, loading, logout } = useMyCustomAuthHook();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("logout failure:", error)
    }

    if (loading) {
      return <div>Loading...</div>
    }

  }
  return (
    <>
      <Link to="/">Home </Link>
      {
        user ?
          <>
            <span>Welcome {user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
          </>
      }

    </>
  );
};
