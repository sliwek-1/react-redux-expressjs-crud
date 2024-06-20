import { Users } from "./../models/usersModel.js";

export async function deleteUser(userId) {
    try {
        let user = await Users.findByPk(userId);
        await user.destroy();
        return {userID: userId};
    } catch(error) {
        throw new Error(error);
    }
}