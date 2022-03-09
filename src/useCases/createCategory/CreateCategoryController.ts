import { Request, Response } from 'express';
import { IUploadImageProvider } from '../../provider/IUploadImageProvider';
import { imageBufferToString64 } from '../../utils/imageToString';
import { CreateCategoryCase } from './CreateCategoryCase';
export class CreateCategoryController {
  constructor(
    private createCatecoryCase: CreateCategoryCase,
    private uploadProvider: IUploadImageProvider,
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      const url = await this.uploadProvider
        .upload({
          apiKey: process.env.IMGBB_API_KEY,
          image: imageBufferToString64(request.files.image.data),
        })
        .then((r) => r.url)
        .catch((error) => {
          throw new Error('Error to deploy image to imgbb');
        });

      await this.createCatecoryCase.execute({
        name,
        description,
        image: url,
      });
      return response.status(201).send();
    } catch (error: any) {
      return response
        .status(500)
        .json({ error: error.message || 'Unexpcted error' });
    }
  }
}
