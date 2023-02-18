import React from "react"
import { useState } from "react"
import PIC from "../images/Cryst3l.jpg"
import ProfilePostData from "../userdata/ProfilePostData"

const Post = (props) => {
	const [like, setLike] = useState(props.like)
	const [dislike, setDisLike] = useState(props.dislike)

	// const [like, setLike] = useState({
	// 	like: 0,
	// })

	const incLike = (e) => {
		console.log(e)
	}

	// // setLike(like+1)
	// setDisLike(dislike+1)
	// const likePlus = (id) => {
	// 	ProfilePostData[id].like++
	//     setLike(ProfilePostData[id].like)
	// }

	// const dislikePlus = (id) => {
	// 	ProfilePostData[id].like++
	//     setDisLike(ProfilePostData[id].like)
	// }

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
						<button className="btn btn-outline-success" onClick={incLike}>
							<i class="bi bi-hand-thumbs-up-fill"></i> {like}
						</button>
						<button className="btn btn-outline-danger ms-2">
							<i class="bi bi-hand-thumbs-down-fill"></i> {dislike}
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Post
