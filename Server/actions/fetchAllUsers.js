import { Users } from "./../models/usersModel.js";

export async function fetchAllUsers() {
    try {
        let users = await Users.findAll();
        return users;
    } catch(error) {
        throw new Error(error);
    }
}