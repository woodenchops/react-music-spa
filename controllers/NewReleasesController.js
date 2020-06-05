exports.getNewReleases = (req, res) => {
    res.status(200).json([
        {
            title: 'some band',
            img: '/assets/images/43.jpg'
        },
        {
            title: 'some band2',
            img: '/assets/images/64.jpg'
        },
        {
            title: 'some band',
            img: '/assets/images/64a46799243daeaab473a99f7a6f09f8--rock-album-covers-music-album-covers.jpg'
        },
        {
            title: 'some band2',
            img: '/assets/images/283e8d5f7263e56bee957a9ddb3f336d--album-cover-design-cd-cover.jpg'
        },
        {
            title: 'some band',
            img: '/assets/images/261179df4ee3e789c7570eea3487700b--graphic-design-inspiration-typography-inspiration.jpg'
        },
        {
            title: 'some band2',
            img: '/assets/images/all-time-coolest-music-album-covers-4.jpg'
        }
    ]);
}