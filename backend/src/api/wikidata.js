const Router = require('express').Router();
const WBK = require('wikibase-sdk');
const axios = require('axios');

function wikiSearch(wikiWord) {
  const wbk = WBK({
    instance: 'https://www.wikidata.org',
    sparqlEndpoint: 'https://query.wikidata.org/sparql',
  });

  const search = wikiWord;
  const language = 'en'; // will default to 'en'
  const limit = 8; // defaults to 20
  const format = 'json'; // defaults to json

  if (search) {
    const url = wbk.searchEntities(search, language, limit, format);
    return url;
  }
  return 'The URL is not valid';
}

async function getMyWords(word) {
    const response = await axios.get(wikiSearch(word))
    const wikiInformation = response.data.search;
    return wikiInformation;
}

Router.get('/', async (req, res) => {
    const results = [];

    const wiki_result = await getMyWords(req.query.word);
    wiki_result.forEach(result => {
        results.push(result.description);
    })
    res.json({ wiki: results });
});

module.exports = Router;