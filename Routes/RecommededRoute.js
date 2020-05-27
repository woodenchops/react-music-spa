const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json([
        {
            title: 'some band',
            img: '/assets/images/64.jpg'
        },
        {
            title: 'some band2',
            img: '/assets/images/261179df4ee3e789c7570eea3487700b--graphic-design-inspiration-typography-inspiration.jpg'
        }
    ]);
});


module.exports = router;