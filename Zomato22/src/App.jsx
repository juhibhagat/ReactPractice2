import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Index";
import { AboutComponent } from "./Pages/About";

 export default function App(){
    return(
        <>
         <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutComponent />} />
                
            </Routes>
         </Router>
        </>
    )
}