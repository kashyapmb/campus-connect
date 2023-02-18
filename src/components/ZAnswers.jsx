import React from "react"
import { useState } from "react"
import PIC from "../images/Cryst3l.jpg"
import ProfileAnswersData from "../userdata/ProfileAnswersData"

const ZAnswers = (props) => {
	return (
		<>
			<div className="container border_div">
				<div className="row align-items-center pt-2 pe-2">
					<div className="col-auto">
						<img
							src={PIC}
							style={{ width: 40, height: 40, borderRadius: 50 }}
						/>
					</div>
					<div className="col-4">
						<div className="row">{props.name}</div>
						<div className="row">{props.date}</div>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col">
						<h6><b>Q. {props.question}</b></h6>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h6>A. {props.answer}</h6>
					</div>
				</div>
				<div className="row mt-2 mb-3">
					<div className="col-auto">
						<button className="btn btn-outline-success" >
							<i class="bi bi-hand-thumbs-up-fill" /> {props.like}
						</button>
						<button className="btn btn-outline-danger ms-2">
							<i class="bi bi-hand-thumbs-down-fill" /> {props.dislike}
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ZAnswers
