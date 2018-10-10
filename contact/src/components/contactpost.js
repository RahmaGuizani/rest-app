import React from "react";
import axios from "axios";

export default class ContactAdd extends React.Component {
  state = {
    name: "",
    number: "",
    email: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleChange1 = event => {
    this.setState({ email: event.target.value });
  };
  handleChange2 = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/new_contact", {
        name: this.state.name,
        email: this.state.email,
        number: this.state.number
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Person email:
            <input type="text" name="email" onChange={this.handleChange1} />
          </label>
          <br />
          <label>
            Person number:
            <input type="number" name="number" onChange={this.handleChange2} />
          </label>{" "}
          <br />
          <button className="butt" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
