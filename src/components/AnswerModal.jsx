import React, { useState } from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"
import PIC from "../images/Cryst3l.jpg"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 650,
	height: 220,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 2,
}

const AnswerModal = (props) => {
	const [ans, setAns] = useState("")

	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => {
		setOpen(false)
		setAns("")
	}


	const typing = (event)=>{
		setAns(event.target.value)
	}

	const answerSubmited = ()=>{
		alert(ans)
		handleClose()
	}

	return (
		<div>
			<button className="give_answer" onClick={handleOpen}>
				<i class="bi bi-pencil-square"></i> Answer
			</button>
			<Modal
				keepMounted
				open={open}
				onClose={handleClose}
				aria-labelledby="keep-mounted-modal-title"
				aria-describedby="keep-mounted-modal-description"
			>
				<Box sx={style}>
					<div className="container border_div">
						<div className="row align-items-center pt-2 pe-2">
							<div className="col-auto">
								<img
									src={PIC}
									style={{ width: 40, height: 40, borderRadius: 50 }}
								/>
							</div>
							<div className="col-8">
								<div className="row">Kashyap M. Bavadiya</div>
							</div>
						</div>
						<div className="row mt-1">
							<div className="col mt-1">
								<h6>
									<strong>{props.question}</strong>
								</h6>
							</div>
						</div>
						<div className="row mt-1">
							<div className="col">
								<input
									type="text"
									className="inputFieldModal"
									placeholder="Give Your Opinion"
									value={ans}
									onChange={typing}
								/>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col">
								<button className="buttonModal" onClick={answerSubmited}>Give Answer</button>
							</div>
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	)
}

export default AnswerModal
