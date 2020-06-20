/** @format */

import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem.js";
import Footer from "./components/Footer.js";
import inputIcon from "./components/img/inputIcon.svg";

const TODO_LIST = [
	{ title: "Hang out with bf", isComplete: true },
	{ title: "Reading books", isComplete: false },
	{ title: "Learning English", isComplete: false },
];
class App extends Component {
	constructor() {
		super();
		this.state = {
			newItem: "",

			listTodo: TODO_LIST,
		};
		this.onKeyUp = this.onKeyUp.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onItemClicked = (item) => {
		const isComplete = item.isComplete;
		const { listTodo } = this.state;
		const index = listTodo.indexOf(item);
		this.setState({
			listTodo: [
				...listTodo.slice(0, index),
				{ ...item, isComplete: !isComplete },
				...listTodo.slice(index + 1),
			],
		});
	};
	onKeyUp(event) {
		const text = event.target.value;
		if (event.keyCode === 13) {
			if (text === "") {
				alert("nhap cong viec moi!");
			} else {
				this.setState({
					newItem: "",
					listTodo: [
						...this.state.listTodo,
						{ title: text, isComplete: false },
					],
				});
			}
		}
	}
	onChange(event) {
		this.setState({
			newItem: event.target.value,
		});
	}
	handleDelete = (item) => {
		const { listTodo } = this.state;
		const index = listTodo.indexOf(item);
		this.setState({
			listTodo: [
				...listTodo.slice(0, index),
				...listTodo.slice(index + 1),
			],
		});
	};
	handleActive = () => {
		const acitveTodo = TODO_LIST.filter((item) => {
			return item.isComplete === false;
		});
		this.setState({
			listTodo: acitveTodo,
		});
	};
	handleCompleted = () => {
		const completedTodo = TODO_LIST.filter((item) => {
			return item.isComplete === true;
		});
		this.setState({
			listTodo: completedTodo,
		});
	};
	handleBtnAll = () => {
		const listTodo = TODO_LIST;
		this.setState({
			listTodo: listTodo,
		});
	};

	render() {
		const { listTodo, newItem } = this.state;
		const intendTodo = this.state.listTodo.filter((item) => {
			return item.isComplete === false;
		});
		const numsTodo = intendTodo.length;

		return (
			<div className='App'>
				<div className='title'>todolist</div>
				<div className='Header'>
					<img
						src={inputIcon}
						alt=' inputicon'
						width={20}
						height={20}
					/>
					<input
						type='text'
						placeholder='add a new item'
						value={newItem}
						onChange={this.onChange}
						onKeyUp={this.onKeyUp}
					/>
				</div>
				{listTodo.map((item, index) => (
					<TodoItem
						key={index}
						item={item}
						onClick={this.onItemClicked}
						onClickDelete={this.handleDelete}
					/>
				))}
				<Footer
					numsTodo={numsTodo}
					onHandleCompleted={this.handleCompleted}
					onHandleActived={this.handleActive}
					onHandleBtnAll={this.handleBtnAll}
				/>
			</div>
		);
	}
}

export default App;
