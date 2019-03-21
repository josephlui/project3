import React from "react";
import API from "../common/util/API";
import Autocomplete from "../common/util/AutoComplete";

class ConnectionList extends React.Component {
  state = {
    userId: "",
    name: "",
    approverList: [],
    userList: [],
    connectionRequestList: []
  };
  componentDidMount() {
    API.retrieveAllUsers().then(result => {
      if (result.status === 200) {
        let clients = result.data;

        // Find user, for now, just take the first id
        // TODO: create a filter to find the login ID
        const user = result.data[0];
        delete clients[0];
        // END TODO

        const friendListIDs = user.approverList;

        const friendList = [];
        const filteredClientList = [];

        clients.forEach(client => {
          friendListIDs.includes(client._id)
            ? friendList.push(client)
            : filteredClientList.push(client);
        });
        clients = filteredClientList;

        const name = user.name;
        const userId = user.userId;
        const id = user._id;

        this.setState({
          userList: clients,
          approverList: friendList,
          name: name,
          userId: userId,
          id: id
        });
      }
    });
  }

  onSelect = clientId => {
    const client = this.state.userList.filter(
      user => user.userId === clientId
    )[0];
    API.updateApproverList(this.state.id, client._id)
      .then(result => {
        if (result.status === 200) {
          this.setState((state, props) => {
            return {
              approverList: [...state.approverList, client],
              userList: state.userList.filter(
                user => user.userId !== client.userId
              )
            };
          });
        } else {
          console.log("error updating approver list");
        }
      })
      .catch(err => console.log("exception caught updating approver list"));
  };

  render() {
    return (
      <div>
        Friend's connection page
        <br />
        {this.state.userId}
        <br />
        {this.state.name}
        <br />
        {this.state.approverList}
        <br />
        <Autocomplete
          suggestions={this.state.userList.map(user => user.userId)}
          onSelect={this.onSelect}
        />
        {/* <ConnectionList friendList={this.state.approverList} /> */}
      </div>
    );
  }
}

export default ConnectionList;
