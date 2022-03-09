import * as https from 'https';
import * as querystring from 'query-string';

import { IUploadOptions, IUploadProvider } from '../IUploadProvider';

export class ImgbbUploadProvider implements IUploadProvider {
  async upload(optionsUpload: IUploadOptions) {
    return new Promise((resolve, reject) => {
      const {
        apiKey,
        name = null,
        expiration = null,
        image,
      } = { ...optionsUpload };

      const payload = querystring.stringify({
        image,
      });

      let query = `/1/upload?key=${apiKey}`;
      if (name) query += `&name=${encodeURIComponent(name)}`;
      if (expiration) query += `&expiration=${expiration}`;

      const options = {
        hostname: 'api.imgbb.com',
        method: 'POST',
        timeout: 5000,
        path: query,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': payload.length,
        },
      };

      const req = https
        .request(options, (res: any) => {
          let response = '';

          res.on('data', (d: string) => {
            response += d;
          });

          res.on('end', () => {
            if (JSON.parse(response).error) {
              const error = {
                message: 'There was a problem with imgBB API',
                imgbbApiResponse: JSON.parse(response),
              };
              reject(new Error(JSON.stringify(error, null, 4)));
            } else {
              const output = JSON.parse(response).data;
              resolve(output);
            }
          });
        })

        .on('error', (err: any) => {
          reject(new Error(err));
        });

      req.write(payload);

      return req.end();
    });
  }
}
