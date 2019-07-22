import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { FaSearch, FaExclamationCircle, FaUser, FaPlus } from "react-icons/fa";
import { Input, Button } from "../components";
import { searchAthlete, addAthlete } from "../state/actions/athletes.action";

import "./styles/add-athlete.scss";

class AddAthletePage extends Component {
  constructor(props) {
    super(props);

    this.enterPressed = this.enterPressed.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.searchComplete = this.searchComplete.bind(this);
    this.renderResults = this.renderResults.bind(this);

    this.state = {
      searchValue: "",
      searchComplete: null,
      foundAthlete: null,
    };
  }

  enterPressed(event) {
    const code = event.keyCode || event.which;

    if(code === 13) {
      this.onSearch();
    } 
  }

  updateSearchValue(event) {
    this.setState({ searchValue: event.target.value });
  }

  onSearch() {
    this.setState({ searchComplete: false });

    if (this.state.searchValue) {
      searchAthlete(this.state.searchValue, this.searchComplete);
    }
  }

  searchComplete(athlete) {
    this.setState({
      searchComplete: true,
      foundAthlete: athlete || null
    });
  }

  renderResults() {
    const athlete = this.state.foundAthlete;

    if (athlete) {
      const name = `${athlete.first_name} ${athlete.last_name}`;
      const team = `${athlete.team.full_name}`;

      return (
        <React.Fragment>
          <h3>Athlete Found!</h3>
          <div className="athlete-found">
            <div>
              <FaUser className="athlete-found__user-icon"/>
            </div>
            <div className="athlete-found__info">
              <h4 className="athlete-found__title">{name} - {team}</h4>
              <Button variant="outline" text="Add Athlete to Menu" onClick={this.props.addAthlete}>
                <FaPlus className="athlete-found__plus-icon"/>
              </Button>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <h3>No Athletes Found :(</h3>
      );
    }
  }

  render() {
    return (
      <div className="add-athlete">
        <div className="add-container">
          <div className="center">
            <h2 className="add-container__title">Search NBA Players:</h2>
            <div className="add-container__search">
              <Input
                className="add-container__search__input"
                placeholder="First Last"
                onChange={this.updateSearchValue}
                onKeyPress={this.enterPressed}
              >
              </Input>
              <Button className="add-container__search__button" onClick={this.onSearch}>
                <FaSearch className="search-icon"/>
              </Button>
            </div>
            <div className="disclaimer">
              <FaExclamationCircle className="exclamation-icon"/>
              <span>Disclaimer: This alpha product only supports NBA Players</span>
            </div>
            <div className="search-results">
              { this.state.searchComplete && this.renderResults() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddAthletePage.propTypes = {
  addAthlete: PropTypes.func,
}

export default connect(null, { addAthlete })(AddAthletePage);
