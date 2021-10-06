import {
  Controller,
  Get,
  HttpCode,
  Query,
  Redirect,
  Render,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import * as puppeteer from 'puppeteer';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('invoice')
  @HttpCode(200)
  @Render('invoice')
  getInvoice() {
    const passengers = [
      {
        name: 'Joyce',
        flightNumber: 7859,
        time: '18h00',
      },
      {
        name: 'Brock',
        flightNumber: 7859,
        time: '18h00',
      },
      {
        name: 'Eve',
        flightNumber: 7859,
        time: '18h00',
      },
    ];

    return { passengers };
  }

  @Get('invoice/print')
  @HttpCode(201)
  async printInvoice(@Res() response: Response) {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('http://localhost:3000/invoice', {
      waitUntil: 'networkidle0',
    });

    const pdf = await page.pdf({
      printBackground: true,
      format: 'a4',
    });

    await browser.close();

    response.contentType('application/pdf');

    return response.send(pdf);
  }
}
