import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Resume from "./Components/resume/Resume";
import Experience from "./Components/experience/Experience";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/contacts" element={<Contact />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
