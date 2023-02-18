import React from "react"
import ProfileFollowingData from "../userdata/ProfileFollowingData"
import ZFollowing from "./ZFollowing"

const ProfileFollowing = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col mx-auto">
						{ProfileFollowingData.map((item, ind) => {
							return (
								<>
									<ZFollowing
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

export default ProfileFollowing
