import React from "react"
import ProfileAnswersData from "../userdata/ProfileAnswersData"
import ZAnswers from "./ZAnswers"

const ProfileAnswers = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col mx-auto">
						{ProfileAnswersData.map((item, ind) => {
							return (
								<>
									<ZAnswers
										index={ind}
										name="Kashyap Bavadiya"
										date="12.03.2002"
										question={item.question}
										answer={item.answer}
										like={item.dislike}
										dislike={item.like}
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

export default ProfileAnswers
