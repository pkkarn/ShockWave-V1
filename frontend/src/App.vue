<template>
  <div id="app">
    <div class="nav">
      <p class="title">ComponentCompetitionx31</p>
      <router-link tag="a" :to="{ name: 'sentiment' }">Sentiment</router-link>
      <router-link tag="a" :to="{ name: 'search' }">Search</router-link>
      <router-link tag="a" :to="{ name: 'describe' }">Describe</router-link>
      <router-link tag="a" :to="{ name: 'twitter' }">Twitter</router-link>
      <router-link tag="a" :to="{ name: 'wolfram' }">Wolfram</router-link>
      <router-link tag="a" :to="{ name: 'catalog' }">Catalog</router-link>
      <router-link tag="a" :to="{ name: 'research' }">Research</router-link>
      <router-link tag="a" :to="{ name: 'friends' }">Friends</router-link>
      <router-link tag="a" :to="{ name: 'profile' }">Profile</router-link>
    </div>
    <div class="view_section">
      <transition name="custom_anim">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
#app {
  .nav {
    position: fixed;
    top:1%;
    left: 2%;
    .title {
      font-size: 17px;
      font-weight: bold;
      font-family: 'Audiowide', cursive;
      color: rgb(228, 180, 79);

    }
    a {
      color: black;
      margin-left: 20px;
      display: inline-block;
      text-decoration: none;
      border-bottom: 2px solid black;
    }
  }
  font-family: 'Open Sans', sans-serif;
  .view_section {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .custom_anim-enter-active{
    transition: all 4s;
    opacity: 1;
  } 
  .custom_anim-leave {
    transition: all 4s;
    opacity: 1;
  }
  .custom_anim-enter{
      opacity: 0;
    transform: translateX(-100%);
  }
  .custom_anim-leave-to {
    opacity: 0;
    transform: translateX(200%);
  }
}
</style>
