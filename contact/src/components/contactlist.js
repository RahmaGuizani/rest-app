import React from "react";

import axios from "axios";
import ContactDelete from "./contactdelete";

export default class PersonList extends React.Component {
  state = {
    persons_list: []
  };

  componentDidMount() {
    axios.get("/get_contact").then(res => {
      const persons_list = res.data;
      this.setState({ persons_list });
    });
  }

  render() {
    return (
      <div>
        {this.state.persons_list.map(person => (
          <ContactDelete key={person._id} person={person} />
        ))}
      </div>
    );
  }
}
