import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Feed from "./components/Feed"
import Event from "./components/Event"
import Competition from "./components/Competition"
import Answer from "./components/Answer"
import Notifications from "./components/Notifications"
import Coffee from "./components/Coffee"
import Profile from "./components/Profile"
import Error from "./components/Error"
import Footer from "./components/Footer"
import "./index.css"
import { Routes, Route } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/feed" element={<Feed />} />
				<Route exact path="/event" element={<Event />} />
				<Route exact path="/competition" element={<Competition />} />
				<Route exact path="/answer" element={<Answer />} />
				<Route exact path="/notifications" element={<Notifications />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
