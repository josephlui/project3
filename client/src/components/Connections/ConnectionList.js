import React from "react";
import API from "../common/util/API";
import Autocomplete from "../common/util/AutoComplete";
import ConnectionInfo from "./ConnectionInfo";

class ConnectionList extends React.Component {
  state = {
    user: null,
    approverList: [],
    userList: [],
    connectionRequestList: []
  };

  componentDidMount() {
    let usertoken = sessionStorage.getItem("token");
    console.log("---Token---" + usertoken);
    API.retrieveUser(usertoken)
      .then(session => session.data.user)
      .then(userId => {
        console.log("---userId---" + userId);
        this.setState({ userId: userId });
      });

    API.retrieveAllUsers()
      .then(result => {
        if (result.status === 200) {
          console.log("---retrieveAllUsers.result.data---");
          console.log(result.data);

          let user = result.data.filter(user => {
            return user._id === this.state.userId;
          })[0];
          console.log("---user---");
          console.log(user);

          let userList = result.data.filter(user => {
            return user._id !== this.state.userId;
          });
          console.log("---userList---");
          console.log(userList);

          let approverList = [];
          if (user) {
            approverList = result.data.filter(approver => {
              console.log("---App.user.approverList---");
              console.log(user.approverList);
              return user.approverList.includes(approver._id);
            });
          }

          console.log("---approverList---");
          console.log(approverList);

          this.setState({
            user: user,
            userList: userList,
            approverList: approverList
          });
        }
      })
      .catch(ex => {
        console.log("---Exception---");
        console.log(ex);
      });
  }

  onSelect = clientId => {
    const client = clientId
      ? this.state.userList.filter(user => user.userId === clientId)[0]
      : null;
    API.updateApproverList(this.state.id, client ? client._id : null)
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

  removeApprover = user => {
    API.removeApprover(this.state.id, user ? user._id : null)
      .then(result => {
        if (result.status === 200) {
          this.setState((state, props) => {
            var approverList = state.approverList.filter(
              approver => approver.userId !== user.userId
            );
            return {
              approverList,
              userList: [...state.userList, user]
            };
          });
        } else {
          console.log("error updating approver list");
        }
      })
      .catch(err => console.log("exception caught updating approver list"));
  };

  render() {
    console.log("---state user---");
    console.log(this.state.user);
    const username = this.state.user ? this.state.user.name : "no name";
    const userId = this.state.user ? this.state.user._id : "no id";
    return (
      <div>
        <div className="row center">
          <div className="col s12 m12 col-content center">
            <ul>
              <li>
                <h3 className="teal-text">You</h3>
              </li>
              <li>
                <h2>{username}</h2>
              </li>
              <li>{userId}</li>
            </ul>
          </div>
          <Autocomplete
            suggestions={this.state.userList.map(user => user.userId)}
            onSelect={this.onSelect}
          />
          <ConnectionInfo
            approverList={this.state.approverList}
            removeApprover={this.removeApprover}
          />
        </div>
      </div>
    );
  }
}

export default ConnectionList;
