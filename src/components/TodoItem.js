/** @format */

import React, { Component } from "react";
import classNames from "classnames";
import "./TodoItem.css";
import tick from "./img/tick.svg";
import tickComplete from "./img/tickComplete.svg";
import deleteIcon from "./img/deleteIcon.svg";
class TodoItem extends Component {
	render() {
		const { item, onClick, onClickDelete } = this.props;
		let url = tick;
		if (item.isComplete) {
			url = tickComplete;
		}
		return (
			<div
				className={classNames("TodoItem", {
					"TodoItem-complete": item.isComplete,
				})}>
				<img
					src={url}
					alt='img'
					width={25}
					onClick={() => onClick(item)}
				/>
				<p onClick={() => onClick(item)}> {this.props.item.title} </p>
				<img
					onClick={() => onClickDelete(item)}
					src={deleteIcon}
					alt='delete'
					width={25}
					className='deleteIcon'
				/>
			</div>
		);
	}
}

export default TodoItem;
