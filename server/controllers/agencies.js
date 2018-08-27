const agency = require("../models").agency;
const car = require("../models").car;

module.exports = {
  create(req, res) {
    return agency
      .create({
        name: req.body.name,
        place: req.body.place
      })
      .then(agency => res.status(201).send(agency))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return agency
      .findAll({
        include: [{
          model: car,
          as: 'cars',
        }],
      })
      .then(agency => res.status(200).send(agency))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return agency
      .findById(req.params.agencyId, {
        include: [{
          model: car,
          as: 'cars',
        }],
      })
      .then(agency => {
        if (!agency) {
          return res.status(404).send({
            message: 'Agency Not Found',
          });
        }
        return res.status(200).send(agency);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return agency
      .findById(req.params.agencyId, {
        include: [{
          model: car,
          as: 'cars',
        }],
      })
      .then(agency => {
        if (!agency) {
          return res.status(404).send({
            message: 'Agency Not Found',
          });
        }
        return agency
          .update({
            name: req.body.name || agency.name,
          })
          .then(() => res.status(200).send(agency))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return agency
      .findById(req.params.agencyId)
      .then(agency => {
        if (!agency) {
          return res.status(400).send({
            message: 'Agency Not Found',
          });
        }
        return agency
          .destroy()
          .then(() => res.status(204).send({ message: 'Deleted' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
}