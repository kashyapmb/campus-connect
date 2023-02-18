import React from "react"
import { useState } from "react"
import PIC from "../images/Cryst3l.jpg"
import ProfileAnswersData from "../userdata/ProfileAnswersData"

const ZQuestions = (props) => {
	return (
		<>
			<div className="container border_div">
				<div className="row mt-3">
					<div className="col">
						<h6><b>Q. {props.question}</b></h6>
					</div>
				</div>
				<div className="row mb-2">
					<div className="col">
						<h6>{props.answer.length}-Answer</h6>
					</div>
				</div>
			</div>
		</>
	)
}

export default ZQuestions
