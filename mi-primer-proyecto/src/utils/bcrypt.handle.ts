import { compare, hash } from "bcryptjs"


const encrypt = async (pass: string) => {
    const passWordHash = await hash(pass, 8);
    return passWordHash;
};

const decrypt = async (pass: string, passHash: string) => {
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
}

export {
    encrypt,
    decrypt
}