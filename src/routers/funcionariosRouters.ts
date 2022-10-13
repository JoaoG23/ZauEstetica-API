import { Router } from "express";
import AgendamentosController from "../controllers/AgendamentosController";
const routers = Router();
import FuncionariosController from "../controllers/FuncionariosController";

routers.get("/", FuncionariosController.listAll);
routers.get("/:id", FuncionariosController.listOneById);
routers.get("/agendamentos/:id", AgendamentosController.listAllByIdFuncionario);

routers.delete("/:id", FuncionariosController.deleteById);
routers.delete("/", FuncionariosController.deleteById);

routers.put("/:id", FuncionariosController.updateById);
routers.put("/", FuncionariosController.updateById);

routers.post("/", FuncionariosController.create);

export default routers;