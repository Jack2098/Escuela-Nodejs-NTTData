import { Response } from 'express';
import { RequestExten } from "../interfaces/request";
import { handleHttp } from '../utils/error.handle';


const getItems = (req: RequestExten, res: Response) => {
    try {
      res.send({
        data: 'Esto solo es accesible con session (JWT)',
        user: req.user
      });
    } catch (e) {
      handleHttp(res, 'HTTP_GET_BLOGS');
    }
  };

  export {
    getItems
  }