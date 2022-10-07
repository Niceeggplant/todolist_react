import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import 'antd/dist/antd.min.css';
import './App.css'
export default class App extends Component {

	state = {todos:[
			{id:'0',name:'看vue.js的书',done:true},
			{id:'1',name:'阅读并理解vue源码',done:false},
			{id:'2',name:'看几篇掘金好文章',done:true},
			{id:'3',name:'学习react技术',done:true},
	]}

	addTodo = (todoObj)=>{
		const {todos} = this.state
		const newTodos = [todoObj,...todos]
		this.setState({todos:newTodos})
	}

	updateTodo = (id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) {
				return {...todoObj,done}
			}
			else {
				return todoObj
			}
		})
		this.setState({todos:newTodos})
	}

	deleteTodo = (id)=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		this.setState({todos:newTodos})
	}

	checkAllTodo = (done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done}
		})
		this.setState({todos:newTodos})
	}

	clearAllDone = ()=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		this.setState({todos:newTodos})
	}

	render() {
		const {todos} = this.state
		return (
			<div className="todo-wrap">
				<div className="todo-box">
					<Header addTodo={this.addTodo}/>
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
				</div>
			</div>
		)
	}
}
