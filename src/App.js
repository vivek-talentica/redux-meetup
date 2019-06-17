import React from "react";
import "./App.css";
import AddModifyFruit from "./components/AddModifyFruit";
import { store } from "./index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitList: [],
      showAllFruits: true,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      let currentState = store.getState();
      this.setState({
        fruitList: currentState.fruitList,
        showAllFruits: currentState.fruitVisibility,
      });
    });
  }

  toggleShowFruitsFlag = () =>
    store.dispatch({
      type: "toggleVisibility",
    });

  addFruit = fruit => {
    //fruit ~ {fruitName:"", fruitColor:""}
    store.dispatch({
      type: "addFruit",
      payload: fruit,
    });
  };

  changeColor = updatedFruit => {
    store.dispatch({
      type: "updateFruit",
      payload: updatedFruit,
    });
  };

  render() {
    const { showAllFruits } = this.state;

    return (
      <div className="App">
        <AddModifyFruit
          addFruit={this.addFruit}
          changeColor={this.changeColor}
        />
        <div style={{ marginTop: "10px" }}>
          <input
            type="checkbox"
            checked={showAllFruits}
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
    );
  }
}

export default App;
