<template>
  <select v-bind:value="modelValue" @change="changeOptions">
    <option disabled value="">Sort options...</option>
    <option v-for="opt in options" :key="opt.value" :value="opt.value">
      {{ opt.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
select {
  width: 120px;
  height: 30px;
  border: 1px solid teal;
}
</style>
