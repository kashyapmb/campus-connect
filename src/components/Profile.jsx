import React from "react"
import ProfilePic from "../images/Cryst3l.jpg"

import Box from "./../../node_modules/@mui/material/Box"
import Tab from "./../../node_modules/@mui/material/Tab"
import TabContext from "./../../node_modules/@mui/lab/TabContext"
import TabList from "./../../node_modules/@mui/lab/TabList"
import TabPanel from "./../../node_modules/@mui/lab/TabPanel"
import ProfilePost from "./ProfilePost"
import ProfileFollowing from "./ProfileFollowing"
import ProfileFollowers from "./ProfileFollowers"
import ProfileQuestions from "./ProfileQuestions"
import ProfileAnswers from "./ProfileAnswers"

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
								<Box sx={{ width: "100%", typography: "body1" }}>
									<TabContext value={value}>
										<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
											<TabList
												onChange={handleChange}
												aria-label="lab API tabs example"
											>
												<Tab label="Post" value="1" />
												<Tab label="Following" value="2" />
												<Tab label="Followers" value="3" />
												<Tab label="Questions" value="4" />
												<Tab label="Answers" value="5" />
											</TabList>
										</Box>
										<TabPanel value="1">
											<ProfilePost />
										</TabPanel>
										<TabPanel value="2">
											<ProfileFollowing />
										</TabPanel>
										<TabPanel value="3">
											<ProfileFollowers />
										</TabPanel>
										<TabPanel value="4">
											<ProfileQuestions />
										</TabPanel>
										<TabPanel value="5">
											<ProfileAnswers />
										</TabPanel>
									</TabContext>
								</Box>
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
