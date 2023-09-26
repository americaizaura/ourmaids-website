import { Booking, Contact } from "../types/ContentType";
import mjml2html from "mjml";
import moment from "moment-timezone";
import { MJMLParseResults } from "mjml-core";

export enum MailType {
  BOOKING = "booking",
  CONTACT = "contact",
}

export class MailService {
  static instance: MailService;
  constructor() {
    if (MailService.instance) {
      return MailService.instance;
    }
    MailService.instance = this;
  }

  async sendMail(strapi, mailType: MailType, data: any) {
    let parseResults: MJMLParseResults;
    let subject: string;

    const adminMail = "CustomerCare@ourmaids.com";

    switch (mailType) {
      case MailType.BOOKING:
        parseResults = mjml2html(this.getBookingMtml(data));
        subject = `Confirmation of Your Maid Booking`;
        await Promise.all([
          strapi.plugin("email").service("email").send({
            to: data.email,
            bcc: "alexishs451@gmail.com",
            subject,
            html: parseResults.html,
          }),
          strapi
            .plugin("email")
            .service("email")
            .send({
              to: adminMail,
              bcc: "alexishs451@gmail.com",
              subject: `New Booking Request from ${data.name} ${data.lastName}`,
              html: mjml2html(this.getAdminBookingMtml(data)).html,
            }),
        ]);
        break;
      case MailType.CONTACT:
        parseResults = mjml2html(this.getContactMtml(data));
        subject = `Contact ${data.name}`;
        await strapi.plugin("email").service("email").send({
          to: adminMail,
          subject,
          html: parseResults.html,
        });
        break;
    }
  }

  logoImage = `
  <mj-image width="200px" src="https://ourmaids-website-frontend-git-alexis-ocstudios.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75" container-background-color="#fadcea"></mj-image>
  `;

