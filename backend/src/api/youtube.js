const Router = require('express').Router();
const pkg = require('youtubei');
const { Client } = pkg;

const youtube = new Client();

Router.get('/', async (req, res) => {

    const run = async () => {
        const videos = await youtube.search(`Wbat is ${req.query.word}`, {
            type: "video", // video | playlist | channel | all
        });
        const videos_url = []
        videos.forEach(video => {
            const url = `https://www.youtube.com/embed/${video.id}`;
            videos_url.push(url);
        });
        res.json({ yt_urls: videos_url });
    };
    run();
});

module.exports = Router;

