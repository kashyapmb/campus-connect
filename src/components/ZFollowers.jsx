import React from "react"
import { useState } from "react"

const ZFollowers = (props) => {
	return (
		<>
			<div className="container border_div hover_effect">
				<div className="row align-items-center pt-2 pe-2 mb-3">
					<div className="col-auto">
						<img
							src={props.pic}
							style={{ width: 40, height: 40, borderRadius: 50 }}
						/>
					</div>
					<div className="col-4">
						<div className="row">{props.name}</div>
						<div className="row">{props.college}</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ZFollowers
