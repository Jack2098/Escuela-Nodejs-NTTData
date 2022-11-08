import { Router, Response, Request } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log('rere');
    res.send({data: 'Se envia este dato...'});
})

export { router };