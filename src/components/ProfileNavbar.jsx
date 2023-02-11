import React from "react"
import { NavLink } from "react-router-dom"

const ProfileNavbar = () => {
	return (
		<>
			<div className="row mt-2">
				<div className="col ">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container-fluid">
							<div
								className="navbar_links collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0 ul_block">
									<li className="nav-item">
										<NavLink
											className={(navData) =>
												navData.isActive
													? "nav-link active menu_active"
													: "nav-link "
											}
											aria-current="page"
											to="/profile/post"
										>
											<h6>Post</h6>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className={(navData) =>
												navData.isActive
													? "nav-link active menu_active"
													: "nav-link "
											}
											aria-current="page"
											to="/profile/following"
										>
											<h6>Following</h6>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className={(navData) =>
												navData.isActive
													? "nav-link active menu_active"
													: "nav-link "
											}
											aria-current="page"
											to="/profile/followers"
										>
											<h6>Followers</h6>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className={(navData) =>
												navData.isActive
													? "nav-link active menu_active"
													: "nav-link "
											}
											aria-current="page"
											to="/profile/questions"
										>
											<h6>Questions</h6>
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className={(navData) =>
												navData.isActive
													? "nav-link active menu_active"
													: "nav-link "
											}
											aria-current="page"
											to="/profile/answers"
										>
											<h6>Answers</h6>
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	)
}

export default ProfileNavbar
