import teachers from "../models/Teacher.js";

class TeachersController {
  static getTeachers(req, res) {
    teachers.find((err, teacher) => {
      if (err) {
        console.log("erro", err);
        res.status(500).send(err);
      }
      res.status(200).json(teacher);
    });
  }

  static getTeacherById(req, res) {
    const { id } = req.params;
    teachers.findById(id, (err, teacher) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(teacher);
      }
    });
  }

  static addTeacher(req, res) {
    let teacher = new teachers(req.body);
    teacher.save((err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).send(teacher.toJSON());
      }
    });
  }

  static updateTeacher(req, res) {
    const { id } = req.params;
    const teacher = req.body;
    teachers.findByIdAndUpdate(id, { $set: teacher }, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Professor atualizada com sucesso!" });
      }
    });
  }

  static deleteTeacher(req, res) {
    const { id } = req.params;
    teachers.findByIdAndRemove(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send("Professor deletada com sucesso!");
      }
    });
  }
}
export default TeachersController;
