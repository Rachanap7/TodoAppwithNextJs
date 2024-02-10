import AddTodo from "./components/AddTodo";
import Todo from "./components/todo";
import Navbar from "./components/Navbar";

const page = ()=>{
  return(
    <main className="todo-container">
      <h2>My TodoList</h2>
      <Navbar/>
      <AddTodo/>
      <Todo/>
    </main>
  )
}

export default page;