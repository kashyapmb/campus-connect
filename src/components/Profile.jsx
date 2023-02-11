import React from "react"
import ProfilePic from "../images/Cryst3l.jpg"

import Box from "./../../node_modules/@mui/material/Box"
import Tab from "./../../node_modules/@mui/material/Tab"
import TabContext from "./../../node_modules/@mui/lab/TabContext"
import TabList from "./../../node_modules/@mui/lab/TabList"
import TabPanel from "./../../node_modules/@mui/lab/TabPanel"

const Profile = (e) => {
	const [value, setValue] = React.useState("1")

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<>
			<div className="container-fluid profile my-3">
				<div className="row mx-auto	">
					<div className="col-10 mx-auto">
						<div className="row">
							<div className="col-8 mx-auto border_div ">
								<div className="row mt-5">
									<div className="col-4 border_div ">
										<img src={ProfilePic} className="profileImg m-1	" />
									</div>
									<div className="col-8 border_div p-3 ">
										<h4>Kashyap Bavadiya</h4>
										<h6>Birla Vishvakarma Mahavidyalaya</h6>
										<h6>Surat, Gujarat</h6>

										<div className="row">
											<div className="col-auto">10-Following</div>
											<div className="col-auto">253-Followers</div>
										</div>
									</div>
								</div>
								<div className="TabinnProfile">
									
								</div>

							</div>
							<div className="col-4 mx-auto border_div">
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
								<h1>Profile Page</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile
