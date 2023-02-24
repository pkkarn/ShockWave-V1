const Router = require('express').Router();
const FetchTweets = require('fetch-tweets');

let apiKeys = {
    consumer_key : 'xxx',
    consumer_secret : 'xxx'
};

let fetchTweets = new FetchTweets(apiKeys, false); 

Router.get('/', async (req, res) => {
    let options = {
        q: req.query.topic,
        lang: 'en',
        result_type: 'recent',
        count: req.query.count,
    }
    fetchTweets.byTopic(options, async (response) => {
        const tweets = await response.statuses
        const data = []
        tweets.forEach(tweet => {
            const custom_tweet = {
                text: tweet.text,
                created_at: tweet.created_at,
                user_id: tweet.user.id,
                user_screen_name: tweet.user.screen_name,
                retweet_count: tweet.retweet_count,
                profile_url: tweet.user.profile_image_url_https
            }
            data.push(custom_tweet)
        })
        res.json({ twitter: data });
    })
});

module.exports = Router;


// Twitter Testing


