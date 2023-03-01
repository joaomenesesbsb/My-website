import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeUser from "./routes/HomeUser";
import UserAboutMe from "./routes/UserAboutMe";


export default function App() { 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeUser />} >
        <Route index element={<UserAboutMe/>}/>
      </Route>
      
    </Routes>
  </BrowserRouter>
  )
}

