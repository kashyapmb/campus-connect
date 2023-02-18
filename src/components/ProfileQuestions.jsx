import React from "react"
import ProfileQuestionsData from "../userdata/ProfileQuestionsData"
import ZQuestions from "./ZQuestions"

const ProfileQuestions = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col mx-auto">
						{ProfileQuestionsData.map((item, ind) => {
							return (
								<>
									<ZQuestions
										index={ind}
										question={item.question}
										answer={item.answer}
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

export default ProfileQuestions
