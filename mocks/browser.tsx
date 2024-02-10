import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker();
worker.resetHandlers();
worker.use(...handlers);