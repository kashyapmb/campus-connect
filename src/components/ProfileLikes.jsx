import React from "react"
import ProfileLikesData from "../userdata/ProfileLikesData"
import ZLikes from "./ZLikes"

const ProfileLikes = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col mx-auto">
						{ProfileLikesData.map((item, ind) => {
							return (
								<>
									<ZLikes
										index={ind}
                                        dp={item.imgSrc}
										name="Kashyap Bavadiya"
										imgSrc={item.imgSrc}
										title={item.title}
										date={item.date}
										like={item.like}
										dislike={item.dislike}
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

export default ProfileLikes
