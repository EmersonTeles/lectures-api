import { Router } from "express";
import TeachersController from "../controllers/teachers_controller.js";

const teachersRouter = Router();

teachersRouter.get("/Teachers", TeachersController.getTeachers);

teachersRouter.get("/Teachers/:id", TeachersController.getTeacherById);

teachersRouter.post("/Teachers", TeachersController.addTeacher);

teachersRouter.put("/Teachers/:id", TeachersController.updateTeacher);

teachersRouter.delete("/Teachers/:id", TeachersController.deleteTeacher);

export default teachersRouter;
