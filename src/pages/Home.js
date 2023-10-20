import { collection, getDocs, limit, onSnapshot, query, orderBy, startAfter, deleteDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { db } from '../firebase';
import { toast } from 'react-toastify';

import '../style.css';
import '../ifsul/css/template-verde.css';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const Home = ({ setActive, user, active, userId }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'blogs'),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get('tags'));
          list.push({ id: doc.id, ...doc.data() });
        });
        // setTotalBlogs(list);
        // setBlogs(list);
        setLoading(false);
        setActive('home');
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [setActive, active]);

  useEffect(() => {
    getBlogs();
  }, [active]);

  const getBlogs = async () => {
    const blogRef = collection(db, 'blogs');
    console.log(blogRef);
    const firstFour = query(blogRef, orderBy('timestamp', 'desc'), limit(4));
    const docSnapshot = await getDocs(firstFour);
    setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar esse blog ?')) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, 'blogs', id));
        toast.success('Blog foi deletado com sucesso!');
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const updateState = (docSnapshot) => {
    const isCollectionEmpty = docSnapshot.size === 0;
    if (!isCollectionEmpty) {
      const blogsData = docSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs((blogs) => [...blogs, ...blogsData]);
      setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
    } else {
      toast.info('Não há mais posts para mostrar');
    }
  };

  const fetchMore = async () => {
    // setLoading(true);
    const blogRef = collection(db, 'blogs');
    const nextFour = query(blogRef, orderBy('timestamp', 'desc'), limit(3), startAfter(lastVisible));
    const docSnapshot = await getDocs(nextFour);
    updateState(docSnapshot);
    // setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <div className="container">
        <div className="row-fluid module manchete-lateral-tit-menor">
          <div className="outstanding-header">
            <h2 className="outstanding-title">
              <span>Notícias</span>
            </h2>
          </div>

          <div className="manchete-texto-lateral">
            <div className="row-fluid notice-column-start">
              <div className="span8 pull-right">
                <p className="subtitle notice-category">{blogs[0]?.category}</p>
                <h1 className="notice-title">
                  <a href={`/detail/${blogs[0]?.id}`}>{blogs[0]?.title} </a>
                </h1>
                <p className="description notice-description">{blogs[0]?.description}</p>
              </div>
              <div className="span4 no-margin img-manchete-lateral">
                <a href={`/detail/${blogs[0]?.id}`}>
                  <img src={blogs[0]?.imgUrl} className="" width="230" height="136" alt="" />
                </a>
              </div>
              {userId && blogs && (
                <div style={{ position: 'absolute', right: 0, top: 0 }}>
                  <FontAwesome name="trash" style={{ margin: '15px', cursor: 'pointer' }} size="2x" onClick={() => handleDelete(blogs[0].id)} />
                  <Link to={`/update/${blogs[0].id}`}>
                    <FontAwesome name="edit" style={{ cursor: 'pointer' }} size="2x" />
                  </Link>
                </div>
              )}
            </div>
            <div className="chamadas-secundarias row-fluid notice-grid">
              {blogs?.map((blog, index) => {
                if (index === 0) return null;
                return (
                  <div key={blog.id} className="notice-column">
                    <a href={`/detail/${blog?.id}`} className="img-rounded notice-img">
                      <img className="notice-img" src={blog?.imgUrl} alt="" />
                    </a>
                    <p className="subtitle notice-category">{blog?.category}</p>
                    <h2 className="notice-title">
                      <a href={`/detail/${blog?.id}`}> {blog?.title} </a>
                    </h2>
                    <p className="description notice-description">{blog?.description}</p>
                    {userId && (
                      <div style={{ position: 'absolute', right: 0, top: 0 }}>
                        <FontAwesome name="trash" style={{ margin: '15px', cursor: 'pointer' }} size="2x" onClick={() => handleDelete(blog.id)} />
                        <Link to={`/update/${blog.id}`}>
                          <FontAwesome name="edit" style={{ cursor: 'pointer' }} size="2x" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="outstanding-footer no-bkg">
              <button onClick={fetchMore} className="outstanding-link notice-button">
                <span className="text">Carregar mais posts</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
