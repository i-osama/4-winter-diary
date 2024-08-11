import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaUndo, FaRedo } from 'react-icons/fa';

const TextEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [images, setImages] = useState([]);
  const [fontSize, setFontSize] = useState(14);
  
  const quillRef = React.useRef(null);

  const handleContentChange = (value) => {
    setContent(value);
    const text = value.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ');
    setWordCount(text.split(' ').filter(word => word.length > 0).length);
    setCharCount(text.replace(/\s/g, '').length);
  };

  const handleFontSizeChange = (e) => {
    const newSize = e.target.value;
    setFontSize(newSize);
    quillRef.current.getEditor().root.style.fontSize = `${newSize}px`;
  };

  const handleUndo = () => {
    quillRef.current.getEditor().history.undo();
  };

  const handleRedo = () => {
    quillRef.current.getEditor().history.redo();
  };

  const handlePublish = () => {
    if (wordCount < 20) {
      alert('Minimum word limit is 20.');
    } else {
      alert('Article published!');
    }
  };

  const handleSave = () => {
    alert('Article saved!');
  };

  const handleImageAdd = () => {
    if (images.length >= 2) {
      alert('You cannot add more than 2 images.');
      return;
    }
    const imageUrl = prompt('Enter image URL');
    if (imageUrl) {
      setImages([...images, imageUrl]);
    }
  };

  const handleImageRemove = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <div>
          <button className="btn btn-outline-secondary mr-2" onClick={handleUndo}><FaUndo /></button>
          <button className="btn btn-outline-secondary mr-2" onClick={handleRedo}><FaRedo /></button>
          <span className="text-right mx-3">
            <b> Total Words: {wordCount} | Total Characters: {charCount} </b>
      </span>
          <input
            type="number"
            className="form-control d-inline-block mr-2"
            style={{ width: '60px' }}
            value={fontSize}
            onChange={handleFontSizeChange}
            min={8}
            max={48}
            step={1}
          />
          <button className="btn btn-outline-secondary" onClick={handleImageAdd}>Image</button>
        </div>
        <div>
          <button className="btn btn-secondary mr-2" onClick={handleSave}>Save</button>
          <button className="btn btn-primary" onClick={handlePublish}>Publish</button>
        </div>
      </div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Title of the article"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={handleContentChange}
        modules={{
          toolbar: [
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
          ],
          history: {
            delay: 500,
            maxStack: 100,
            userOnly: true
          }
        }}
        formats={[
          'font', 'size',
          'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet', 'indent',
          'link', 'image'
        ]}
        placeholder="Write your article here..."
        style={{ fontSize: `${fontSize}px` }}
      />
      <div className="mt-3">
        {images.map((image, index) => (
          <div key={index} className="position-relative mb-3">
            <img src={image} alt="Added" className="img-fluid" style={{ width: '100%', maxHeight: '300px' }} />
            <button
              className="btn btn-danger position-absolute"
              style={{ top: '10px', right: '10px' }}
              onClick={() => handleImageRemove(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default TextEditor;
