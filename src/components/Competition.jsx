import React from "react"
import ProfileLikesData from "../userdata/ProfileLikesData"
import College from "../userdata/College"

const Competition = (props) => {
	const college = (e) => {
		alert(e.target.innerHTML)
	}
	return (
		<>
			<div className="container-fluid profile center_div feed_section">
				<div className="row">
					<div class="col-3 ">
						<div className="container feed_sidebar">
							<div className="row">
								<input type="text" className="event_input" placeholder="Search College" />
							</div>
							{College.map((obj, ind) => {
								return (
									<>
										<div className="mt-2 mb-2 border_div" onClick={college}>
											<div className="row my-2 mx-2">{obj.college}</div>
										</div>
									</>
								)
							})}
						</div>
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

export default Competition
