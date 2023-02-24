<template>
    <div id="wolfram_comp">
        <form @submit.prevent="QueryMyQuestion">
            <h1 class="mb-3">Wolfram Query</h1>
            <div class="form-group mt-2">
                <label for="WorlframQuery">What is Your Query?</label>
                <input type="text" class="form-control mt-2" v-model="question" id="WorlframQuery" placeholder="e.g: Who is prime minister of india?">
            </div>
            <div class="form-group mt-4">
                <p v-if="answer !== ''" class="answer_label">{{answer}}</p>
            </div>
            <button type="submit" class="btn btn-primary btn-block custom-btn mt-3">Get Answer</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
                question: '',
                answer: '',
                url: 'http://api.wolframalpha.com/v1/result'
            }
        },
        methods: {
            async QueryMyQuestion() {
                const response = await axios.get('http://localhost:3000/api', {
                    params: {
                        question: this.question
                    }
                })
                this.answer = response.data.ans
            }
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
    #wolfram_comp {
        background-color: #2a4b80;
        border: 2px solid rgba(71, 71, 71, 0.199);
        color: white;
        padding: 30px;
        border-radius: 10px;
        min-width: 400px;
        box-shadow: 3px 3px 12px 3px #777;
        margin: 13% auto;
        
        form {
            transition: 1s all ease-in-out;
            .answer_label{
                background-color: #e9ffc1;
                color: rgb(78, 78, 78);
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