import React from "react"
import NotificationsData from "../userdata/NotificationsData"

const Notifications = () => {
	return (
		<div className="container-fluid profile my-3">
			<div className="row mx-auto ">
				<div className="col-8 mx-auto border_div">
					{NotificationsData.map((item, ind) => {
						return (
							<>
								<div className="container border_div">
									<div className="row align-items-center pt-2 pe-2">
										<div className="col-auto">
											<img
												src={item.dp}
												style={{ width: 40, height: 40, borderRadius: 50 }}
											/>
										</div>
										<div className="col-4">
											<div className="row">{item.msg}</div>
											<div className="row">{item.time}</div>
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
											<h6>{item.question}</h6>
										</div>
									</div>
									<div className="row mt-1">
										<div className="col">
											<h6>{item.answer}</h6>
										</div>
									</div>
								</div>
							</>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Notifications
