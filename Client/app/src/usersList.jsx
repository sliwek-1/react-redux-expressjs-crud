import { fetchAllUsers, deleteUser } from "./services/http/usersServices"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./css/main.css";

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
            <div className="list-area">
                {inprogress ? <h1>Ładowanie...</h1> : null}

                
                {error ? <h1 className="danger-control">Błąd:</h1> : null}

                <table>
                    <tr className="row-header">
                        <th>ID</th>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Email</th>
                        <th>Usuń</th>
                    </tr>
                    <tbody>
                {users && users.length > 0 ? users.map(user => (

                    <tr key={uuidv4()} className="row">
                        <td>
                            {user.id}.
                        </td>
                        <td>
                            {user.firstname} 
                        </td>
                        <td>
                            {user.lastname}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        <td>
                            <button className="delete-btn" onClick={() => handleDelete(user.id)}>Usuń</button>
                        </td>
                    </tr>
                )) 
                : 
                    <p className="info">Nie ma użytkowników</p>
                }
                    </tbody>
                </table>
            </div>
        </>
    )
}