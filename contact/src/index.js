import React from "react";
import ReactDOM from "react-dom";
import PersonList from "./components/contactlist";
import ContactAdd from "./components/contactpost";
import ContactModifier from "./components/contactmodified";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App1">
          <h1> Contact List</h1>
          <Link to="/get_contact">
            <button className="butt_contact_list"> contactlist</button>
          </Link>
          <Link to="/new_contact">
            <button className="butt_contact_add">Addcontact</button>
          </Link>
        </div>
        <div className="App2">
          <Route path="/new_contact" exact component={ContactAdd} />
          <Route path="/get_contact" exact component={PersonList} />
          <Route
            path="/put_contactID/:id"
            exact
            render={props => <ContactModifier id={props.match.params.id} />}
          />
        </div>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
