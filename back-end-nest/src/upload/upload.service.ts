import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  async uploadImage(file: Express.Multer.File): Promise<string> {
    const filename = `<span class="math-inline">\{uuidv4\(\)\}\-</span>{file.originalname}`;
    await file.mv(`./uploads/${filename}`);
    return filename;
  }
}