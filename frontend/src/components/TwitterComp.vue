<template>
    <div id="twitter_comp">
        <h3>Twitter <span v-if="count !== null">({{count}})</span></h3>
        <form class="custom_twitter_form" @submit.prevent="fetchMyTopic">
            <div>
                <input class="topic_input" type="text" placeholder="e.g PUBG" v-model="topic_name">
                <input class="count_input" type="number" placeholder="5" v-model="count">
            </div>
            <button type="submit" class="btn btn-primary">What's Going On?</button>
        </form>
        <div class="twitters" v-if="twitter_data.length !== 0">
            <div v-for="tweet in twitter_data" :key="tweet.text" id="twitter_slot" class="mb-3">
                <div class="profile_img">
                    <img :src="tweet.profile_url" alt="">
                </div>
                <div class="detail">
                    <p class="user_name">{{tweet.user_screen_name}}</p>
                    <div class="tweet_text">
                        <p>
                            {{tweet.text}}
                        </p>
                    </div>
                    <div class="minor_details">
                        <p class="created_at">{{tweet.created_at}}</p>
                        <p class="retweet_style"><img src="../assets/twitter_img/retweet.svg"> {{tweet.retweet_count}}</p>
                    </div>
                </div>
            </div>          
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        data() {
            return {
                topic_name: '',
                count: null,
                twitter_data: []
            }
        },
        methods: {
            async fetchMyTopic() {
                const response = await axios.get('http://localhost:3000/api/twitter', {
                    params: {
                        topic: this.topic_name,
                        count: this.count
                    }
                })
                this.twitter_data = response.data.twitter
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
        #twitter_comp::-webkit-scrollbar {
            width: 1em;
        }
        #twitter_comp::-webkit-scrollbar-thumb {
            background-color: rgb(223, 249, 255);
            outline: 1px solid rgb(165, 210, 255);
        }
        #twitter_comp {
        max-height: 70vh;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        max-width: 500px;
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
            span {
                font-weight: 700;
                color: #777;
            }
        }
        .minor_details {
            display: flex;
            justify-content: space-between;
            .retweet_style {
            display: flex;
            justify-content:flex-end;
                img {
                    width: 10%;
                }
            }
            
        }
        .custom_twitter_form {
            div {
                display: flex;
                margin-bottom:10px
            }
            .topic_input {
                // display: block;
                width: 80%;
                border: none;
                border-right: 1px solid #777;
                outline: none;
                padding: 10px;
                &:focus {
                    border: none;
                }
            }
            .count_input {
                width: 20%;
                border: none;
                outline: none;
                padding: 10px;
                &:focus {
                    border: none;
                }
            }
            button {
                width: 100%;
                background: #FFFFCC;
                color: #333;
                margin-bottom: 20px;
                // margin: 10px;
            }
        }
        .tweet_text {
            font-size: 14px;
        }
        #twitter_slot{
        background: lighten(rgb(29, 161, 242), 40%);
        padding: 10px;
        border-radius: 5px;
        display: flex;
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
            width: 20%;
            height: 100%;
            
            // height: 100%;
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
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
            .created_at {
                color: rgb(145, 145, 145);
                margin-bottom: 0;
                font-size: 14px;
                width: 110%;
            }
        }
    }
    }
</style>