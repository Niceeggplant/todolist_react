import React, { Component } from 'react'
import './index.css'
import { Button } from 'antd';

export default class Footer extends Component {

	//全选checkbox
	handleCheckAll = (event)=>{
		this.props.checkAllTodo(event.target.checked)
	}

	//清除已完成任务
	handleClearAllDone = ()=>{
		this.props.clearAllDone()
	}

	render() {
		const {todos} = this.props
		const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
		const total = todos.length
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<Button type="primary" danger onClick={this.handleClearAllDone} size={"small"}  >
					清除已完成任务
				</Button>
			</div>
		)
	}
}
