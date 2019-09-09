
export const onAddTodo = (text) =>{
    return {
        type: "ADD_TODO",
        text
    }
}

export const onToggleTodo=(id)=>{
    return {
        type: "TOGGLE_TODO",
        id
    }
}