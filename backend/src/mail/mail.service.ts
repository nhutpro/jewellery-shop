import { Injectable } from '@nestjs/common';
import { Transporter, createTransport } from 'nodemailer';
import * as fs from 'fs'
import Handlebars from 'handlebars';
import { join, dirname } from 'path'
import { ActiveEmailPayLoad } from './constants';

@Injectable()
export class MailService {
  private readonly transporter: Transporter;
  constructor() {
    this.transporter = createTransport({
      port: 1025,
      secure: false,
    });
  }
  async sendActiveEmail({ fullName, activeLink, email }: ActiveEmailPayLoad) {
    const template = fs.readFileSync(
      join(__dirname, '/template/register.handlebars'),
      { encoding: 'utf-8' },
    );
    const html = Handlebars.compile(template, {
      strict: true,
    })({
      fullName,
      activeLink,
    });
    await this.transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
      to: email,
      subject: 'Xác Thực Tài Khoản',
      html: html,
    });
  }
}
