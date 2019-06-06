import React from "react";
import { connect } from "react-redux";

const fruitColors = ["Select", "red", "green", "yellow", "orange"];

class AddModifyFruit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruitName: "",
      fruitColor: "",
    };
  }

  addFruit = () => {
    this.props.addFruitToStore({
      fruitName: this.state.fruitName,
      fruitColor: this.state.fruitColor,
    });
  };

  changeColor = () => {
    this.props.updateFruitColorInStore({
      fruitName: this.state.fruitName,
      fruitColor: this.state.fruitColor,
    });
  };

  setFruitName = e => {
    this.setState({ fruitName: e.target.value });
  };

  setFruitColor = e => {
    this.setState({ fruitColor: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <label>Fruit Name: </label>
          <input
            type="text"
            value={this.state.fruitName}
            onChange={this.setFruitName}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Fruit color: </label>
          <select onChange={this.setFruitColor} value={this.state.fruitColor}>
            {fruitColors.map(color => (
              <option value={color} key={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={this.addFruit}>Add Fruit</button>
          <button onClick={this.changeColor} style={{ marginLeft: "5px" }}>
            Change Fruit Color
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {};
};

const addFruitActionCreator = payload => {
  return {
    type: "addFruit",
    payload,
  };
};

const updateFruitColorActionCreator = payload => {
  return {
    type: "updateFruit",
    payload,
  };
};

const mapDispatchToProps = {
  addFruitToStore: addFruitActionCreator,
  updateFruitColorInStore: updateFruitColorActionCreator,
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(AddModifyFruit);
