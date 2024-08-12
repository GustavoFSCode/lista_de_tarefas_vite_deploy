import { useState } from 'react'
import Todo from "./components/todo";
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import './App.css';
import Filter from './components/Filter';
 

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Desenvolver um projeto React para meu portfólio",
      category: "Estudos",
      isComplete: true,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 100000),
      text,
      category,
      isComplete: false,
    },
  ];

  setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map(todo => todo.id === id ? todo.isComplete = !todo.isComplete : todo)
    setTodos(newTodos);
  }

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} setCategoryFilter={setCategoryFilter}/>
    <div className="todo-list">
      {todos
      .filter((todo) => 
        (filter === "All" ? true : filter === "Complete" ? todo.isComplete : !todo.isComplete) &&
            (categoryFilter === "All" ? true : todo.category === categoryFilter) &&
            todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => sort === "Asc" 
      ? a.text.localeCompare(b.text) 
      : b.text.localeCompare(a.text)
      )
      .map((todo) => (
       <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>;

}

export default App
