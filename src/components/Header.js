import classes from "./Header.module.css";
import { useSelector ,useDispatch } from "react-redux";
import { authAction } from "../store/index";

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.authStatus);

  function logOut() {
    dispatch(authAction.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLogin && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
