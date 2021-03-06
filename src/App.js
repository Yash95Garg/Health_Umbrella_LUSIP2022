import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Faq from "./Components/faq/Faq";
import Forgot from "./Components/forgot/Forgot";
import Login from "./Components/Log in/Login";
import Home from "./Components/Home/Home";
import CaseOverview from "./Components/CaseOverview/CaseOverview";
import Diseases from "./Components/diseases/diseases/Diseases";
import Pathies from "./Components/pathies/Pathies";
import DirectPageTestimonials from './Components/pathies/DirectPageTestimonials/DirectPageTestimonials'
import YoutubePageTestimonials from "./Components/pathies/YoutubePageTestimonials/YoutubePageTestimonials";
import { Donate } from "./Components/donateUs/Donate";
import Clinic from "./Components/clinic/Clinic";
import Start from "./Components/Get_Started/Start";
import Feedback from "./Components/Feedback/FeedbackPage";
export default function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" element={<Home />}/>
        <Route path="/login/ForgotPassword" element={<Forgot />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/pathy/homeopathy/" element={<Pathies />}/>
        <Route path="/disease/migraine/" element={<Diseases />}/>
        <Route path="/pathy/homeopathy/direct-testimonials" element={<DirectPageTestimonials />}/>
        <Route path="/pathy/homeopathy/youtube-testimonials" element={<YoutubePageTestimonials />}/>
        <Route path="/pathy/homeopathy/direct-testimonials/case1" element={<CaseOverview />}/>
        <Route path="/donation" element={<Donate />}/>
        <Route path="/clinics" element={<Clinic />}/>
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/start" element={<Start/>}/>
        <Route path="/faq" element={<Faq/>}/>
            

      </Switch>
      {/* <Diseases/> */}
      {/* <Home /> */}
      {/* <CaseOverview /> */}
    </Router>
  );
}
