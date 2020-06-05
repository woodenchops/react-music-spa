const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config.env'});

mongoose.connect(process.env.DBCONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('DB CONNECTION SUCCESSFUL'))

const app = express();

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const userProfileApi = require('./Routes/UserProfile');
const headerApi = require('./Routes/HeaderRoute');
const newReleasesApi = require('./Routes/NewReleasesRoute');
const recommendedApi = require('./Routes/RecommededRoute');
const bannerApi = require('./Routes/BannerRoute');
const weeklyPlaylistApi = require('./Routes/WeeklyPlayListRoute');

app.use('/api/user', userProfileApi);
app.use('/api/header', headerApi);
app.use('/api/new-releases', newReleasesApi);
app.use('/api/recommeded', recommendedApi);
app.use('/api/banner', bannerApi);
app.use('/api/weekly-playlist', weeklyPlaylistApi);


const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));