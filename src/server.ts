import fastify from "fastify";
import cors from "@fastify/cors";

import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import { createTrip } from "./routes/create-trip";
import { confirmTrip } from "./routes/confirm.trip";
import { env } from "./env";

const app = fastify();

app.register(cors, {
  origin: "*", // SOMENTE EM DESENVOLVIMENTO!
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);
app.register(confirmTrip);

app.listen({ port: 3333 }).then(() => {
  console.log("Server running on PORT 3333!");
});
