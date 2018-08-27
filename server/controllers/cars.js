const car = require('../models').car;

module.exports = {
  create(req, res) {
    return car
      .create({
        name: req.body.name,
        color: req.body.color,
        year: req.body.year,
        state: req.body.state,
        agencyId: req.params.agencyId,
      })
      .then(car => res.status(201).send(car))
      .catch(error => res.status(400).send(error))
  },
  update(req, res) {
    return car
      .find({
        where: {
          id: req.params.agencyId,
          agencyId: req.params.agencyId,
        },
      })
      .then(car => {
        if (!car) {
          return res.status(404).send({
            message: 'Car Not Found',
          });
        }

        return car
          .update({
            name: req.body.name || car.name,
            color: req.body.color || car.color,
            year: req.body.year || car.year,
            state: req.body.state || car.state

          })
          .then(updatedCar => res.status(200).send(updatedCar))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return car
      .find({
        where: {
          id: req.params.carId,
          agencyId: req.params.agencyId,
        },
      })
      .then(car => {
        if (!car) {
          return res.status(404).send({
            message: 'Car Not Found',
          });
        }

        return car
          .destroy()
          .then(() => res.status(201).send({ message: "Car deleted" }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
}