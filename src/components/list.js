import React from 'react'
import styled, { css } from 'styled-components'
import schedule from '../helpers/schedule'

const Title = styled.div`
  font-size: 14px;
  color: #666;
  padding: 16px;
`

const Task = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`

const Form = styled.div`
  padding: 8px 16px;
`

const completed = css`
  background: #51e3a4;
  border-color: #51e3a4;
  color: #51e3a4;
`

const CheckBox = styled.span`
  display: inline-block;
  background: #fff;
  width: 10px;
  height: 10px;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-right: 8px;
  ${props => (props.completed ? completed : null)};
`

const Name = styled.span`
  display: inline-block;
  width: calc(100% - 32px);
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  :focus {
    outline: none;
  }
`

class List extends React.Component {
  state = { tasks: (localStorage.tasks && JSON.parse(localStorage.tasks)) || [] }
  add = _ => {
    this.setState(currentState => {
      const newTaskElement = document.querySelector('#newTask')
      currentState.tasks.push({
        name: newTaskElement.value,
        completed: false
      })

      newTaskElement.value = ''
      localStorage.tasks = JSON.stringify(currentState.tasks)

      return currentState
    })
  }
  complete = completedTask => {
    this.setState(currentState => {
      const tasks = currentState.tasks.map(task => {
        if (task.name === completedTask.name) task.completed = true
        return task
      })
      localStorage.tasks = JSON.stringify(tasks)

      window.setTimeout(_ => {
        const tasks = currentState.tasks.filter(task => task.name !== completedTask.name)
        this.setState({ tasks })
        localStorage.tasks = JSON.stringify(tasks)
      }, 1000)

      return { tasks }
    })
  }
  render() {
    return (
      <div>
        <Title>Tasks</Title>
        {this.state.tasks.map(task => (
          <Task>
            <CheckBox completed={task.completed} onClick={_ => this.complete(task)} />
            <Name onClick={_ => schedule(task.name)}>{task.name}</Name>
          </Task>
        ))}
        <Form>
          <Input type="text" id="newTask" />
          <button onClick={this.add}>Add</button>
        </Form>
      </div>
    )
  }
}

export default List
