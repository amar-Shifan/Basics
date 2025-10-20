let express = require('express');
let router = express.Router();

router.get('/:num' , (req ,res) => {
    let num = req.params.num
    let num2 = req.query.num2
    res.send(num/num2)
})

module.exports = router