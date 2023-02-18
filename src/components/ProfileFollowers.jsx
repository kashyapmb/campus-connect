import React from "react"
import ProfileFollowersData from "../userdata/ProfileFollowersData"
import ZFollowers from "./ZFollowers"


const ProfileFollowers = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col mx-auto">
						{ProfileFollowersData.map((item, ind) => {
							return (
								<>
									<ZFollowers
										index={ind}
										name={item.name}
										pic={item.pic}
										college={item.college}
									/>
								</>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default ProfileFollowers
