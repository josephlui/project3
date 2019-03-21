import React from "react";

class ConnectionInfo extends React.Component {
  render() {
    return this.props.approverList.map(approver => (
      <div className="col s12 m13 col-content center">
        <ul key={approver._id}>
          <li>
            <h3 className="teal-text">Attendee</h3>
          </li>
          <li>
            <h5>{approver.name}</h5>
          </li>
          <li>
            <h6>{approver.userId}</h6>
          </li>
        </ul>
        <br />
        <button
          className="waves-effect waves-light btn"
          onClick={() => this.props.removeApprover(approver.userId)}
        >
          {" "}
          Remove Attendee{" "}
        </button>
      </div>
    ));
  }
}

export default ConnectionInfo;
