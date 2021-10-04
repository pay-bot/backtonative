import './App.css';
import { Route } from "react-router-dom";
import '../src/components/Home.module.css'
import SideBar from './components/SideBar';
import logo from '../src/baezeni.jpg'
import User from "./components/User";
import Photo from "./components/Photo";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Route exact path="/" component={User} />
      <Route path="/photo" component={Photo} />
    </>





    // <div className="">
    //   <div className="navbar">
    //     <img src={logo} className="img-logo" />
    //     <span className="brand" >Jakarta, Indonesia</span>
    //   </div>
    //   <div className="side-container">
    //   <ul className="sidebar">
    //             <li className="bar">USER</li>
    //             <li className="bar">PHOTO</li>
    //         </ul>
    //         </div>
    // </div>
  );
}

export default App;
