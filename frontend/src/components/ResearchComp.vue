<template>
    <div id="research_comp">
        <h3>Scientific Papers</h3>
        <div>
            <div class="list-box mb-3">
                <div class="mr">
                    <img src="../assets/research_img/document.svg" alt="">
                    <p class="title">Research Paper Title 1</p>
                </div>
                <div class="ml">
                    <img src="../assets/research_img/eye.svg" alt="">
                    <img src="../assets/research_img/direct-download.svg" alt="">
                </div>
            </div>
             <div class="list-box mb-3">
                <div class="mr">
                    <img src="../assets/research_img/document.svg" alt="">
                    <p class="title">Research Paper Title 2</p>
                </div>
                <div class="ml">
                    <img src="../assets/research_img/eye.svg" alt="">
                    <img src="../assets/research_img/direct-download.svg" alt="">
                </div>
            </div>
             <div class="list-box mb-3">
                <div class="mr">
                    <img src="../assets/research_img/document.svg" alt="">
                    <p class="title">Research Paper Title 3</p>
                </div>
                <div class="ml">
                    <img src="../assets/research_img/eye.svg" alt="">
                    <img src="../assets/research_img/direct-download.svg" alt="">
                </div>
            </div>
             <div class="list-box mb-3">
                <div class="mr">
                    <img src="../assets/research_img/document.svg" alt="">
                    <p class="title">Research Paper Title 4</p>
                </div>
                <div class="ml">
                    <img src="../assets/research_img/eye.svg" alt="">
                    <img src="../assets/research_img/direct-download.svg" alt="">
                </div>
            </div>
             <div class="list-box">
                <div class="mr">
                    <img src="../assets/research_img/document.svg" alt="">
                    <p class="title">Research Paper Title 5</p>
                </div>
                <div class="ml">
                    <img src="../assets/research_img/eye.svg" alt="">
                    <img src="../assets/research_img/direct-download.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #research_comp {
        position: relative;
        max-width: 400px;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 3px 3px 12px 2px rgba(119, 119, 119, 0.596);
        h3 {
            font-family: 'Poppins', sans-serif;
            display: inline-block;
            border-bottom: 2px solid #777;
            padding-bottom: 10px;
            margin-bottom: 30px;
        }
        div {
            width: 100%;
            position: relative;
            .list-box {
                width: 100%;
                display: flex;
                border: 1px solid rgba(119, 119, 119, 0.425);
                justify-content: space-between;
                align-items: center;
                position: relative;
                border-radius: 5px;
                background-color: #f6f6ff;
                box-shadow:2px 2px 10px 3px rgba(119, 119, 119, 0.151);
                transition: all 0.4s;
                &:hover {
                    box-shadow:2px 2px 10px 3px rgba(119, 119, 119, 0.425);
                    transform: scale(0.99);
                    cursor: pointer;
                }
                div {
                    img {
                        width: 10%;
                        transition: all 0.5s;
                        cursor: pointer;
                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }
                .mr {
                    .title {
                        margin-top: 6%;
                        margin-left: 4px;
                        font-size: 14px;
                    }
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    img {
                        margin-left: 10px;
                    }
                }
                .ml {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    img {
                        margin-left: 10px;
                        cursor: pointer;
                        transition: all 0.5s;
                        &:hover {
                            transform: scale(1.1);
                        }
                        &:not(:first-child) {
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }

</style>