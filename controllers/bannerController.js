exports.getBanner = (req, res) => {
    res.status(200).json([{
       msg: 'Banner route'
    }]);
};


/*

you attach the getBanner controller to the exports object. Then call that function like so:

1) import controller into file 

    --> const bannerController = require('../controllers/bannerController')

2) call function

    --> router
        .route('/')
        .get(bannerController.getBanner)

*/