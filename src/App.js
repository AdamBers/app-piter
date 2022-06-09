import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from "./store/asyncAction/posts";
import Search from "./components/1_Search/1_Search";
import Pagination from "./components/2_Pagination";
import PostItem from "./components/3_PostItem";

function App() {
  const dispatch = useDispatch()
  dispatch(fetchPosts())
  const allPosts = useSelector(state => state.posts[0]?.posts)
  const currentPost = useSelector(state => state.currentPost)
  console.log(currentPost)

  return (
    <div className="App">
      <Search />
      <Router>
        <Routes>
          <Route exact path='/' element={<Pagination allPosts={allPosts} />} />
          <Route path={`/${currentPost}`} element={<PostItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