  getBookingMtml(data: Booking) {
    return `
        <mjml>
        <mj-head>
            <mj-font name="Georgian" href="https://fonts.googleapis.com/css?family=Noto+Serif+Georgian" />
        </mj-head>
        <mj-body>
            <mj-section>
            <mj-column>
                ${this.logoImage}
                <mj-text font-size="30px" font-family="Georgian, Arial" line-height="2">Thanks for booking with us!</mj-text>
                <mj-text font-size="16px" font-family="helvetica">Dear ${
                  data.name
                } ${data.lastName}</mj-text>
                <mj-text font-size="12px" font-family="helvetica">Your booking was accepted! One of our team members Will get back to you if a change is needed. If you need immediate asssistance, please call <a href="tel:213-800-7644">
                    213-800-7644.
                  </a> </mj-text>
                <mj-table>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px 0;">Booking Details:</td>
                    <td style="padding:16px 0;"></td>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Name</td>
                    <td style="padding:16px;">${data.name} ${data.lastName}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">email</td>
                    <td style="padding:16px;">${data.email}</td>
                 </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Direct Phone Number</td>
                    <td style="padding:16px;">${data.phone}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Datetime</td>
                    <td style="padding:16px;">${moment
                      .utc(data.dateTime)
                      .tz("US/Central")
                      .format("LLLL zz")}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Service's name</td>
                    <td style="padding:16px;">${data.servicesName}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Payment method</td>
                    <td style="padding:16px;">${
                      data.squareUpId ? "Credit" : "Pending"
                    }</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Address</td>
                    <td style="padding:16px;">${data.address}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">City</td>
                    <td style="padding:16px;">${data.city}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">State</td>
                    <td style="padding:16px;">${data.state}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Zip Code</td>
                    <td style="padding:16px;">${data.zipCode}</td>
                </tr>
                </tr>
                </mj-table>

                ${
                  data.message
                    ? `
                <mj-text font-size="16px" font-family="Georgian, Arial" line-height="2">Additional Message:</mj-text>
                <mj-text font-size="14px" font-family="helvetica">${data.message}</mj-text>
                    `
                    : ""
                }

                <mj-text font-size="12px" font-family="helvetica">Thank you for choosing Our Maids for your cleaning needs. We are committed to delivering a spotless and comfortable living environment for you.</mj-text>
                <mj-text font-size="12px" font-family="helvetica">Warm regards,</mj-text>
                <mj-text font-size="12px" font-family="helvetica">Our Maids,</mj-text>
                <mj-text font-size="12px" font-family="helvetica">CustomerCare@ourmaids.com</mj-text>
                <mj-text font-size="12px" font-family="helvetica">302-389-5221</mj-text>

            </mj-column>
            </mj-section>
            </mj-body>
        </mjml>
        `;
  }
  getAdminBookingMtml(data: Booking) {
    return `
        <mjml>
        <mj-head>
            <mj-font name="Georgian" href="https://fonts.googleapis.com/css?family=Noto+Serif+Georgian" />
        </mj-head>
        <mj-body>
            <mj-section>
            <mj-column>
                ${this.logoImage}
                <mj-text font-size="30px" font-family="Georgian, Arial" line-height="2">Service Request Received!</mj-text>
                

                <mj-text font-size="12px" font-family="helvetica">A new service request has been received through Our Maids.
                 Below, you will find the relevant details of the reservation: </mj-text>
                <mj-table>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px 0;">Booking Details:</td>
                    <td style="padding:16px 0;"></td>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Client Name</td>
                    <td style="padding:16px;">${data.name} ${data.lastName}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">email</td>
                    <td style="padding:16px;">${data.email}</td>
                 </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Direct Phone Number</td>
                    <td style="padding:16px;">${data.phone}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Datetime</td>
                    <td style="padding:16px;">${moment
                      .utc(data.dateTime)
                      .tz("US/Central")
                      .format("LLLL zz")}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Service's name</td>
                    <td style="padding:16px;">${data.servicesName}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Payment method</td>
                    <td style="padding:16px;">${
                      data.squareUpId ? "Credit" : "Pending"
                    }</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Address</td>
                    <td style="padding:16px;">${data.address}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">City</td>
                    <td style="padding:16px;">${data.city}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">State</td>
                    <td style="padding:16px;">${data.state}</td>
                </tr>
                <tr style="border-bottom:1px solid #ecedee;text-align:left;">
                    <td style="padding:16px;">Zip Code</td>
                    <td style="padding:16px;">${data.zipCode}</td>
                </tr>
                </tr>
                </mj-table>

                ${
                  data.message
                    ? `
                <mj-text font-size="16px" font-family="Georgian, Arial" line-height="2">Additional Message:</mj-text>
                <mj-text font-size="14px" font-family="helvetica">${data.message}</mj-text>
                    `
                    : ""
                }

            </mj-column>
            </mj-section>
            </mj-body>
        </mjml>
        `;
  }

  getContactMtml(data: Contact) {
    return `
        <mjml>
            <mj-head>
                <mj-font name="Georgian" href="https://fonts.googleapis.com/css?family=Noto+Serif+Georgian" />
            </mj-head>
            <mj-body>
                <mj-section>
                <mj-column>
                    ${this.logoImage}
                    <mj-text font-size="30px" font-family="Georgian, Arial" line-height="2">Contact ${
                      data.name
                    }</mj-text>
                    <mj-text font-size="16px" font-family="helvetica">${
                      data.name
                    } wants to contact us.</mj-text>
                    <mj-text font-size="16px" font-family="Georgian, Arial" line-height="2">Email: ${
                      data.email
                    }</mj-text>
                    <mj-text font-size="16px" font-family="Georgian, Arial" line-height="2">Phone: ${
                      data.phone
                    }</mj-text>

                    <mj-text font-size="16px" font-family="Georgian, Arial" line-height="2">Message:</mj-text>
                    <mj-text font-size="14px" font-family="helvetica">${
                      data.message ? data.message : "No message."
                    }</mj-text>

                </mj-column>
                </mj-section>
            </mj-body>
        </mjml>
        `;
  }
}
