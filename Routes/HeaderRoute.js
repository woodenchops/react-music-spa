const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json([{
        title: 'Rudimental',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium amet hic eius eligendi dicta id unde corporis et aperiam dolorum iste, sequi minus labore voluptatibus alias facilis ex molestiae?',
        cta: {
            text: 'Buy Now!'
        },
        img: '/assets/images/We_the_Generation.jpg'
    }]);
});


module.exports = router;