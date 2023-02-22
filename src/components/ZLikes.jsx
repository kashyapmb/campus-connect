import React from "react"
import PIC from "../images/Cryst3l.jpg"

const ZLikes = (props) => {
	return (
		<>
			<div className="container border_div">
				<div className="row align-items-center pt-2 pe-2">
					<div className="col-auto">
						<img
							src={props.dp}
							style={{ width: 40, height: 40, borderRadius: 50 }}
						/>
					</div>
					<div className="col-4">
						<div className="row">{props.name}</div>
						<div className="row">{props.date}</div>
					</div>
					<div className="col-1 ms-auto">
						<div class="dropdown">
							<button
								class="btn btn-outline-success "
								style={{ borderRadius: 50 }}
							>
								∙∙∙
							</button>
						</div>
					</div>
				</div>
				<div className="row mt-1">
					<div className="col">
						<h6>{props.title}</h6>
					</div>
				</div>
				<div className="row mt-1">
					<div className="col">
						<img src={props.imgSrc} />
					</div>
				</div>
				<div className="row mt-2 mb-3">
					<div className="col-auto">
						<button className="btn btn-outline-success" >
							<i class="bi bi-hand-thumbs-up-fill"></i> {props.like}
						</button>
						<button className="btn btn-outline-danger ms-2">
							<i class="bi bi-hand-thumbs-down-fill"></i> {props.dislike}
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ZLikes
