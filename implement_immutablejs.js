

let store = Immutable.Map({ 
    user: Immutable.Map({ 
        firstName: 'John', 
        lastName: 'Doe' 
    }), 
})

function updateStore(state, newState) {
    store = state.merge(newState)
    render(root, store)
}

let newState = Immutable.Map({ 
    user: Immutable.Map({ 
        firstName: 'Max', 
        lastName: 'Doe' 
    }), 
})

const render = root => {
   
}
const root = document.getElementById('root')

updateStore(store, newState)
console.log(store._root.entries[0][1]._root.entries[0][1])