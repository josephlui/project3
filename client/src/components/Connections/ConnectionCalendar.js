import React, { Component } from "react";
import _ from "lodash";
import API from "../common/util/API";
import { ReactAgenda, ReactAgendaCtrl, Modal } from "react-agenda";
require("moment/locale/en-ca.js");
var moment = require("moment");

var now = new Date();
var colors = {
  "color-1": "rgba(102, 195, 131 , 1)",
  "color-2": "rgba(242, 177, 52, 1)",
  "color-3": "rgba(235, 85, 59, 1)",
  "color-4": "rgba(70, 159, 213, 1)",
  "color-5": "rgba(170, 59, 123, 1)"
};

var items = [];

export default class ConnectionCalendar extends Component {
  constructor(props) {
    super(props);
    console.log("---Calendar props---");
    console.log(props);
    this.state = {
      items: [],
      selected: [],
      cellHeight: 60 / 4,
      showModal: false,
      locale: "en-ca",
      rowsPerHour: 4,
      numberOfDays: 7,
      userId: props.userId,
      approverList: props.approverList || [],
      startDate: new Date()
    };
    this.handleRangeSelection = this.handleRangeSelection.bind(this);
    this.handleItemEdit = this.handleItemEdit.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this.addNewEvent = this.addNewEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleCellSelection = this.handleCellSelection.bind(this);
  }

  componentWillMount() {
    // let token = sessionStorage.getItem("token");
    // if (!token){
    //   this.context.router.push('/');
    //  //this.props.history.replace('/');
    // }
  }

  componentDidMount() {
    // this.refreshItems();
  }

  refreshItems(userId, approverList) {
    console.log("---Calendar State---");
    console.log(this.state);
    const todayDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      10,
      0
    );
    if (userId) {
      let userIds = [];
      if (approverList)
        approverList.forEach(user => {
          userIds.push(user._id);
        });
      if (userId) userIds.push(userId);

      console.log("---userIds---");
      console.log(userIds);
      API.retrieveAllAppt(userIds, moment(todayDate).format("YYYY-MM-DD"))
        .then(result => {
          if (result.status === 200) {
            console.log("---Calendar Items---");
            console.log(result.data);
            items = _.map(result.data, booking => {
              var start = new Date(booking.startDate);
              var end = new Date(booking.endDate);
              return {
                _id: booking._id,
                name: booking.description,
                startDateTime: start,
                endDateTime: end,
                classes: booking.color
              };
            });
            this.setState({
              items: items,
              userId: userId,
              approverList: approverList
            });
          }
        })
        .catch(ex => {
          console.log("---ex---");
          console.log(ex);
        });
    }
  }

  componentWillReceiveProps(props) {
    console.log("---Calendar Updated props---");
    console.log(props);
    this.refreshItems(props.userId, props.approverList);
  }

  handleItemEdit(item, openModal) {
    console.log("handle Item Edit " + item);
    if (item && openModal === true) {
      this.setState({ selected: [item] });
      return this._openModal();
    }
  }

  handleCellSelection(item, openModal) {
    console.log("handle cell selection " + item);
    if (this.state.selected && this.state.selected[0] === item) {
      return this._openModal();
    }
    this.setState({ selected: [item] });
  }

  zoomIn() {
    var num = this.state.cellHeight + 15;
    this.setState({ cellHeight: num });
  }
  zoomOut() {
    var num = this.state.cellHeight - 15;
    this.setState({ cellHeight: num });
  }

  handleDateRangeChange(startDate, endDate) {
    this.setState({ startDate: startDate });
  }

  handleRangeSelection(selected) {
    this.setState({ selected: selected, showCtrl: true });
    this._openModal();
  }

  _openModal() {
    this.setState({ showModal: true });
  }
  _closeModal(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal: false });
  }

  handleItemChange(items, item) {
    this.setState({ items: items });
  }

  handleItemSize(items, item) {
    this.setState({ items: items });
  }

  removeEvent(items, item) {
    // console.log ("event removed " + JSON.stringify(item));
    // remove the item from the database using API
    API.removeAppt(item._id).then(result => {
      this.setState({ items: items });
    });
  }

  addNewEvent(items, newItems) {
    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
    console.log (newItems);
    console.log (this.state.userId);
    var attendeeIDs = [];
    if (this.state.approverList) {
        approverList.forEach(user => {
          // for now assume single attendee, booking another attendee
          attendeeIDs.push(user._id);
        });
    } else {
        // self booking
        attendeeIDs.push (this.state.userId)
    }

    console.log ("appointment detail " + newItems);
    console.log ("appointment owner " + this.state.userId);
    console.log ("users " + attendeeIDs);

    API.scheduleAppt({
      ...newItems,
      calendarOwnerUserId: this.state.userID,
      clientId: this.state.userID
    })
      .then(result => {
        console.log("Appt added: " + JSON.stringify(result.data));
      })
      .catch(err => console.log("Error adding new appointment: " + err));
  }
  editEvent(items, item) {
    console.log("edit event " + JSON.stringify(item));
    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
    API.updateAppt(item)
      .then(result => {
        console.log("Appt updated: " + JSON.stringify(result.data));
      })
      .catch(err => {
        console.log("Error updating appointment detail " + err);
      });
  }

  changeView(days, event) {
    this.setState({ numberOfDays: days });
  }

  render() {
    //this.refreshItems();
    // this.refreshItems();
    // var AgendaItem = function(props){
    //   return <div style={{display:'block', position:'absolute' , background:'#FFF'}}>{props.item.name} <button onClick={()=> props.edit(props.item)}>Edit </button></div>
    // }

    return (
      <div className="content-expanded ">
        <br />
        <div className="row">
          <div className="col s12 m3 col-content center">
            <button
              className="waves-effect waves-light btn"
              onClick={this.changeView.bind(null, 1)}
            >
              {" "}
              1 day{" "}
            </button>
          </div>
          <div className="col s12 m3 col-content center">
            <button
              className="waves-effect waves-light btn"
              onClick={this.changeView.bind(null, 3)}
            >
              {" "}
              3 day{" "}
            </button>
          </div>
          <div className="col s12 m3 col-content center">
            <button
              className="waves-effect waves-light btn"
              onClick={this.changeView.bind(null, 4)}
            >
              {" "}
              4 days{" "}
            </button>
          </div>
          <div className="col s12 m3 col-content center">
            <button
              className="waves-effect waves-light btn"
              onClick={this.changeView.bind(null, 7)}
            >
              {" "}
              7 days{" "}
            </button>
          </div>
        </div>
        <div className="control-buttons" />

        <ReactAgenda
          minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
          maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
          startDate={this.state.startDate}
          startAtTime={8}
          endAtTime={23}
          cellHeight={this.state.cellHeight}
          locale="en-ca"
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          helper={true}
          //itemComponent={AgendaItem}
          view="calendar"
          autoScale={false}
          fixedHeader={true}
          onRangeSelection={this.handleRangeSelection.bind(this)}
          onChangeEvent={this.handleItemChange.bind(this)}
          onChangeDuration={this.handleItemSize.bind(this)}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onItemRemove={this.removeEvent.bind(this)}
          onDateRangeChange={this.handleDateRangeChange.bind(this)}
        />
        {this.state.showModal ? (
          <Modal clickOutside={this._closeModal}>
            <div className="modal-content">
              <ReactAgendaCtrl
                items={this.state.items}
                itemColors={colors}
                selectedCells={this.state.selected}
                Addnew={this.addNewEvent}
                edit={this.editEvent}
              />
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}
