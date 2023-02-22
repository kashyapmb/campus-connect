import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
	return (
		<>
			<div className="container mt-5">
				<footer
					className="text-center text-lg-start"
					// style="background-color: #db6930;"
				>
					<div className="text-center text-white p-3 footer_bg">
						© 2023 Copyright:{" "}
						<NavLink className="text-white" to="/">
							campusconnect.com
						</NavLink>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Footer
