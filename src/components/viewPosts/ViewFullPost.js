import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewFullPost = () => {
  const { postId } = useParams();

  // ----------------------- Temp Variables Start --------------------------------
  const author = "";
  const date = "10 August 2024";
  const content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, excepturi ex blanditiis quisquam id quia nisi itaque corrupti autem necessitatibus cum delectus dicta perferendis assumenda non sequi tempora quam ipsum doloribus ipsa dignissimos! Iure quo vel qui provident sapiente, sint totam, voluptatibus eos asperiores eveniet minima officia hic tenetur nostrum aperiam quod nemo ducimus in cupiditate!";
  
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
        <h5 className="card-title">{author?author:"Unknown"}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        {/* <h3 className="card-title">{title}</h3> */}
        <h3 className="card-title">This will be title: {postId}</h3>
        <p className="card-text">{content}</p>
        <button className="btn btn-primary" onClick={handleLike}>
          Like ({likes})
        </button>
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
              <p className="card-text">{comment.text}</p>
              <ReplySection
                commentIndex={index}
                handleReply={handleReply}
              />
              {comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="card mt-2">
                  <div className="card-body">
                    <p className="card-text">{reply}</p>
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
