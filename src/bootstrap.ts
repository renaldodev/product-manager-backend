import 'dotenv/config';
import { server } from './app';

async function bootstrap() {
  server.listen(4444);
}

bootstrap();
