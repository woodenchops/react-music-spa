const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json([
        {
            title: 'some band',
            img: '/assets/images/64.jpg',
            time: 3.19,
            track: 1
        },
        {
            title: 'some band2',
            img: '/assets/images/261179df4ee3e789c7570eea3487700b--graphic-design-inspiration-typography-inspiration.jpg',
            time: 3.19,
            track: 2
        },
        {
            title: 'some band',
            img: '/assets/images/64.jpg',
            time: 3.19,
            track: 3
        },
        {
            title: 'some band2',
            img: '/assets/images/261179df4ee3e789c7570eea3487700b--graphic-design-inspiration-typography-inspiration.jpg',
            time: 3.19,
            track: 4
        },
        {
            title: 'some band',
            img: '/assets/images/64.jpg',
            time: 3.19,
            track: 5
        },
        {
            title: 'some band2',
            img: '/assets/images/261179df4ee3e789c7570eea3487700b--graphic-design-inspiration-typography-inspiration.jpg',
            time: 3.19,
            track: 6
        },
        {
            title: 'some band',
            img: '/assets/images/64.jpg',
            time: 3.19,
            track: 7
        },
        {
            title: 'some band2',
            img: '/assets/images/261179df4ee3e789c7570eea3487700b--graphic-design-inspiration-typography-inspiration.jpg',
            time: 3.19,
            track: 8
        },
        {
            title: 'some band',
            img: '/assets/images/64.jpg',
            time: 3.19,
            track: 9
        },
        {
            title: 'some band2',
            img: '/assets/images/261179df4ee3e789c7570eea3487700b--graphic-design-inspiration-typography-inspiration.jpg',
            time: 3.19,
            track: 10
        },
        {
            title: 'some band',
            img: '/assets/images/64.jpg',
            time: 3.19,
            track: 11
        },
        {
            title: 'some band2',
            img: '/assets/images/261179df4ee3e789c7570eea3487700b--graphic-design-inspiration-typography-inspiration.jpg',
            time: 3.19,
            track: 12
        },
        {
            title: 'some band',
            img: '/assets/images/64.jpg',
            time: 3.19,
            track: 13
        },
        {
            title: 'some band2',
            img: '/assets/images/261179df4ee3e789c7570eea3487700b--graphic-design-inspiration-typography-inspiration.jpg',
            time: 3.19,
            track: 14
        },
        {
            title: 'some band',
            img: '/assets/images/64.jpg',
            time: 3.19,
            track: 15
        }
    ]);
});


module.exports = router;