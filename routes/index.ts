import { apiRoutes } from "./api";
import { staticRoutes } from "./static";
import cors from '@fastify/cors'
import { server } from "..";

export const setRoutes = () => {
    server.register(cors, {
        origin: "*"
    })

    apiRoutes();
    staticRoutes();
}