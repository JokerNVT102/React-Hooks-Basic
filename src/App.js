// import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.scss";
import BetterClock from "./components/BetterClock";
// import queryString from "query-string";
// import Pagination from "./components/Pagination";
// import ColorBox from "./components/ColorBox";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// import PostList from "./components/PostList";
// import Search from "./components/Search";
import Clock from "./components/Clock";

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
  // const [postList, setPostList] = useState([]);
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 11,
  // });

  // const [filters, setFilters] = useState({
  //   _limit: 10,
  //   _page: 1,
  // });
  //empty lay du lieu 1 lan
  // useEffect(() => {
  //   async function fetchPostList() {
  //     // side effect lay du lieu

  //     try {
  //       const requestUrl =
  //         "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
  //       const response = await fetch(requestUrl);
  //       const responseJSON = await response.json();
  //       const { data } = responseJSON;
  //       setPostList(data);
  //     } catch (error) {
  //       console.log("Failed to fetch post list: ", error.message);
  //     }
  //   }
  //   fetchPostList();
  // }, []);
  //
  // useEffect(() => {
  //   async function fetchPostList() {
  //     // side effect lay du lieu

  //     try {
  //       const paramsString = queryString.stringify(filters);
  //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestUrl);
  //       const responseJSON = await response.json();
  //       const { data, pagination } = responseJSON;
  //       setPagination(pagination);
  //       setPostList(data);
  //     } catch (error) {
  //       console.log("Failed to fetch post list: ", error.message);
  //     }
  //   }
  //   fetchPostList();
  // }, [filters]);
  // function handlePageChange(newPage) {
  //   console.log("page: ", newPage);
  //   setFilters({
  //     ...filters,
  //     _page: newPage,
  //   });
  // }
  // function handleFiltersChange(newFilters) {
  //   console.log("ok: ", newFilters);
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilters.searchTerm,
  //   });
  // }
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <h1>Welcome to Clock</h1>
      {showClock && <Clock />}
      <BetterClock />
      <button
        onClick={() => {
          setShowClock(false);
        }}
      >
        hide clock
      </button>
      {/* <ColorBox/> */}
      {/* <TodoForm onSubmit = {handleTodoFormSubmit}/>
     <TodoList 
     todos ={todoList}
     onTodoClick ={handleTodoClick}
     /> */}
      {/* <Search onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
    </div>
  );
}

export default App;
