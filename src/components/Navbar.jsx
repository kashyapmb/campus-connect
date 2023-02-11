import React from "react"
import { NavLink } from "react-router-dom"
import coffeeImg from '../images/coffee-cup.png'

import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EventOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CompetitionOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Navbar = () => {
	return (
		<>
			<div className="container-fluid nav_bg">
				<div className="row">
					<div className="col-10 mx-auto">
						<nav className="navbar navbar-expand-lg navbar-light bg-light">
							<div className="container-fluid">
								<NavLink className="navbar-brand" to="/">
									CampusConnect
								</NavLink>
								<button
									className="navbar-toggler"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon"></span>
								</button>
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
												to="/"
											>
											<Tooltip TransitionComponent={Zoom} title="Home" arrow>
											<HomeOutlinedIcon className="" />
											</Tooltip>
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className={(navData) =>
													navData.isActive
														? "nav-link active menu_active"
														: "nav-link"
												}
												to="/feed"
											>
												<Tooltip TransitionComponent={Zoom} title="Feed" arrow>
												<FeedOutlinedIcon />
												</Tooltip>
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className={(navData) =>
													navData.isActive
														? "nav-link active menu_active"
														: "nav-link"
												}
												to="/event"
											>
												<Tooltip TransitionComponent={Zoom} title="Event" arrow>
												<EventOutlinedIcon />
												</Tooltip>
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className={(navData) =>
													navData.isActive
														? "nav-link active menu_active"
														: "nav-link"
												}
												to="/competition"
											>
												<Tooltip TransitionComponent={Zoom} title="Competition" arrow>
												<CompetitionOutlinedIcon />
												</Tooltip>
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className={(navData) =>
													navData.isActive
														? "nav-link active menu_active"
														: "nav-link"
												}
												to="/answer"
											>
												<Tooltip TransitionComponent={Zoom} title="Answer" arrow>
												<AnswerOutlinedIcon />
												</Tooltip>
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className={(navData) =>
													navData.isActive
														? "nav-link active menu_active"
														: "nav-link"
												}
												to="/notifications"
											>
												<Tooltip TransitionComponent={Zoom} title="Notifications" arrow>
												<NotificationsOutlinedIcon />
												</Tooltip>
											</NavLink>
										</li>
									</ul>
									<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
										<li className="nav-item">
											<NavLink
												className={(navData) =>
													navData.isActive
														? "nav-link active menu_active"
														: "nav-link"
												}
												to="/buymecoffee"
											>
												<img src={coffeeImg} alt="" className="coffee_img" />
												Buy Me Coffee
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className={(navData) =>
													navData.isActive
														? "nav-link active menu_active"
														: "nav-link"
												}
												to="/profile"
											>
												Profile
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
