declare namespace NodeJS {
  export interface ProcessEnv {
    APP_SECRET_KEY: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    PWD: string;
  }
}
