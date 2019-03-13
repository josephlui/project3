import React, { Component, Fragment } from "react";

class Autocomplete extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
      suggestions: []
    };
  }

  onChange = e => {
   
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
   
  };

  onClick = e => {
  
    this.props.onSelect(e.currentTarget.innerText);
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
    this.setState({userInput: ""});
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

   
    // User pressed the enter key
    if (e.keyCode === 13 && filteredSuggestions[activeSuggestion]) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        // userInput: filteredSuggestions[activeSuggestion]
      });
      this.props.onSelect(filteredSuggestions[activeSuggestion]);
      this.setState({userInput: ""});

    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No matching criteria found, please try again!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <div className="form-field">
  <div className="form-field__control">
    <input id="fieldInput" type="text"  autocomplete="off" className="form-field__input"
         onChange={onChange}
         onKeyDown={onKeyDown}
         value={userInput} />
  </div>
</div>
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
