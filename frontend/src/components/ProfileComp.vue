<template>
    <div id="profile_comp">
        <!-- https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg -->
        <div class="header">
            <h3>Donald Trump</h3>
            <img src="../assets/profile/bookmark.svg" alt="">            
        </div>

        <div class="content">
            <div class="row d-flex">
                <div class="col-md-6">
                    <img class="img_thumb" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" alt="">
                </div>
                <div class="col-md-6 profile_detail">
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>Age:</strong> 12yrs</p>
                    <p><strong>Birth Date:</strong> Some Date</p>
                    <p><strong>Worth:</strong> $1000 Million</p>
                    <p><strong>Email:</strong> donald@gmail.com</p>
                    <p><strong>Occupation:</strong> President</p>
                </div>
            </div>
            <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iusto id est dicta ipsum perferendis architecto officia ipsam? Quam quas sunt aut vitae provident blanditiis eveniet quia qui odio obcaecati.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iusto id est dicta ipsum perferendis architecto officia ipsam? Quam quas sunt aut vitae provident blanditiis eveniet quia qui odio obcaecati.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
    #profile_comp {
        max-width: 500px;
        min-width: 400px;
        padding: 20px;
        min-height: 570px;
        border-radius: 4px;
        box-shadow: 3px 3px 12px 2px rgba(119, 119, 119, 0.596);
        .img_thumb {
            border-radius: 8px;
            box-shadow: -3px 5px 12px 2px rgba(0,0,0,0.5)
        }
        .header {
            border-bottom: 2px solid rgb(204, 204, 204);
            padding-bottom: 10px;
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;

            h3 {
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
                font-size: 20px;
            }
            img {
                width: 25px;
            }
        }
        .profile_detail {
            font-family: 'Poppins', sans-serif;
            line-height: 3px;
            font-size: 13px;
            padding-top: 20px;
            padding-right: 10px;
        }
        .description {
            position: absolute;
            bottom: 0;
            background-color: #f6f6f6;
            border-radius: 8px;
            z-index: -1;
            font-size:13px;
            padding: 150px 10px 50px 10px;
            margin-right:10px; 
        }
    }
</style>