export interface IUploadOptions {
  apiKey: string;
  image?: string;
  name?: string;
  expiration?: number;
}

export interface IUploadProvider {
  upload(options: IUploadOptions): Promise<any>;
}
