import React, { useState } from 'react';

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

export default ReplySection;
