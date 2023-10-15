<template>
  <div>
    <Planets v-if="!isLoading" :planets="planets" />
    <my-loader v-else />
  </div>
</template>

<script>
import Planets from "@/components/Planets.vue";
import usePlanets from "@/hooks/usePlanets";

export default {
  components: {
    Planets,
  },
  setup(props) {
    const { planets, isLoading } = usePlanets();

    return {
      usePlanets,
      planets,
      isLoading,
    };
  },
};
</script>

<style scoped></style>
