import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads', // Ajusta la ruta de destino según sea necesario
        filename: (req, file, cb) => {
          const filename = `<span class="math-inline">\{uuidv4\(\)\}\-</span>{file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  ],
})
export class UploadModule {}