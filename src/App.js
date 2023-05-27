import {Box,} from "@mui/material"
import ResponsiveDrawer from "./Components/AppBar"
import BasicCard from "./Components/Card"
import { FormComp } from "./Components/FormComp"
import { Home } from "./pages/Home"
import { Registration } from "./pages/Registration"
import { Routes, Route } from "react-router-dom"
import { Layout } from "./Components/Layout"
import { Login } from "./pages/Login"
import { AddArticle } from "./appfeatures/articles/AddArticle"
import { EditArticle } from "./appfeatures/articles/EditArticle"
import { SingleArticle } from "./appfeatures/articles/SingleArticle"
import { Poem } from "./pages/Poem"
import { Articles } from "./pages/Articles"
import { Stories } from "./pages/Stories"
import { Video } from "./pages/Video"
import { About } from "./pages/About"
import { MotivationalMsg } from "./pages/MotivationalMsg"
import { SingleMotMsg } from "./appfeatures/motivationalmsg/SingleMotMsg"
import { EditMotMsg } from "./appfeatures/motivationalmsg/EditMotMsg"
import { AddMotMsg } from "./appfeatures/motivationalmsg/AddMotMsg"
import { AddPoem } from "./appfeatures/poems/AddPoem"
import { EditPoem } from "./appfeatures/poems/EditPoem"
import { SinglePoem }  from "./appfeatures/poems/SinglePoem"
import { AddStory }  from "./appfeatures/stories/AddStory"
import { EditStory }  from "./appfeatures/stories/EditStory"
import { SingleStory }  from "./appfeatures/stories/SingleStory"

const App = () => {
  
  return(
    <Routes>
         <Route path="/" element={<Home/>}/>

         {/* These are the poem routes */}
         <Route path="poems" element={<Poem/>}/>
          <Route path="addpoem" element={<AddPoem/>} />
          <Route path="editpoem/:id" element={<EditPoem/>} />
          <Route path="singlepoem/:id" element={<SinglePoem/>} />
         
         {/* These are the stories routes */}
         <Route path="stories" element={<Stories/>}/>
         <Route path="addstory" element={<AddStory/>}/>
         <Route path="editstory/:id" element={<EditStory/>}/>
         <Route path="singlestory/:id" element={<SingleStory/>}/>

         {/* These are the are the article routes */}
         <Route path="articles" element={<Articles/>}/>
         <Route path="addarticle" element={<AddArticle/>}/>
         <Route path="editarticle/:id" element={<EditArticle/>}/>
         <Route path="singlearticle/:id" element={<SingleArticle/>}/>
         {/* These are the are the article routes */}
         
         <Route path="motmsg" element={<MotivationalMsg/>}/>
         <Route path="addmotmsg" element={<AddMotMsg/>}/>
         <Route path="editmotmsg/:id" element={<EditMotMsg/>}/>
         <Route path="singlemotmsg/:id" element={<SingleMotMsg/>}/>

         {/* These are the are the article routes */}
         <Route path="video" element={<Video/>}/>

         {/* These are the are the article routes */}
        <Route path="about" element={<About/>}/>

        {/* This the registration routes */}
        <Route path="register" element ={<Registration/>}/>
    </Routes>
  )
  
}

export default App 