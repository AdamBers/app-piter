import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from "./store/asyncAction/posts";
import Search from "./components/1_Search/1_Search";
import Pagination from "./components/2_Pagination";
import PostItem from "./components/3_PostItem";

function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const allPosts = useSelector(state => state.posts[0]?.posts)
  const currentPostId = useSelector(state => state.currentPostId)

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
