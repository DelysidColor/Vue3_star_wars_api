<template>
  <div class="navbar">
    <div @click="$router.push('/')">Post App</div>
    <div class="navbar_btns">
      <my-button style="margin-left: 20px" @click="$router.push('/')"
        >Main</my-button
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
</style>
