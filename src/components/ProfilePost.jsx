import React from "react"
import ProfilePostData from "../userdata/ProfilePostData"
import Post from "./Post"

const ProfilePost = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col mx-auto">
						{ProfilePostData.map((item, ind) => {
							return (
								<>
									<Post
										index={ind}
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

export default ProfilePost
