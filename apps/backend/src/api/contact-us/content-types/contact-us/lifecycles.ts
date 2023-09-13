import { MailService, MailType } from "../../../../services/MailService";
import { Contact } from "../../../../types/ContentType";

module.exports = {
    async afterCreate(event) {
        const contact: Contact = await strapi.db.query('api::contact-us.contact-us')
            .findOne({ where: { id: event.result.id } });
        console.log(contact);
        const mailService = new MailService();
        await mailService.sendMail(strapi, MailType.CONTACT, contact);
    }
}