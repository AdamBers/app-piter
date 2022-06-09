import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from "./store/asyncAction/posts";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import PostItem from "./components/PostItem";

function App() {
  const dispatch = useDispatch()
  const allPosts = useSelector(state => state.posts[0]?.posts)
  const currentPostId = useSelector(state => state.currentPostId)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [currentPostId, dispatch])

  return (
    <div className="App">
      <Search />
      <Router>
        <Routes>
          <Route exact path='/' element={<Pagination allPosts={allPosts} />} />
          <Route path={`/${currentPostId}`} element={<PostItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
