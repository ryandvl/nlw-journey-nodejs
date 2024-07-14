import cors from "@fastify/cors";
import fastify from "fastify";

import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import { confirmParticipant } from "./routes/confirm-participant";
import { confirmTrip } from "./routes/confirm-trip";
import { createActivity } from "./routes/create-activity";
import { createInvite } from "./routes/create-invite";
import { createLink } from "./routes/create-link";
import { createTrip } from "./routes/create-trip";
import { getActivities } from "./routes/get-activities";
import { getLinks } from "./routes/get-links";
import { getParticipant } from "./routes/get-participant";
import { getParticipants } from "./routes/get-participants";
import { getTripDetails } from "./routes/get-trip-details";
import { updateTrip } from "./routes/update-trip";
import { errorHandler } from "./error-handler";
import { env } from "./env";
import { deleteLink } from "./routes/delete-link";

const app = fastify();

app.register(cors, {
  origin: env.WEB_BASE_URL,
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler);

app.register(confirmParticipant);
app.register(confirmTrip);
app.register(createActivity);
app.register(createInvite);
app.register(createLink);
app.register(createTrip);
app.register(deleteLink);
app.register(getActivities);
app.register(getLinks);
app.register(getParticipant);
app.register(getParticipants);
app.register(getTripDetails);
app.register(updateTrip);

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server running on localhost:${env.PORT}!`);
});
