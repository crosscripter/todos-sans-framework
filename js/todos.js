on(window, 'load', () => {
    todos = $('.todos')

    state.todos = [ 
        { text: 'Write app', done: true }, 
        { text: 'Do stuff...' } 
    ]

    todos.add = text => {
        state.todos.push({ text, done: false })
        $('#add').value = ''
        todos.render()
    }
    
    todos.check = (id, value) => {
        state.todos[+id].done = value
        todos.render()
    }

    todos.checkAll = value => {
        state.todos.forEach(t => t.done = value)
        todos.render()
    }
    
    todos.del = id => {
        if (confirm(`Are you sure you wanna get rid of "${state.todos[id].text}"?`)) {
            delete state.todos[id]
            todos.render()
        }
    }

    todos.delAll = () => {
        if (!confirm('Are you sure you wannt get rid of all your stuff?!')) return alert('Phew that was close!')
        state.todos = [] 
        todos.render()
    }

    todos.render = () => {
        html(todos, '')

        state.todos.map((item, id) => 
            html(todos, `${html(todos)}${todo(item, id)}`))

        $('#count').innerHTML = state.todos.filter(({done}) => done).length
        $('#add').focus()

        console.clear()
        log('state:', JSON.stringify(state.todos, null, 2))
    }

    todos.render()
})

template`
<ul class='todos'></ul>
<input id='add' placeholder='Add another...' onchange='todos.add(this.value)'>
<br>
<div id='controls'>
<button onclick='todos.checkAll(true)'>Mark All Done</button>
<button onclick='todos.checkAll(false)'>Clear All</button>
<button onclick='todos.delAll()'>Delete All</button>
<span id='count'></span> done!
</div>
`