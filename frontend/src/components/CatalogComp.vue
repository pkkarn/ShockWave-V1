<template>
    <div id="catalog_comp">
        <div class="card mt-2 mb-2">
            <div class="img_div">
                <img src="../assets/harry.jpg" alt="">
            </div>
            <div class="detail">
                <button class="btn btn-primary btn-block">Read More</button>
            </div>
        </div>
        <div class="card mt-2 mb-2">
            <div class="img_div">
                <img src="../assets/harry.jpg" alt="">
            </div>
            <div class="detail">
                <button class="btn btn-primary btn-block">Read More</button>
            </div>
        </div>
        <div class="card mt-2 mb-2">
            <div class="img_div">
                <img src="../assets/harry.jpg" alt="">
            </div>
            <div class="detail">
                <button class="btn btn-primary btn-block">Read More</button>
            </div>
        </div>
        <div class="card mt-2 mb-2">
            <div class="img_div">
                <img src="../assets/harry.jpg" alt="">
            </div>
            <div class="detail">
                <button class="btn btn-primary btn-block">Read More</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap');
    #catalog_comp {
        width: 100%;
        width: 1124px;
        padding: 10px 10px;
        // max-width: 1124px;
        // border: 1px solid rgba(0, 0, 0, 0.26);
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        position: relative;

        .card {
            width:23%;
            min-height: 350px;
            margin-left: 20px;
            position: relative;
            transition: all 1.5s;
            padding: 20px;
            &:hover {
                transform: translateY(-10px) scale(1.03);
                box-shadow: 3px 3px 22px 5px rgba(70, 70, 70, 0.63);
                cursor: pointer;
            }
            
            .img_div {
                height: 100%;
                border-radius: 5px 5px 0px 0px;
                position: relative;
                width: 100%;
                    overflow: hidden;
                    transition: all 0.3s;

                &:hover {
                    transform: translateY(-70px)
                }
                
                img {
                    width: 100%;
                }
            }
            .detail {
                font-family: 'Poppins', sans-serif;
                position: absolute;
                bottom:20px;
                z-index: -1;
                
                button {
                    background-color:#2a4b80;
                    margin-bottom: 10px;
                    width: 190%;
                }
            }
            
        }
    }
</style>