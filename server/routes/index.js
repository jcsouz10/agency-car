const agenciesController = require('../controllers').agencies;
const carsController = require('../controllers').cars;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Agency API!',
  }));

  app.post('/api/agencies', agenciesController.create);
  app.get('/api/agencies', agenciesController.list);

  app.get('/api/agencies/:agencyId', agenciesController.retrieve);
  app.put('/api/agencies/:agencyId', agenciesController.update);
  app.delete('/api/agencies/:agencyId', agenciesController.destroy);

  app.put('/api/agencies/:agencyId/cars/:carId', carsController.update);
  app.delete(
    '/api/agencies/:agencyId/cars/:carId', carsController.destroy
  );

  app.post('/api/agencies/:agencyId/cars', carsController.create);
};