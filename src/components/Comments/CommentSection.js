import React, { useState } from 'react';
import ReplySection from './ReplySection';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    const handleComment = () => {
        if (commentText.trim()) {
            setComments([...comments, { text: commentText, replies: [], userImage: 'https://www.sideshow.com/product-asset/400312', userName: 'Default User' }]);
            setCommentText('');
        }
    };

    const handleReply = (index, replyText) => {
        const newComments = [...comments];
        newComments[index].replies.push({ text: replyText, userImage: 'https://th.bing.com/th/id/OIP.vjBfEj2bKCphjHJg0Tqg4AHaEK?rs=1&pid=ImgDetMain', userName: 'Default User' });
        setComments(newComments);
    };

    return (
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
            <div>
                {comments.map((comment, index) => (
                    <div key={index} className="mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-2">
                                    <img src={comment.userImage?comment.userImage:"https://wallpapers.ispazio.net/wp-content/uploads/2022/09/ispazio-30.jpg"} className="rounded-circle" alt="User" width="40" height="40" />
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
};

export default CommentSection;
