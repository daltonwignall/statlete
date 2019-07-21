import React from "react";
import { FaSearch, FaExclamationCircle } from "react-icons/fa";
import { Input, Button } from "../components";
import "./styles/add-athlete.scss";

const AddAthletePage = () => {
  return (
    <div className="add-athlete">
      <div className="add-container">
        <div className="center">
          <h2 className="add-container__title">Search NBA Players:</h2>
          <div className="add-container__search">
            <Input
              className="add-container__search__input"
              placeholder="First Last"
            >
            </Input>
            <Button className="add-container__search__button">
              <FaSearch className="search-icon"/>
            </Button>
          </div>
          <div className="disclaimer">
            <FaExclamationCircle className="exclamation-icon"/>
            <span>Disclaimer: This alpha product only supports NBA Players</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAthletePage;
