<template>
  <div>
    <Starships v-if="!isLoading" :starships="starships" />
    <my-loader v-else />
  </div>
</template>

<script>
import Starships from "@/components/Starships.vue";
import useStarships from "@/hooks/useStarships";

export default {
  components: {
    Starships,
  },
  setup(props) {
    const { starships, isLoading } = useStarships();

    return {
      useStarships,
      starships,
      isLoading,
    };
  },
};
</script>

<style scoped></style>
