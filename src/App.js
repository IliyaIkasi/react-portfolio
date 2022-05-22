import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Projects from "./Components/project/Projects";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Resume from "./Components/resume/Resume";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/experience" element={<About />} />
					<Route path="/contacts" element={<Contact />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
				{/* <Footer /> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
