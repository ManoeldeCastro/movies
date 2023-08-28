import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";

export default function AppRoutes() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

