const express = require('express');
const router = express.Router();
const SugarLevelModel = require('../DB/models/SugarLevelModel');

app.post('/sugarlevel/:id', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }).then(user => {
        SugarLevelModel.create(req.body).then(sugar => {
            user.sugarLevel.push(sugar._id)
            user.save()
            console.log(user)
        })
        return res.send(200)
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;
