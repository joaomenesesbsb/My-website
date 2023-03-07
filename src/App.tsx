import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Curriculum from "./routes/Curriculum";
import HomeUser from "./routes/HomeUser";
import Projects from "./routes/Projects";
import UserAboutMe from "./routes/UserAboutMe";

const history = createBrowserHistory();

export default function App() {

  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomeUser />} >
            <Route index element={<UserAboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculum" element={<Curriculum />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

