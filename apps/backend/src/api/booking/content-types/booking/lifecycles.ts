import { MailService, MailType } from "../../../../services/MailService";
import { Booking } from "../../../../types/ContentType";

module.exports = {
    async afterCreate(event) {
        const booking: Booking = await strapi.db.query('api::booking.booking')
            .findOne({ where: { id: event.result.id } });
        const mailService = new MailService();
        await mailService.sendMail(strapi, MailType.BOOKING, booking);
    }
}