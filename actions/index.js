
export const onAddTodo = (item) => {
    return {
        type: "ADD_TODO",
        id : item.id,
        createdAt: item.createdAt,
        text: item.text,
    }
}

export const onToggleTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const onGetAllTodo = (list) => {
    return {
        type: "GET_ALL_TODO",
        list
    }
}