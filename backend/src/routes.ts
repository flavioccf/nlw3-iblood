import { Router } from 'express';
import BloodDonationsController from './controllers/BloodDonationsController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

routes.get('/blood_donations', BloodDonationsController.index);
routes.get('/blood_donations/:id', BloodDonationsController.show);
routes.post('/blood_donations', upload.array('images') ,BloodDonationsController.create);

export default routes;