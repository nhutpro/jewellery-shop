import { Injectable } from '@nestjs/common';
import { Transporter, createTransport } from 'nodemailer';

@Injectable()
export class MailService {
  private readonly transporter: Transporter;
  constructor() {
    this.transporter = createTransport({
      port: 1025,
      secure: false,
    });
  }
  async userRegister(hash: string) {
    await this.transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: 'bar@example.com, baz@example.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: hash, // plain text body
      html: `<b>${hash}</b>`, // html body
    });
  }
}
