import { Users } from "../models/usersModel.js";

export async function createUser(user) {
    try {
        const newUser = await Users.create({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        })
        return newUser
    } catch(error) {
        throw new Error(error)
    }
}