import React from 'react'
import ReactDOM from 'react-dom'

const ListEditor = ({items}) => (
  <div>
    <h1>List Editor ({items.length})</h1>
    <ul>
      {items.map(item => (
        <li>{item.text}</li>
      ))}
    </ul>
  </div>
)

ReactDOM.render(
  <ListEditor items={
    [{text: 'Item 1'}, {text: 'Item 2'}]}/>,
  document.getElementById('root')
)