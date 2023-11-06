import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import { useState } from "react";

function App() {
  const [currentProject, setCurrentProject] = useState({});
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path=":id"
            element={<ProjectDetails setCurrentProject={setCurrentProject} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
