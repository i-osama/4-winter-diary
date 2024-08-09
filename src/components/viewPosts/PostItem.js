import React from 'react'
import { SlLike } from "react-icons/sl";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaPenNib } from "react-icons/fa6";

import { Link } from 'react-router-dom'
import ViewFullPost from './ViewFullPost';

const PostItem = (props) => {


    // ----- Likes and comments count will be grabbed using a async function ----- we will only grab the ids
    const likes = ['1234534','42524341341','14134141','144441413']
    const comments = ['414325423','1234534','42524341341','14134141','144441413']


    let {postId, title, description, imgUrl, postUrl, author, date} = props;
    
    const edited_description = description ? description.slice(0, 88) : '';
  return (
 
    <div>
              
              <div className="my-3">
          {/* <div className="card" style={{width: '18rem'}}> */}
          <div className="card">

        {/* ---------------------------------------
        please uncomment the commented line after setting up API
            <img src={!imgUrl?"https://wallpaperaccess.com/full/1224097.jpg":imgUrl} className="card-img-top" alt="Problem while loading image..."/> */}
            <img src={imgUrl?"https://wallpaperaccess.com/full/1224097.jpg":imgUrl} className="card-img-top" alt="Problem while loading image..."/>
            <div className="card-body">
              <h5 className="card-title">{!title?'':title}
              {/* <span className="badge text-bg-secondary mx-1">{source?source:"unknown source"}</span> */}
              </h5>
              <p className="card-text">{!edited_description?'':edited_description}...</p>
              <p className="card-text"><small className="text-body-secondary"><FaPenNib/> By <b> {author?author:"Unknown"} </b> on {new Date(date).toGMTString()}</small></p>
              
            {likes.length?<p className="card-text"><SlLike/> Liked By: <b> {likes.length} </b> </p>:" "}
            {comments.length?<p className="card-text"> <LiaCommentsSolid/> Total comments: <b> {comments.length} </b></p>:""}
          
              
              {/* <Link to={postUrl} target='_blank' className="btn btn-sm btn-dark">Read More</Link> */}
              <Link to={`/full-story/${postId}`} target='_blank' className="btn btn-sm btn-dark">Read More</Link>
              {/* <Link to='/full-story' target='_blank' className="btn btn-sm btn-dark">Read More</Link> */}
            </div>
            
            
          </div>
          </div>
    </div>
  )
}

export default PostItem
