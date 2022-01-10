import "./App.css";

import TodoComponent from "./components/Todo";
function App() {
  return (
    <>
      <div className="App">
        <TodoComponent title="Task manager" />
      </div>
    </>
  );
}

export default App;
