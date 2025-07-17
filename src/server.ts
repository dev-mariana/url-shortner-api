import * as dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

try {
  app.listen({ port: Number(process.env.PORT) }).then(() => {
    app.log.info("Server is running...");
  });
} catch (error) {
  app.log.error(error);
}
