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
    UPDATE_USERS_INPROGRESS,
    UPDATE_USERS_SUCCESS } from "./actionsUserTypes"


// FETCH USERS READ OPERATION 
export const fetchUsersInProgress = () => {
    return {
        type: FETCH_USERS_INPROGRESS
    }
}

export const fetchUsersSuccess = (user) => {
    return {
        type: FETCH_USERS_SUCCESS,
        users: user
    }
}

export const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    }
}

// DELETE USERS DELETE OPERATION

export const deleteUsersInProgress = () => {
    return {
        type: DELETE_USERS_INPROGRESS
    }
}

export const deleteUsersSuccess = (id) => {
    return {
        type: DELETE_USERS_SUCCESS,
        users: id,
    }
}

export const deleteUserError = (error) => {
    return {
        type: DELETE_USERS_ERROR,
        error: error
    }
}

// CREATE USERS CREATE OPERATION

export const createUsersInProgress = () => {
    return {
        type: CREATE_USERS_INPROGRESS
    }
}

export const createUsersSuccess = (user) => {
    return {
        type: CREATE_USERS_SUCCESS,
        users: user,
    }
}

export const createUserError = (error) => {
    return {
        type: CREATE_USERS_ERROR,
        error: error
    }
}

// UPDATE USERS UPDATE OPERATION

export const updateUsersInProgress = () => {
    return {
        type: UPDATE_USERS_INPROGRESS
    }
}

export const updateUsersSuccess = (user) => {
    return {
        type: UPDATE_USERS_SUCCESS,
        user: user
    }
}

export const updateUsersError = (error) => {
    return {
        type: UPDATE_USERS_ERROR,
        error: error
    }
}