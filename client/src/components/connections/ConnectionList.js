import React from "react";
class ConnectionList extends React.Component {


  render(){
    
    return this.props.friendList.map( approver => 
        
          <ul key={approver._id}>
            <li>{approver.name}</li>
            <li>{approver.userId}</li>
          </ul>
         );
    }
}

export default ConnectionList;