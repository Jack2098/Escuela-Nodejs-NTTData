import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { decrypt, encrypt } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (user: User) => {

    const { email, password } = user;

    const checkIs = await UserModel.findOne({ email });

    if (checkIs) {
        return 'ALREADY_USER';
    }

    user.password = await encrypt(password);

    const response = await UserModel.create(user);

    return response;
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });

    if (!checkIs) {
        return 'NOT_ FOUND_USER';
    }
    const passHash = checkIs.password;
    const isCorrect = await decrypt(password, passHash);

    if (!isCorrect) {
        return 'PASSWORD_INCORRECT';
    }

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    }
    return data;
}   

export {
    registerNewUser,
    loginUser
}