export interface IUploadOptions {
  apiKey: string;
  image?: string;
  name?: string;
  expiration?: number;
}

export interface IUploadImageProvider {
  upload(options: IUploadOptions): Promise<any>;
}
