<template>
    <div id="sentiment_comp">
        <form @submit.prevent="SentimentAnalyzer">
            <h1 class="mb-3">Sentiment Analyzer</h1>
            <div class="form-group mt-2">
                <label for="SentimentQuery">Sentiment Analyzer</label>
                <input type="text" class="form-control mt-2" v-model="statement" id="SentimentQuery" placeholder="e.g: I'm very happy">
            </div>
            <div class="form-group mt-4" v-if="score!==null">
                <img src="../assets/sentiment/positive.png" v-if="score>0" alt="">
                <img src="../assets/sentiment/negative.png" v-else-if="score<0" alt="">
                <img src="../assets/sentiment/neutral.png" v-else-if="score===0" alt="">
            </div>
            <button type="submit" class="btn btn-primary btn-block custom-btn mt-3">Analyze</button>
        </form>
    </div>
</template>

<script>
import Sentiment from 'sentiment';
var sentiment = new Sentiment();
    export default {
        data() {
            return {
                statement: '',
                score: null
            }
        },
        methods: {
            async SentimentAnalyzer() {
                var result = await sentiment.analyze(this.statement);
                this.score = result.score;
            }
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
    #sentiment_comp {
        img {
            width: 50%;
            margin: 0 auto;
            margin-left: 25%;
            transition: 1s all ease-in-out;

        }
        background-color: #ffe2bd;
        border: 2px solid rgba(71, 71, 71, 0.199);
        color: rgb(71, 71, 71);
        padding: 30px;
        border-radius: 10px;
        min-width: 400px;
        box-shadow: 3px 3px 12px 3px #777;
        margin: 13% auto;
        
        form {
            transition: 1s all ease-in-out;
            .answer_label{
                background-color: #e9ffc1;
                color: rgb(54, 54, 54);
                padding: 5px 10px;
                border-radius: 5px;
                transition: 1s all ease-in-out;
            }
            h1 {
                font-family: 'Audiowide', cursive;
            }
            .custom-btn {
                background-color:#E7913C;
                // border-radius: 100%;
                width: 100%;
                border: 2px solid #fff;
                border-radius: 100px;
                transition: all 0.5s;
            
                &:hover {
                    box-shadow:1px 1px 6px 2px rgba(224, 224, 224, 0.349);
                }
                &:active {
                    box-shadow:0.5px 0.5px 3px 1px rgba(128, 128, 128, 0.349);
                }
            }

            // input[placeholder] {
            //     opacity: 0.2;
            // }
            ::placeholder{
                opacity: 0.2;
            }
        }
    }
</style>