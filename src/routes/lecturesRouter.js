import { Router } from "express";
import LecturesController from "../controllers/lectures_controller.js";

const lecturesRouter = Router();

lecturesRouter.get("/Lectures", LecturesController.getLectures);

lecturesRouter.get("/Lectures/busca", LecturesController.getLectureByCampus);

lecturesRouter.get("/Lectures/:id", LecturesController.getLectureById);

lecturesRouter.post("/Lectures", LecturesController.addLecture);

lecturesRouter.put("/Lectures/:id", LecturesController.updateLecture);

lecturesRouter.delete("/Lectures/:id", LecturesController.deleteLecture);

export default lecturesRouter;
