import {
    Request,
    Response
} from 'express';
import {
    getRepository
} from "typeorm";
import BloodDonation from "../models/BloodDonation";
import bloodDonationView from "../views/blood_donations_view";
import * as Yup from 'yup';

export default {
    async index(req: Request, res: Response) {
        const bloodDonationsRepository = getRepository(BloodDonation);
        const bloodDonations = await bloodDonationsRepository.find({
            relations: ['images']
        });

        return res.json(bloodDonationView.renderMany(bloodDonations));
    },
    async show(req: Request, res: Response) {
        const {
            id
        } = req.params;
        const bloodDonationsRepository = getRepository(BloodDonation);
        const bloodDonation = await bloodDonationsRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return res.json(bloodDonationView.render(bloodDonation));
    },
    async create(req: Request, res: Response) {
        console.log(req.body);
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            work_hours
        } = req.body;

        const bloodDonationsRepository = getRepository(BloodDonation);

        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return {
                path: image.filename
            }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            work_hours,
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            work_hours: Yup.string().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const bloodDonation = bloodDonationsRepository.create(data);

        await bloodDonationsRepository.save(bloodDonation);

        return res.status(201).json(bloodDonation);
    }
}