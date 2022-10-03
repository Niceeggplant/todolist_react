import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'
import { Input } from 'antd';


export default class Header extends Component {

	static propTypes = {
		addTodo:PropTypes.func.isRequired  //必填
	}

	handleKeyUp = (e)=>{

		if(e.target.value.trim() === ''){
			alert('输入不能为空')
			return
		}
		const todoObj = {id:nanoid(),name:e.target.value,done:false}
		this.props.addTodo(todoObj)
		e.target.value = ''
	}

	render() {
		return (
			<div className="todo-header">
				<Input   placeholder="请输入你的任务并按回车键确认"  onPressEnter={this.handleKeyUp} />
			</div>
		)
	}
}