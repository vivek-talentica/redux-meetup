import React from "react";
import "./App.css";
import AddModifyFruit from "./components/AddModifyFruit";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitList: [],
      showAllFruits: true,
    };
  }

  toggleShowFruitsFlag = () =>
    this.setState({ showAllFruits: !this.state.showAllFruits });

  addFruit = fruit =>
    this.setState({ fruitList: [...this.state.fruitList, fruit] });

  changeColor = updatedFruit => {
    let fruitList = this.state.fruitList.map(fruit => {
      if (fruit.fruitName === updatedFruit.fruitName) {
        return updatedFruit;
      }
      return fruit;
    });
    this.setState({ fruitList });
  };

  render() {
    const { showAllFruits } = this.state;

    return (
      <div className="App">
        <div
          style={{
            border: "2px solid orange",
            width: "60%",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              border: "2px solid green",
              width: "60%",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            <AddModifyFruit
              addFruit={this.addFruit}
              changeColor={this.changeColor}
            />
          </div>
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
                  <li style={{ color: fruit.fruitColor }} key={index}>
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
      </div>
    );
  }
}

export default App;
