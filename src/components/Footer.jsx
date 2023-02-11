import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
	return (
		<>
			<div class="container mt-5 col-10">
				<footer
					class="text-center text-lg-start"
					// style="background-color: #db6930;"
				>
					<div class="text-center text-white p-3 bg-success">
						© 2023 Copyright:{" "}
						<NavLink className="text-white bg-success" to="/">
							campusconnect.com
						</NavLink>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Footer
