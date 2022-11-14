import { Request, Response } from "express";
import { Datos } from "../interfaces/datos.interface";
import { createPdfService } from "../services/pdf.service";

const createPdf = async ({ body }: Request, res: Response) => {
  try {
    const data: Datos = body;

    // const buffer = await createPdfService(data);
    // console.log(pdf);
    const pdf = await createPdfService(data);

    if (pdf) {

      res.contentType('application/pdf');
      res.send(pdf)
    }

  } catch (e) {
    console.log(e);
  }
};

export { createPdf };
