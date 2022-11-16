import "./App.css";
import "rsuite/dist/rsuite.min.css";
import { Route, Routes } from "react-router-dom";
import Navigator from "./Components/Navigator/Navigator";
import Layout from "./Components/Layout/Layout";
import Signin from "./Components/Auth/SignIn/Signin";
import Footer from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import Signup from "./Components/Auth/SignUp/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout header={<Navigator />} content={<Home></Home>} footer={<Footer/>} />
          }
        />
        <Route
          path="/login"
          element={
            <Layout header={<Navigator />} content={<Signin/>} footer={<Footer/>} />
          }
        />
        <Route
          path="/signup"
          element={
            <Layout header={<Navigator />} content={<Signup/>} footer={<Footer/>} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
