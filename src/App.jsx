import { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {Routes, Route, useLocation, useNavigate, Navigate} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Topbar from './scenes/global/topbar';
import Sidebar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
// import Invoices from "./scenes/invoices";
;
// import Bar from "./scenes/bar";
import Form from "./scenes/form";

// import ViewPodcast from './scenes/podcast/ViewPodcast';

// import Team from './scenes/team/Team';



import PodcastDetails from './scenes/podcasts/PodcastDetails';
// import ViewUserPodcast from './scenes/podcast/VIewUserPodcast';
// import LoginScreen from './scenes/login/LoginScreen';

import AddUser from './user/AddUser';
import ViewUser from './user/ViewUser';
import EditUser from './user/EditUser';
import ViewUserDetails from './user/ViewUserDetails';
import Addpodcast from './scenes/podcasts/Addpodcast';
import ViewPodcast from './scenes/podcasts/Viewpodcast';
import EditPodcast from './scenes/podcasts/Editpodcast'; 
import Login from './components/login';
import CategoryComponent from './components/section/Category';
import AddEpisode from './scenes/podcasts/Episodes/AddEpisode';
import Home from './home/Home';





function App() {
  const [user, setUser] = useState();
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  //const location = useLocation();
  const [authenticated, setauthenticated] = useState(null);
  const navigate= useNavigate();
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
      
    }
   
    // console.log(location.user);

  },[]);
  // if (!authenticated) {
  //   // Redirect
  //  // navigate("/login");
  //  return <Navigate replace to="/login" />;
  //   } else {

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {/* <Login></Login> */}
        {! authenticated ? (
      <Login/>
    ):(
      <>
          <Sidebar isSidebar={isSidebar} />
          
          <main className="content">
            <Topbar />
            <Routes>
            <Route path="/" element={<Dashboard/>} />
              {/* <Route path="/login" element={<Login></Login>} /> */}
               <Route path="/contacts" element={<ViewUser />} /> 
               <Route path="/useredits/:id" element={<EditUser />} /> 
              <Route path="/podcasts" element={<Addpodcast/>} />
              <Route path="/form" element={<AddUser />} />
              <Route path="/viewuserdetails/:id" element={<ViewUserDetails/>} />
              <Route path="/podcastdetailpage/:id" element={<PodcastDetails />} />
              <Route path="/podcastdetails" element={<PodcastDetails />} />
              <Route path="/editpodcast" element={<EditPodcast/>} />
              <Route path="/podcastedit/:id" element={<EditPodcast />} />
              {/* <Route path="/faq" element={<FAQ />} /> */}
              <Route path="/viewpodcasts" element={<ViewPodcast />} />
              <Route path="/category" element={<CategoryComponent />} />
              <Route path="/addEpisode" element={<AddEpisode />} />
            </Routes>
            </main>
            </>
       )}    
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
//}

export default App
