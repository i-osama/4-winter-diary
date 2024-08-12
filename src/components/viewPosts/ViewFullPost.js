import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import CommentSection from '../Comments/CommentSection';
import { FaRegBookmark } from "react-icons/fa6";

import { FcBookmark } from "react-icons/fc";
import { FaShareAlt } from "react-icons/fa";

const ViewFullPost = () => {
  const { postId } = useParams();

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  // ----------------------- Temp Variables Start --------------------------------
  const author = "";
  const date = "10 August 2024";
  const content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, excepturi ex blanditiis quisquam id quia nisi itaque corrupti autem necessitatibus cum delectus dicta perferendis assumenda non sequi tempora quam ipsum doloribus ipsa dignissimos! Iure quo vel qui provident sapiente, sint totam, voluptatibus eos asperiores eveniet minima officia hic tenetur nostrum aperiam quod nemo ducimus in cupiditate!";
  const imageUrl = "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1k5M6v.img?w=800&h=435&q=60&m=2&f=jpg";

  // ----------------------- Temp Variables End --------------------------------

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this post!',
        text: 'Here is an interesting post I found.',
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Share feature is not supported in your browser.');
    }
  };

  return (
    // <div>
    //           <h1>Post ID: {postId}</h1>      
    // </div>
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="d-flex mb-3">
            <div>
              <p className="card-title">{author ? (<> <b>Author:</b>  {author} </>) : (<><b>Author:</b> Unknown</>)}</p>
              <p className="card-subtitle mb-2 text-muted">Publishing date: {date}</p>
            </div>

          </div>
          {/* <h3 className="card-title">{title}</h3> */}


          <div className="d-flex justify-content-center flex-column align-items-center">
            <h2 className="card-title">This will be Title: {postId}</h2>

            <img src={imageUrl} className="img-fluid mb-5 mt-3" alt="..."></img>
            <hr style={{ width: '100%', borderTop: '1px solid #000' }} />
          </div>

          <p className="card-text">{content}</p>

          <div className="d-flex justify-content-center">
            <button type="button" className="btn  btn-outline-dark admin-c-btn-hover " onClick={handleLike}>
              <FcLike style={{ fontSize: '30px' }} /> {likes}
            </button>
            <button className="btn btn-outline-dark mx-3" onClick={handleBookmarkClick}>
              {isBookmarked ? <FcBookmark style={{ fontSize: '25px' }}/> : <FaRegBookmark style={{ fontSize: '25px' }}/>}
            </button>
            <button className="btn btn-outline-dark" onClick={handleShare}>
              <FaShareAlt style={{ fontSize: '25px' }} />
            </button>
          </div>
        </div>
      </div>

      <CommentSection />

    </div>
  );
}


export default ViewFullPost
