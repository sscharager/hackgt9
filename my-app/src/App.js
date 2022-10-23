import React from "react";
import Login from "./views/logInView.tsx";
import ComformationView from "./views/conformationView.tsx"
import AddTime from "./views/addTime.tsx";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>


<AddTime/>
          //<Router>
            //<Route exact path="/" component={ComformationView} />
            //<Route  path="/log-in" component={Login} />
            //<Route path="/AddTime" component={AddTime} />
          //  </Router>



      </div>
    );
  }
}

export default App;
