const { createStore, dispatch, applyMiddleware } = require("redux");
const { delayActionMiddleware,fetchTodosMiddleWare } = require('./middleWares')

// initial state 
const initialState = {
    todos: []
}

// create reducer  

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'todos/todosAdded':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        Title: action.payload
                    }
                ]
            }

        case 'todos/todosLoaded':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    ...action.payload
                ]
            }

        default:
            state;
    }

}
// create store 

const store = createStore(todoReducer, applyMiddleware(delayActionMiddleware,fetchTodosMiddleWare))
// subscription 

// subscribe to state changes 

store.subscribe(() => {
    console.log(store.getState())

})

// dispatch actions 

// store.dispatch({
//     type: 'todos/todosAdded',
//     payload: 'Learn Redux from LWS'

// })

store.dispatch({
    type: 'todos/todosFetched',


})


