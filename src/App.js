import { useEffect, useState } from "react";
import "./App.scss";
// import ColorBox from "./components/ColorBox";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
import PostList from "./components/PostList";

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "I love Easy Frontend! 😍 " },
  //   { id: 2, title: "We love Easy Frontend! 🥰 " },
  //   { id: 3, title: "They love Easy Frontend! 🚀 " },
  // ]);

  // function handleTodoClick(todo) {
  //   console.log(todo);
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) return;
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // function handleTodoFormSubmit(formValues) {
  //   console.log("ok", formValues);

  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }
  const [postList, setPostList] = useState([]);
  //empty lay du lieu 1 lan
  useEffect(() => {
    async function fetchPostList() {
      // side effect lay du lieu

      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }
    fetchPostList();
  }, []);
  return (
    <div className="app">
      <h1>Welcome to React-hooks</h1>
      {/* <ColorBox/> */}
      {/* <TodoForm onSubmit = {handleTodoFormSubmit}/>
     <TodoList 
     todos ={todoList}
     onTodoClick ={handleTodoClick}
     /> */}
      <PostList posts={postList} />
    </div>
  );
}

export default App;
