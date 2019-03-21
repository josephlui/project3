import React from "react";

class ConnectionInfo extends React.Component {
  render() {
    return this.props.friendList.map(approver => (
      <ul key={approver._id}>
        <li>{approver.name}</li>
        <li>{approver.userId}</li>
      </ul>
    ));
  }
}

export default ConnectionInfo;
