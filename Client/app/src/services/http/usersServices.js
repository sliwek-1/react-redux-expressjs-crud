import { routes }  from "./../../api"
import { 
    fetchUsersError, 
    fetchUsersInProgress, 
    fetchUsersSuccess, 
    deleteUserError,
    deleteUsersSuccess,
    deleteUsersInProgress,
    createUserError,
    createUsersSuccess,
    createUsersInProgress,
    updateUsersError,
    updateUsersInProgress,
    updateUsersSuccess } from "../../actions/actionUsers"

export const fetchAllUsers = () => {
    return dispatch => {
        dispatch(fetchUsersInProgress());
        fetch(routes.server + routes.route.api.users.get, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw res.error
                } 
                dispatch(fetchUsersSuccess(res));
                return res.users;
            })
            .catch(error => {
                dispatch(fetchUsersError(error))
            })
    };
}

export const deleteUser = (userId) => {
    return dispatch => {
        dispatch(deleteUsersInProgress());
        fetch(routes.server + routes.route.api.users.delete + `/${userId}`,{
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(res => {
                if(res.error) {
                    throw res.error
                } 
                dispatch(deleteUsersSuccess(userId));
                return res;
            })
            .catch(error => {
                dispatch(deleteUserError(error))
            })
    };
}

export const createUser = (user) => {
    const {firstname, lastname, email} = user;
    return dispatch => {
        dispatch(createUsersInProgress())
        fetch(routes.server + routes.route.api.users.post + `/${firstname}/${lastname}/${email}`, {
            method: 'POST'
        })
        .then(res => {
            if(!res.ok) {
                throw new Error("Network response was not ok");
            }
            // console.log(res)
            return res.json();
        })
        .then(res => {
            if(res.error) {
                throw res.error
            }
            // console.log(res)
            dispatch(createUsersSuccess(res.users))
            return res;
        })
        .catch(error => {
            dispatch(createUserError(error))
        })
    }
}

export const updateUser = (user) => {
    const {id, firstname, lastname, email} = user;
    return dispatch => {
        dispatch(updateUsersInProgress())
        fetch(routes.server + routes.route.api.users.put + `/${id}/${firstname}/${lastname}/${email}`,{
            method: 'PUT'
        })
        .then(res => {
            if(!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then(res => {
            if(res.error) {
                throw res.error
            }
            // console.log(res)
            dispatch(updateUsersSuccess(res.user))
            return res;
        })
        .catch(error => {
            dispatch(updateUsersError(error))
        })
    }
}