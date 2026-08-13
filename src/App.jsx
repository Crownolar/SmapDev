import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ResearchAreas from "./pages/ResearchAreas";
import ResearchOutcomes from "./pages/ResearchOutcomes";
import Team from "./pages/Team";
import Collaboration from "./pages/Collaboration";
import Mentorship from "./pages/Mentorship";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research-areas" element={<ResearchAreas />} />
          <Route path="/research-outcomes" element={<ResearchOutcomes />} />
          <Route path="/team" element={<Team />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
