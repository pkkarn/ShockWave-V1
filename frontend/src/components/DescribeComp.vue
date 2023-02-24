<template>
    <div id="describe_comp">
        <h3>Describe</h3>
        <div class="describe">
            <form class="describe_form justify-content-between d-flex" @submit.prevent="DescribeResult">
                <input type="text" v-model="word" placeholder="Search Word">
                <button type="submit" class="btn btn-primary btn-sm">Search</button>
            </form>
            <h3 class="mt-3" v-if="word !== ''">{{word}}</h3>
            <div id="describe_slot" v-if="myresults.length !== 0" class="mb-3">
                <div v-for="result in myresults" :key="result">
                    <li v-if="!result.includes('https://')">{{result}}</li>
                    <iframe v-else width="320" height="215" :src="result" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
                word: '',
                myresults: []
            }
        },
        methods: {
            async DescribeResult() {
                const response = await axios.get('http://localhost:3000/api/wikidata', {
                    params: {
                        word: this.word
                    }
                })
                response.data.wiki.forEach(el => {
                    if(el !== null) {
                     this.myresults.push(el)
                    }
                })
                console.log('asds')

                const response_yt = await axios.get('http://localhost:3000/api/youtube', {
                    params: {
                        word: this.word
                    }
                })
                response_yt.data.yt_urls.forEach(video_url => {
                    this.myresults.push(video_url)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
        #describe_comp::-webkit-scrollbar {
                    width: 1em;
                }
        #describe_comp::-webkit-scrollbar-thumb {
            background-color: rgb(223, 249, 255);
            outline: 1px solid rgb(165, 210, 255);
        }
        #describe_comp {
            max-height: 70vh;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        width: 400px;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 3px 3px 12px 2px rgba(119, 119, 119, 0.596);
        h3 {
            font-family: 'Poppins', sans-serif;
            display: block;
            border-bottom: 2px solid rgb(204, 204, 204);
            padding-bottom: 10px;
            margin-bottom: 30px;
            font-weight: 700;
            font-size: 20px;
        }
        #describe_slot{
        background: #f6f6ff;
        padding: 10px;
        border-radius: 5px;
        // display: flex;
        width: 100%;
        position: relative;
        opacity: 0.8;
        transition: all 0.4s;
        &:hover {
            cursor: pointer;
            opacity: 1;
            transform: scale(1.03);
        }
        .profile_img {
            border-radius: 100%;
            min-width: 70px;
            min-height: 70px;
            // height: 100%;
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .detail {
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-content: center;
            justify-content: center;
            // justify-items: flex-start;
            // flex-direction: column;
            padding-left: 20px;
            .user_name {
                font-family: 'Poppins', sans-serif;
                font-weight: bold;
                margin-bottom: 0;
                font-size: 17px;
            }
            .active_status {
                color: rgb(145, 145, 145);
                margin-bottom: 0;
                font-size: 14px;
            }
        }
    }
    }
</style>