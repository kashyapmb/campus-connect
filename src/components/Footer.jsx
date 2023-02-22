import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
	return (
		<>
				<footer className="text-center text-lg-start mt-3">
					<div className="text-center text-white p-2 footer_bg">
						© 2023 Copyright:{" "}
						<NavLink className="text-white" to="/">
							campusconnect.com
						</NavLink>
					</div>
				</footer>
		</>
	)
}

export default Footer
