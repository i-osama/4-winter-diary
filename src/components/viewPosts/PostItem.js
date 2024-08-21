import React from 'react';
import { SlLike } from "react-icons/sl";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaPenNib, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ViewFullPost from './ViewFullPost';

const PostItem = (props) => {
    const likes = ['1234534','42524341341','14134141','144441413'];
    const comments = ['414325423','1234534','42524341341','14134141','144441413'];

    let { postId, title, description, imgUrl, postUrl, author, date, currentUserId, authorId } = props;
    const edited_description = description ? description.slice(0, 88) : '';

    return (
        <div>
            <div className="my-3">
                <div className="card">
                    <img src={!imgUrl ? imgUrl : "https://wallpaperaccess.com/full/1224097.jpg"} className="card-img-top" alt="Problem while loading image..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title : ''}
                        </h5>
                        <p className="card-text">{edited_description ? edited_description : ''}...</p>
                        <p className="card-text"><small className="text-body-secondary"><FaPenNib /> By <b>{author ? author : "Unknown"}</b> on {new Date(date).toGMTString()}</small></p>
                        {likes.length ? <p className="card-text"><SlLike /> Liked By: <b>{likes.length}</b></p> : " "}
                        {comments.length ? <p className="card-text"><LiaCommentsSolid /> Total comments: <b>{comments.length}</b></p> : ""}
                        <Link to={`/full-story/${postId}`} className="btn btn-sm btn-dark">Read More</Link>
                    </div>
                    {currentUserId === authorId && (
                        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                            <Link to={`/edit-post/${postId}`} className="btn btn-primary btn-sm">
                                <FaEdit />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PostItem;
