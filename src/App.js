import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.auth.authStatus);

  return (
    <>
      <Header />
      {!isLogin ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
