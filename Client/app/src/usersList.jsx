import { fetchAllUsers, deleteUser, updateUser } from "./services/http/usersServices"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./css/main.css";

export function UserList() {
    let dispatch = useDispatch();
    let object = useSelector(state => state.users);
    let users = useSelector(state => state.users.users);
    let inprogress = useSelector(state => state.users.inprogress);
    let error = useSelector(state => state.users.error);
    const [isEdit, setIsEdit] = useState(false);
    const [editUser, setEditUser] = useState(null);
    

    useEffect(() => {
        dispatch(fetchAllUsers());
        console.log(users);
    }, [dispatch])

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
        console.log(object);
    }

    const handleUpdate = (user) => {
        setEditUser(user); // Set the user to be edited
        setIsEdit(true); // Enter edit mode
    }

    const handleSave = (editedUser) => {
        dispatch(updateUser(editedUser));
        setEditUser(null); // Clear the editUser state
        setIsEdit(false); // Exit edit mode
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
                        <th>Edytuj</th>
                        <th>Usuń</th>
                    </tr>
                    <tbody>
                    {users && users.length > 0 ? users.map((user) => (
                        <tr key={user.id} className="row">
                            <td>{user.id}.</td>
                            <td>{isEdit && editUser && editUser.id === user.id ? (
                                <input type="text" defaultValue={user.firstname} />
                            ) : (
                                user.firstname
                            )}</td>
                            <td>{isEdit && editUser && editUser.id === user.id ? (
                                <input type="text" defaultValue={user.lastname} />
                            ) : (
                                user.lastname
                            )}</td>
                            <td>{isEdit && editUser && editUser.id === user.id ? (
                                <input type="text" defaultValue={user.email} />
                            ) : (
                                user.email
                            )}</td>
                            <td>
                                {isEdit && editUser && editUser.id === user.id ? (
                                    <button className="update-btn" onClick={() => handleSave(user)}>
                                        Zapisz
                                    </button>
                                ) : (
                                    <button className="edit-btn" onClick={() => handleUpdate(user)}>
                                        Edytuj
                                    </button>
                                )}
                            </td>
                            <td>
                                <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                                    Usuń
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="6">
                                <p className="info">Nie ma użytkowników</p>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}