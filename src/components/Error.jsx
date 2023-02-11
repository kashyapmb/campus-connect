import React from "react"
import { NavLink } from "react-router-dom"

function Error() {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-10 mx-auto">
						<h1> 404 Error Page </h1>
						<p> Sorry, This page doesn't exist </p>
						<NavLink to="/">Home Page</NavLink>{" "}
						<NavLink to="/feed"> Feed Page</NavLink>
					</div>
				</div>
			</div>
		</>
	)
}

export default Error
