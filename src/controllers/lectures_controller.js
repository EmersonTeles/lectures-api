import lectures from "../models/Lecture.js";

class LecturesController {
  static getLectures(req, res) {
    lectures
      .find()
      .populate("teacher")
      .exec((err, lectures) => {
        if (err) {
          console.log("erro", err);
          res.status(500).send(err);
        }
        res.status(200).json(lectures);
      });
  }

  static getLectureById(req, res) {
    const { id } = req.params;
    lectures
      .findById(id)
      .populate("teacher", "name")
      .exec((err, lecture) => {
        if (err) {
          res.status(400).send({ message: err.message });
        } else {
          res.status(200).json(lecture);
        }
      });
  }

  static getLectureByCampus(req, res) {
    const { campus } = req.query;

    lectures.find({ campus: campus }, {}, (err, lecture) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(lecture);
      }
    });
  }

  static addLecture(req, res) {
    let lecture = new lectures(req.body);
    lecture.save((err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).send(lecture.toJSON());
      }
    });
  }

  static updateLecture(req, res) {
    const { id } = req.params;
    const disciplina = req.body;
    lectures.findByIdAndUpdate(id, { $set: disciplina }, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Disciplina atualizada com sucesso!" });
      }
    });
  }

  static deleteLecture(req, res) {
    const { id } = req.params;
    lectures.findByIdAndRemove(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send("Disciplina deletada com sucesso!");
      }
    });
  }
}
export default LecturesController;
