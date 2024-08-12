
import './App.css';
import Navbar from './components/Navbar';


import { BrowserRouter, Route, Routes } from "react-router-dom";  
import Posts from './components/viewPosts/Posts';
import { useState } from 'react';
import ViewFullPost from './components/viewPosts/ViewFullPost';
import ProfilePage from './components/Profile/ProfilePage';
import TextEditor from './components/Write-post/TextEditor';
import Login from './components/Login-Signup/Login';
import Signup from './components/Login-Signup/Signup';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  
  // state = {
  //   progress: 0
  // };
  const [progress, setProgress] = useState(0);

  // setProgress = (progress)=>{
  //   this.setState({progress: progress});
  // }
  return (
   <>
       <BrowserRouter>

   <Navbar/>


   <Routes>
    {/* <Route exact path="/" element={<Posts setProgress= {setProgress} apiKey={apiKey}  key="general"  pageSize={8} country="us" category="general"/>}></Route> */}
    {/* <Route exact path="/" element={<Posts apiKey={apiKey}  key="general"  pageSize={8} country="us" category="general"/>}></Route> */}
    <Route exact path='/' element={<Posts/>}></Route>
    <Route exact path='/sci-fi' element={<Posts category = {"Science-fiction"}/>}></Route>
    <Route exact path='/horror' element={<Posts category = {"Horror"}/>}></Route>
    <Route exact path='/thriller' element={<Posts category = {"Thriller"}/>}></Route>
    <Route exact path='/travel' element={<Posts category = {"Travel"}/>}></Route>
    <Route exact path='/articles' element={<Posts category = {"Articles"}/>}></Route>
    <Route exact path='/life-experience' element={<Posts category = {"Life-experience"}/>}></Route>


    <Route exact path='/full-story/:postId' element={<ViewFullPost/>}></Route>
    <Route exact path='/admin-profile' element={<ProfilePage/>}></Route>
    <Route exact path='/text-editor' element={<TextEditor/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>
    </Routes>

   </BrowserRouter>
   
   </>
  );
}

export default App;
