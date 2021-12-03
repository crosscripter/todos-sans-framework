todo = ({text, done}, id) => `
    <li class='todo'> 
        <input type='checkbox' ${done && 'checked'} onchange='todos.check(${id}, this.checked)'> 
        <span class='${done && 'done'}'>${text}</span>
        <span class='del' onclick='todos.del(${id})'>&times;</span>
    </li>
`