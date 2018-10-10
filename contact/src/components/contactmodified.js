import React from "react";
import axios from "axios";

export default class ContactDelete extends React.Component {
  state = {
    name: "",
    number: "",
    email: ""
  };

  componentDidMount() {
    axios.get("/get_contactID/" + this.props.id).then(res => {
      this.setState({ ...res.data });
    });
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };
  modifiedContact = id => {
    axios
      .put("/put_contactID/" + id, {
        name: this.state.name,
        email: this.state.email,
        number: this.state.number
      })
      .then(res => {
        console.log("element modified with success");
      })
      .catch(err => console.log(err));
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <br />
          <label>
            Person email:
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <br />
          <label>
            Person number:
            <input
              type="text"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <br />
          <button
            className="butt"
            type="submit"
            onClick={() => this.modifiedContact(this.props.id)}
          >
            Modified
          </button>
        </form>
      </div>
    );
  }
}
