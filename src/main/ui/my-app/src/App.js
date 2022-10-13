import TestPage from "./Pages/TestPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import SignupPage from "./Pages/SignupPage";
import ImagePage from "./Pages/ImagePage";
import VideoPage from "./Pages/VideoPage";
import TransferPage from "./Pages/TransferPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import React from "react";


function App () {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignupPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/test" element={<TestPage />} />
                <Route path="/student/:id" element={<ProfilePage/>} />
                <Route path="/images" element={<ImagePage/>}/>
                <Route path="/video" element={<VideoPage/>}/>
                <Route path="/transfer" element={<TransferPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}



   
export default App;