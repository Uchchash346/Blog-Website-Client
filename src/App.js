import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
// import AddBlog from './components/AddBlog/AddBlog';
import { Route, Routes } from 'react-router-dom';
import BlogCards from './components/BlogCards/BlogCards';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="" element={<Header />} />
        <Route path="" element={<BlogCards />} />
        <Route path="/addBlog" element={<Blogs />} />
      </Routes>
      {/* <Routes>
        <Route path="" element={<AddBlog />} />
      </Routes> */}
    </>
  );
}

export default App;
