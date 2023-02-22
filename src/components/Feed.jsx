import React from "react"
import ProfileLikesData from "../userdata/ProfileLikesData"
import Technology from "../userdata/Technology"

const Feed = (props) => {
	const interest = (e)=>{
		alert(e.target.innerHTML)
	}
	return (
		<>
			<div className="container-fluid profile center_div section_bg">
				<div className="row pt-3">
					<div class="col-3 ">
						{Technology.map((obj, ind) => {
							return (
								<>
									<div className="container feed_sidebar border_div" onClick={interest}>
										<div className="row my-2">
											<div className="col-2">
												<img
													src={obj.pic}
													style={{ width: 30, height: 30, borderRadius: 50 }}
												/>
											</div>
											<div className="col-10 d-flex align-items-center">{obj.tech}</div>
										</div>
									</div>
								</>
							)
						})}
					</div>
					<div class="col-7">
						{ProfileLikesData.map((obj, ind) => {
							return (
								<>
									<div className="container border_div">
										<div className="row align-items-center pt-2 pe-2">
											<div className="col-auto">
												<img
													src={obj.imgSrc}
													style={{ width: 40, height: 40, borderRadius: 50 }}
												/>
											</div>
											<div className="col-4">
												<div className="row">{obj.name}</div>
												<div className="row">{obj.date}</div>
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
												<h6>{obj.title}</h6>
											</div>
										</div>
										<div className="row mt-1">
											<div className="col">
												<img src={obj.imgSrc} />
											</div>
										</div>
										<div className="row mt-2 mb-3">
											<div className="col-auto">
												<button className="btn btn-outline-success">
													<i class="bi bi-hand-thumbs-up-fill"></i> {obj.like}
												</button>
												<button className="btn btn-outline-danger ms-2">
													<i class="bi bi-hand-thumbs-down-fill"></i>{" "}
													{obj.dislike}
												</button>
											</div>
										</div>
									</div>
								</>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Feed
