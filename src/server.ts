import { app } from "./app";
import { env } from "./infra/env";

try {
  app.listen({ port: env.PORT }).then(() => {
    app.log.info("Server is running...");
  });
} catch (error) {
  app.log.error(error);
}
