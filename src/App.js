import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./pages/User";
import Photo from "./pages/Photo";
import Layouts from "./layouts/Layouts"
function App() {
  return (
    <>
    <Router>
      <Layouts>
      <Route exact path="/" activeClassName='bg-black' component={User} />
      <Route path="/photo" component={Photo} />
      </Layouts>
      </Router>
    </>

  );
}

export default App;
