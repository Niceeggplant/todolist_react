import React, { Component } from 'react'
import './index.css'
import { Button } from 'antd';

export default class Item extends Component {

	state = {
		mouse:false
	}

	// 鼠标移入高亮
	handleMouse = (flag)=>{
		return ()=>{
			this.setState({mouse:flag})
		}
	}

	//勾选、取消勾选
	handleCheck = (id)=>{
		return (event)=>{
			this.props.updateTodo(id,event.target.checked)
		}
	}

	//删除一个todo
	handleDelete = (id)=>{
		if(window.confirm('确定删除吗？')){
			this.props.deleteTodo(id)
		}
	}

	render() {
		const {id,name,done} = this.props
		const {mouse} = this.state
		return (
			<li style={{backgroundColor:mouse ? '#e6f7ff' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
					<span> {name}</span>
				</label>
				<Button type="primary" danger onClick={()=> this.handleDelete(id) } size={"small"} style={{display:mouse?'block':'none'}} >
					删除
				</Button>
			</li>
		)
	}
}