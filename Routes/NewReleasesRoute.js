const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json([
        {
            title: 'some band',
            img: '/assets/images/43.jpg'
        },
        {
            title: 'some band2',
            img: '/assets/images/43.jpg'
        }
    ]);
});


module.exports = router;