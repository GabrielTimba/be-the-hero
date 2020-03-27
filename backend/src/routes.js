const express =require('express');

const OngController=require('./controllers/ongController');
const IncidentController=require('./controllers/incidentController');
const ProfileController=require('./controllers/profileController');
const SessionController=require('./controllers/sessionsCotroller');

const routes =express.Router();

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

routes.post('/session',SessionController.create);

module.exports=routes;