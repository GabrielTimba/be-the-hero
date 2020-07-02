const express =require('express');
const {celebrate,Segments, Joi}=require('celebrate');//para validacao

const OngController=require('./controllers/ongController');
const IncidentController=require('./controllers/incidentController');
const ProfileController=require('./controllers/profileController');
const SessionController=require('./controllers/sessionsCotroller');

const routes =express.Router();

routes.get('/ongs',OngController.index);
routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        emaily:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(9).max(11),
        city:Joi.string().required(),
        uf:Joi.string().required().length(2)
    })
}),OngController.create);

routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required(),
    }).unknown(),
}),ProfileController.index);

routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number(),
    })
}),IncidentController.index);
routes.post('/incidents',IncidentController.create);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required(),
    })
}),IncidentController.delete);

routes.post('/session',SessionController.create);

module.exports=routes;