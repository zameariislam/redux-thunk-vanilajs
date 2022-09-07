
const fetch = require('node-fetch')

const delayActionMiddleware = (store) => (next) => (action) => {

    if (action.type === 'todos/todosAdded') {
        console.log('I am delaying you ')
        setTimeout(() => {
            next(action)


        }, 2000)
        return

    }
    else return next(action)



}

const fetchTodosMiddleWare = (store) => (next) => async (action) => {

    if (action.type === 'todos/todosFetched') {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const todos = await response.json()

        store.dispatch({
            type: 'todos/todosLoaded',
            payload: todos


        })
        return



    }
    return next(action)



}


module.exports = {
    delayActionMiddleware,
    fetchTodosMiddleWare
}