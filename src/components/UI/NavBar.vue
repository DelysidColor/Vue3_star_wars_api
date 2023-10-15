<template>
  <div class="navbar">
    <div @click="$router.push('/')">Star Wars Information App</div>
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
export default {
  methods: {
    isDirectoryPath() {
      return this.router.isActive("directory", false);
    },
  },
};
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

.navbar_btns button:hover {
  background-color: teal;
}

.active {
  background-color: teal;
  color: white;
}

a {
  background: none;
  padding: 10px;
  border: 1px solid teal;
  text-decoration: none;
  color: black;
}
</style>
