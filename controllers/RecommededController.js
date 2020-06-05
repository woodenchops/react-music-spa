exports.getRecommeded = (req, res) => {
    res.status(200).json([
        {
            title: 'some band',
            img: '/assets/images/We_the_Generation.jpg'
        },
        {
            title: 'some band2',
            img: '/assets/images/Miles-Davis-Bitches-Brew-album-covers-billboard-1000x1000.jpg'
        },
        {
            title: 'some band',
            img: '/assets/images/b983ff57764764481e13f28b29c56f25--iconic-album-covers-music-album-covers.jpg'
        },
        {
            title: 'some band2',
            img: '/assets/images/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg'
        },
        {
            title: 'some band',
            img: '/assets/images/images.jpeg'
        },
        {
            title: 'some band2',
            img: '/assets/images/tumblr_nac7d0Qsgs1tuk7i7o1_1280.jpg'
        }
    ]);
}