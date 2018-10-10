import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class ContactDelete extends React.Component {
  deleteContact = id => {
    axios.delete("/delete_contactID/" + id).then(res => {
      console.log("element deleted with success");
    });
  };

  render() {
    return (
      <div className="contact_list">
        <h2>
          {" "}
          {"Name:" + this.props.person.name} <br />
          {"Number:" + this.props.person.number}
          <br />
          {"Email:" + this.props.person.email}
        </h2>
        <button
          className="butt_delete"
          onClick={() => this.deleteContact(this.props.person._id)}
        >
          {" "}
          Delete
        </button>
        <Link to={"/put_contactID/" + this.props.person._id}>
          <button className="butt_modif">Modified</button>
        </Link>
      </div>
    );
  }
}
