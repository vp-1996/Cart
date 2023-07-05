import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
// import Home from './Pages/Home';
// import AboutUs from './Pages/AboutUs';
// import Users from './Pages/Users';
// import Contact from './Pages/Contact';
import { lazy, Suspense } from 'react';
import Blog from './Pages/Blog'; 
import ViewBlog from './Pages/ViewBlog'; 
import CreateProduct from './Pages/CreateProduct';
const Home = lazy(() => import("./Pages/Home"))
const AboutUs = lazy(() => import("./Pages/AboutUs"))
const Users = lazy(() => import("./Pages/Users"))
const Contact = lazy(() => import("./Pages/Contact"))

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='AboutUs' element={<AboutUs />} />
        <Route path='Users' element={<Users />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Blog' element={<Blog />} />
        <Route path='ViewBlog/:id' element={<ViewBlog />} />
        <Route path='Product' element={<CreateProduct />} />
        <Route path='/Cart' element={<Home />} />
        <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;