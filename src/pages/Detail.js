import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import Spinner from '../components/Spinner';
import '../ifsul/css/template-verde.css';
import '../style.css';
import '../ifsul/css/template-verde.css';

const Detail = ({ setActive }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  const getBlogDetail = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'blogs', id);
      const blogDetail = await getDoc(docRef);
      setBlog(blogDetail.data());
    } catch (e) {
      console.log(e);
    }
    setActive(null);
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="">
        <div className="overlay"></div>
        <img src={blog?.imgUrl} alt="" width="80%" />
        <div className="">
          <h2 className="title-details">{blog?.title}</h2>
          <p className="subtitle-details">{blog?.category}</p>
        </div>
      </div>
      <div className="container-fluid pb-4 pt-4 padding blog-single-content">
        <div className="container padding">
          <div className="row mx-0">
            <div className="col-md-12">
              <span className="meta-info text-start">
                Escrito por <p className="author">{blog?.author}</p> -&nbsp;
                {blog?.timestamp.toDate().toLocaleDateString()}
              </span>
              <p className="description-details">{blog?.description}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
