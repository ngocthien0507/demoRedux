
const todos = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_TODO': {
            return action.list
        }
        case 'ADD_TODO':
            return [
                {
                    id: action.id,
                    createdAt: action.createdAt,
                    text: action.text
                }, ...state
            ]
        case 'DELETE_TODO': {
            const foundIndex = state.findIndex(todo => todo.id === action.id);
            state.splice(foundIndex, 1);
            return state;
        }

        default:
            return state
    }
}

export default todos;