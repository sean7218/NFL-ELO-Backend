import React from "react";

const TodoForm = function({addTodo}) {
  let input;

  return (
    <div>
      <input ref={} />
      <button></button>
    </div>
  );
}
const Todo = ({todo, remove}) => {
  return (<li onClick(remove(todo.id))> {todo.text}</li>)
}

const Title = () => {
  return (
    <div>
      <div>
        <h1>to-do</h1>
      </div>
    </div>
  );
}
export default class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}