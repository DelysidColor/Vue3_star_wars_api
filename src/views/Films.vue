<template>
  <div>
    <Film v-if="!isLoading" :films="films" />
    <my-loader v-else />
  </div>
</template>

<script>
import Film from "@/components/Film.vue";
import useFilms from "@/hooks/useFilms";

export default {
  components: {
    Film,
  },
  setup(props) {
    const { films, isLoading } = useFilms();

    return {
      useFilms,
      films,
      isLoading,
    };
  },
};
</script>

<style scoped></style>
