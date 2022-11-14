import { Datos } from "../interfaces/datos.interface";
import path from "path";
import fs from "fs/promises";
import hbs from "handlebars";
import puppeteer from "puppeteer";
import chromium from "chrome-aws-lambda";

const createPdfService = async (data: Datos) => {

    const namePdf = Date.now();

  let browser = await puppeteer.launch({
    headless: true,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
  });

  let page = await browser.newPage();

  // Abrir la url dentro de esta pagina
  const content = await compile("short-list", data);
  // crear pdf
  await page.setContent(content);

  let pdf = await page.pdf({
    format: "A4",
    landscape: false,
  });

  await browser.close();
  return pdf;
};

const compile = async (templateName: string, data: Datos) => {
  const filePath = path.join(
    process.cwd(),
    "src/template",
    `${templateName}.hbs`
  );
  const html = await fs.readFile(filePath, "utf-8");
  const res = hbs.compile(html)(data);
  return res;
};

export { createPdfService };
