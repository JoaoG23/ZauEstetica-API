import { Router } from "express";
const routers = Router();

import funcionariosRouters from "../funcionariosRouters";
import tipoServicoRouters from "../tipoServicoRouters";
import agendamentosRouters from '../agendamentosRouters';

routers.use("/funcionarios", funcionariosRouters);
routers.use("/tiposervicos", tipoServicoRouters);
routers.use("/agendamentos", agendamentosRouters);

export default routers;