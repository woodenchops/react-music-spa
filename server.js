const express = require('express');
const cors = require('cors');

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


const PORT = 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));