<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  background: none;
  padding: 10px;
  border: 1px solid teal;
  border-radius: 4px;
}

.btn:hover {
  box-shadow: 0px 0px 4px teal;
}

.btn:active {
  background-color: teal;
}
</style>
