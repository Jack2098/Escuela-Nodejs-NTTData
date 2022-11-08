import { Response } from "express";
import { RequestExten } from "../interfaces/request";
import { Storage } from "../interfaces/storage.interface";
import { registerOrderService } from "../services/upload";
import { handleHttp } from "../utils/error.handle";


const registerStorage = async (req: RequestExten, res: Response) => {
    try {

        const { user, file } = req;

        if (file === undefined) {
            res.status(404).send('FILE_NOT_FOUND');
        } else {
            const dataToRegister: Storage = {
                fileName: `${file?.filename}`,
                path: `${file?.path}`,
                idUser: `${user?.email}`,
            }
            const response = await registerOrderService(dataToRegister);
            res.send(response);
        }
    } catch (e) {
        handleHttp(res, 'ERROR_REGISTRO_DE_STORAGE', e);
    }
}

export { registerStorage };