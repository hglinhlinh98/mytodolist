/** @format */

import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
	render() {
		const {
			numsTodo,
			onHandleCompleted,
			onHandleActived,
			onHandleBtnAll,
		} = this.props;

		return (
			<div className='Footer'>
				<p style={{ display: "inline" }}> {numsTodo} items left</p>
				<div className='btnFooter'>
					<button onClick={onHandleCompleted}>Completed</button>
					<button onClick={onHandleActived}>Acitve</button>
					<button onClick={onHandleBtnAll}>All</button>
				</div>
			</div>
		);
	}
}

export default Footer;
