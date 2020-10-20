import multer from 'multer';
import path from 'path';
import 'dotenv/config';

const uploadPath = (process.env.UPLOAD_PATH ? process.env.UPLOAD_PATH : 'uploads');

export default {
    storage: multer.diskStorage({
        destination: uploadPath,
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        },
    })
}