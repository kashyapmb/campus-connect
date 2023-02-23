import React, { useState } from "react"
import QuestionAnswer from "../userdata/QuestionAnswer"
import Skills from "../userdata/Skills"
import AnswerModal from "./AnswerModal"

const Answer = (props) => {
	const college = (e) => {
		alert(e.target.innerHTML)
	}

	// const [answerNum, setAnswerNum] = useState(
	// 	ProfileFollowersData.length
	// )

	return (
		<>
			<div className="container-fluid profile center_div feed_section">
				<div className="row">
					<div class="col-3">
						<div className="container feed_sidebar pb-2">
							<div className="sidebar_tag_answer">
								Add Your Expertise or Skills
							</div>
							<hr />
							{Skills.map((obj, ind) => {
								return (
									<>
										<div className="mt-2 mb-2 border_div" onClick={college}>
											<div className="row my-2 mx-2">{obj.skill}</div>
										</div>
									</>
								)
							})}
							<div className="mt-2 mb-2" onClick={college}>
								<button className="add_skill_btn">Add Skills</button>
							</div>
						</div>
					</div>
					<div class="col-7">
						{QuestionAnswer.map((obj, ind) => {
							return (
								<>
									<div className="container border_div pb-3">
										<div className="row align-items-center pt-2 pe-2">
											<div className="col-auto">
												<img
													src={obj.dp}
													style={{ width: 40, height: 40, borderRadius: 50 }}
												/>
											</div>
											<div className="col-8">
												<div className="row">{obj.name}</div>
												<div className="row">{obj.college}</div>
											</div>
										</div>
										<div className="container border_div mt-3">
											<div className="row mt-2">
												<h6>
													<strong>{obj.question}</strong>
												</h6>
											</div>
											<div className="row">
												<h6>{obj.answer.length} ◦Answers</h6>
											</div>
											<div className="row mb-3">
												<div className="col">
													<AnswerModal question={obj.question}/>
												</div>
											</div>
										</div>
									</div>
									<hr />
								</>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Answer
