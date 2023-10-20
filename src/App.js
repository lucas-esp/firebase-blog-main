import { useState, useEffect } from 'react';
import './App.css';
import './style.scss';
import './media-query.css';
import Home from './pages/Home';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Detail from './pages/Detail';
import AddEditBlog from './pages/AddEditBlog';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Header } from './components/Header';
import Auth from './pages/Auth';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import TagBlog from './pages/TagBlog';
import CategoryBlog from './pages/CategoryBlog';
import ScrollToTop from './components/ScrollToTop';
import Blogs from './pages/Blogs';
import { Footer } from './components/Footer';

function App() {
  const [active, setActive] = useState('home');
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(localStorage?.getItem('userId'));

  const navigate = useNavigate();

  useEffect(() => {
    try {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
          localStorage.setItem('userId', authUser?.uid);
        } else {
          localStorage.removeItem('userId');
          setUser(null);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('userId');
      setUserId(null);
      setUser(null);
      setActive('login');
      navigate('/auth');
    });
  };

  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home setActive={setActive} active={active} user={user} userId={userId} />} />
        <Route path="/search" element={<Home setActive={setActive} user={user} />} />
        <Route path="/detail/:id" element={<Detail setActive={setActive} user={user} />} />
        <Route path="/create" element={userId ? <AddEditBlog user={user} /> : <Navigate to="/" />} />
        <Route path="/update/:id" element={userId ? <AddEditBlog user={user} setActive={setActive} /> : <Navigate to="/" />} />
        <Route path="/blogs" element={<Blogs setActive={setActive} />} />
        <Route path="/tag/:tag" element={<TagBlog setActive={setActive} />} />
        <Route path="/category/:category" element={<CategoryBlog setActive={setActive} />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth setActive={setActive} setUser={setUser} handleLogout={handleLogout} user={user} userId={userId} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
