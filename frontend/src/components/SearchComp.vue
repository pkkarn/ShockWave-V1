<template>
    <div id="search_comp">
        <form @submit.prevent>
            <input type="text" placeholder="Search your word..." v-model="search_word" name="" id="" />
            <button @click="toggleSpeechRecognition()" type="button"><img v-if="!isActive" src="../assets/search_img/microphone.svg" alt="">
            <img v-else src="../assets/search_img/offmicrophone.svg" alt="">
            </button>
            <button type="submit"><img src="../assets/search_img/search.svg" alt=""></button>
        </form>
    </div>
</template>

<script>
import annyang from 'annyang';
    export default {
        data() {
            return {
                search_word: '',
                isActive: false,
            }
        },
        methods: {
            SearchWord(tag){
                        this.search_word = tag
                    },
                toggleSpeechRecognition() {
        //   const verb = 'VOICE_SEARCH';
                    this.isActive = !this.isActive;
                    
                    
                    const searchCommands = {
                        'Search *tag': (tag) => {
                            this.SearchWord(tag);
                        }
                    }

                    annyang.addCommands(searchCommands);

                    if (this.isActive) {
                        annyang.start();
                    } else {
                        annyang.abort();
                    }
                }
        }
    }
</script>

<style lang="scss" scoped>
    #search_comp {
        position: relative;

        form {
            position: relative;
            max-width: 70%;
            display: flex;
            max-height: 50px;
            border: 2px solid #7484ffab;
            border-radius: 8px;
            img {
                height: 65%;
                color: red;
            }
            // border: 1px solid black;
            button {
                background: none;
                border: none;
                justify-content: center;
                align-items: center;
                display: flex;
                width: 12.5%;
                &:last-child {
                    border-radius: 8px;
                    background-color: rgb(255, 255, 230);
                    width: 12.5%;
                    
                    img {
                        height: 50%;
                        // margin-right:12px;
                    }
                }
            }
            input {
                width: 75%;
                border: none;
                outline: none;
            }
        }
    }
</style>