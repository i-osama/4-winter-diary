import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

const ViewFullPost = () => {
  const { postId } = useParams();

  // ----------------------- Temp Variables Start --------------------------------
  const author = "";
  const date = "10 August 2024";
  const content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, excepturi ex blanditiis quisquam id quia nisi itaque corrupti autem necessitatibus cum delectus dicta perferendis assumenda non sequi tempora quam ipsum doloribus ipsa dignissimos! Iure quo vel qui provident sapiente, sint totam, voluptatibus eos asperiores eveniet minima officia hic tenetur nostrum aperiam quod nemo ducimus in cupiditate!";
  const imageUrl = "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1k5M6v.img?w=800&h=435&q=60&m=2&f=jpg";

  // ----------------------- Temp Variables End --------------------------------

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (commentText.trim()) {
      setComments([...comments, { text: commentText, replies: [] }]);
      setCommentText('');
    }
  };

  const handleReply = (index, replyText) => {
    const newComments = [...comments];
    newComments[index].replies.push(replyText);
    setComments(newComments);
  };

  return (
    // <div>
    //           <h1>Post ID: {postId}</h1>      
    // </div>
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <p className="card-title">{author ? author : "Unknown"}</p>
          <p className="card-subtitle mb-2 text-muted">{date}</p>
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
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h5>Comments</h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment"
          ></textarea>
          <button className="btn btn-secondary mt-2" onClick={handleComment}>
            Comment
          </button>
        </div>
        {comments.map((comment, index) => (
  <div key={index} className="mb-3">
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <img src={comment.userImage} className="rounded-circle" alt="User" width="40" height="40" />
          <h5 className="ml-2 mb-0">{comment.userName}</h5>
        </div>
        <p className="card-text">{comment.text}</p>
        <ReplySection
          commentIndex={index}
          handleReply={handleReply}
        />
        {comment.replies.map((reply, replyIndex) => (
          <div key={replyIndex} className="card mt-2">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <img src={reply.userImage} className="rounded-circle" alt="User" width="30" height="30" />
                <h6 className="ml-2 mb-0">{reply.userName}</h6>
              </div>
              <p className="card-text">{reply.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
}


const ReplySection = ({ commentIndex, handleReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      handleReply(commentIndex, replyText);
      setReplyText('');
    }
  };

  return (
    <div className="mt-2">
      <textarea
        className="form-control"
        rows="2"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="Reply to this comment"
      ></textarea>
      <button className="btn btn-secondary mt-2" onClick={handleReplySubmit}>
        Reply
      </button>
    </div>
  );
};

export default ViewFullPost
