import React from "react";
import "./App.css";
import AddModifyFruit from "./components/AddModifyFruit";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitList: props.fruitList,
      showAllFruits: props.showAllFruits,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      fruitList: nextProps.fruitList,
      showAllFruits: nextProps.showAllFruits,
    });
  }

  toggleShowFruitsFlag = this.props.toggleShowFruitsFlag;

  render() {
    const { showAllFruits } = this.state;

    return (
      <div className="App">
        <AddModifyFruit />
        <div style={{ marginTop: "10px" }}>
          <input
            type="checkbox"
            checked={this.state.showAllFruits}
            onChange={this.toggleShowFruitsFlag}
          />
          <label>Show all fruits</label>
        </div>
        {showAllFruits && (
          <ul style={{ listStyle: "none", marginTop: "10px" }}>
            {this.state.fruitList.map((fruit, index) => {
              return (
                <li key={fruit.fruitName} style={{ color: fruit.fruitColor }}>
                  <b>
                    {" "}
                    {index + 1}) {fruit.fruitName}
                  </b>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const toggleShowFruitsFlagActionCreator = () => {
  return {
    type: "toggleVisibility",
  };
};

const mapStateToProps = state => {
  return {
    fruitList: state.fruitList,
    showAllFruits: state.showAllFruits,
  };
};

const mapDispatchToProps = {
  toggleShowFruitsFlag: toggleShowFruitsFlagActionCreator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
