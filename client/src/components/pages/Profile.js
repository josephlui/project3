import React from "react";
import Autocomplete from "../common/util/AutoComplete";
import API from "../common/util/API";
import _ from "lodash";

class Profile extends React.Component {
  
  state = {
    userList: [],
    connectionRequestList: []
  };

  componentDidMount() {
    API.retrieveAllUsers()
    .then( result => {
       if (result.status === 200) {
        const userIds = result.data.map (user => user.userId);
        this.setState({userList: userIds });
       }
    })
  }

  onSelect = clientId => {

    this.setState((state, props) => {
      const tmpList = _.filter(state.userList, function(list) { return list !== clientId; });
      return {
        connectionRequestList : [...state.connectionRequestList,clientId],
        userList: tmpList
      }
    })
  };

  render() {
   
    return <div>Profile page
      
      Sample code to lookup all user IDs in user collection:
      <br/>
      
      <Autocomplete
        suggestions={this.state.userList}
        onSelect={this.onSelect}
      />
      Connections: {this.state.connectionRequestList.join()}

    </div>;
  }
}

export default Profile;
