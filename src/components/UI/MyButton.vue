<template>
  <button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
name: 'my-button'
};
</script>

<style scoped>
.btn {
  background: none;
  padding: 10px;
  border: 1px solid teal;
}
</style>
