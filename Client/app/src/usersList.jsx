import { fetchAllUsers, deleteUser } from "./services/http/usersServices"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export function UserList() {
    let dispatch = useDispatch();
    let object = useSelector(state => state.users);
    let users = useSelector(state => state.users.users);
    let inprogress = useSelector(state => state.users.inprogress);
    let error = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(fetchAllUsers())
        console.log(users)
    }, [dispatch])

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId))
        console.log(object)
    }
    
    return (
        <>
            {inprogress ? <h1>Ładowanie...</h1> : null}

            
            {error ? <h1>Błąd:</h1> : null}

            {users && users.length > 0 ? users.map(user => (

                <div key={uuidv4()} onClick={() => handleDelete(user.id)}>
                    {user.id}. {user.firstname} {user.lastname}
                </div>)) 

            : 
                <p>Nie ma użytkowników</p>
            }
        </>
    )
}