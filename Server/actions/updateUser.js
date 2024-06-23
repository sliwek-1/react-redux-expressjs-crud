import { Users } from "./../models/usersModel.js";

export async function updateUser(user) {
    const {firstname, lastname, email, id} = user
    try {
        let userUpdated = await Users.update(
            {
                firstname: firstname,
                lastname: lastname,
                email: email
            },
            {
                where: {
                    id: id
                }
            }
        );

        if (userUpdated) {
            const updatedUser = await Users.findOne({ where: { id: id } });
            return { user: updatedUser };
        }
        throw new Error('User not found')
    } catch(error) {
        throw new Error(error);
    }
}