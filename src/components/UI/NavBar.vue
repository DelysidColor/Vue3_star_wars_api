<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/images/starwarslogo.png" alt="logo" />
    </div>
    <div class="navbar_btns">
      <router-link style="margin-left: 20px" to="/">Main</router-link>
      <router-link style="margin-left: 20px" to="/films">Films</router-link>
      <router-link style="margin-left: 20px" to="/people">People</router-link>
      <router-link style="margin-left: 20px" to="/planets">Planets</router-link>
      <router-link style="margin-left: 20px" to="/species">Species</router-link>
      <router-link style="margin-left: 20px" to="/vehicles"
        >Vehicles</router-link
      >
      <router-link style="margin-left: 20px" to="/starships"
        >Starships</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar_btns {
  margin-left: auto;
}

.navbar_btns a:hover {
  background-color: rgb(175, 173, 173);
}

.active {
  background-color: rgb(0, 85, 85);
  color: white;
  transition: 0.5s;
}

a {
  background: none;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  transition: 0.5s;
}

.logo img {
  height: 45px;
}
</style>
