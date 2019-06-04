import React from "react";
import "./App.css";
import AddModifyFruit from "./components/AddModifyFruit";
import store from "./reducers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitList: [],
      showAllFruits: true,
    };
  }

  componentDidMount() {
    const listener = () => {
      const { fruitList, showAllFruits } = store.getState();
      this.setState({ fruitList, showAllFruits });
      console.log("State is", store.getState());
    };

    store.subscribe(listener);
  }

  toggleShowFruitsFlag = () =>
    store.dispatch({ type: "toggleFruitsVisibility" });

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
        <AddModifyFruit changeColor={this.changeColor} />
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

export default App;
