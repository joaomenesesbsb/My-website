import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeUser from "./routes/HomeUser";
import Projects from "./routes/Projects";
import UserAboutMe from "./routes/UserAboutMe";


export default function App() { 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeUser />} >
        <Route index element={<UserAboutMe/>}/>
        <Route path="/projects" element={<Projects />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
  )
}

