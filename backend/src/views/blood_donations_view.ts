import BloodDonation from "../models/BloodDonation";
import images_view from "./images_view";

export default {
    render(blood_donation: BloodDonation) {
        return {
            id: blood_donation.id,
            name: blood_donation.name,
            latitude: blood_donation.latitude,
            longitude: blood_donation.longitude,
            about: blood_donation.about,
            instructions: blood_donation.instructions,
            work_hours: blood_donation.work_hours,
            images: images_view.renderMany(blood_donation.images)
        };
    },
    renderMany(blood_donations: BloodDonation[]) {
        return blood_donations.map(blood_donation => this.render(blood_donation));
    }
}