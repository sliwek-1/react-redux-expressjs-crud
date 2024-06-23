import { 
    FETCH_USERS_ERROR, 
    FETCH_USERS_INPROGRESS, 
    FETCH_USERS_SUCCESS, 
    DELETE_USERS_ERROR, 
    DELETE_USERS_SUCCESS, 
    DELETE_USERS_INPROGRESS,
    CREATE_USERS_ERROR,
    CREATE_USERS_SUCCESS,
    CREATE_USERS_INPROGRESS,
    UPDATE_USERS_ERROR,
    UPDATE_USERS_SUCCESS,
    UPDATE_USERS_INPROGRESS } from "./../actions/actionsUserTypes"


const initialState = {
    inprogress: false,
    error: null,
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_USERS_INPROGRESS:
        case CREATE_USERS_INPROGRESS:
        case DELETE_USERS_INPROGRESS:
        case FETCH_USERS_INPROGRESS:
            return {
                ...state,
                inprogress: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                inprogress: false,
                users: action.users
            }
        case DELETE_USERS_SUCCESS: 
            let updatedUsers = state.users.filter(users => users.id !== action.users)
            return {
                ...state,
                inprogress: false,
                users: updatedUsers
            }
        case CREATE_USERS_SUCCESS: {
            return {
                ...state,
                inprogress: false,
                users: [...state.users, action.users]
            }
        }
        case UPDATE_USERS_SUCCESS:
            return {
                ...state,
                inprogress: false,
                users: state.users.map(user => {
                    user.id == action.user.id ? action.user : user;
                })
            }
        case UPDATE_USERS_ERROR:
        case CREATE_USERS_ERROR:
        case DELETE_USERS_ERROR:
        case FETCH_USERS_ERROR:
            return {
                ...state,
                inprogress: false,
                error: action.error
            }
        default:
            return state
    }
}