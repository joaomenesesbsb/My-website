import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeUser from "./routes/HomeUser";


export default function App() { 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeUser />} />
    </Routes>
  </BrowserRouter>
  )
}

