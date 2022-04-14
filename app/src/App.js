import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import PageNotFound from './components/404/404';
import Posts from './components/Posts/Posts';
import PostsDetail from './components/Posts/PostsDetail/PostsDetail';


function App() {
  return (
  <BrowserRouter>
    <Header />
    <div className="container py-2">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postsId" element={<PostsDetail />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes> 
    </div>
  </BrowserRouter>

  );
}

export default App;
