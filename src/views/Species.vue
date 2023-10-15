<template>
  <div>
    <Species v-if="!isLoading" :species="species" />
    <my-loader v-else />
  </div>
</template>

<script>
import Species from "@/components/Species.vue";
import useSpecies from "@/hooks/useSpecies";

export default {
  components: {
    Species,
  },
  setup(props) {
    const { species, isLoading } = useSpecies();

    return {
      useSpecies,
      species,
      isLoading,
    };
  },
};
</script>

<style scoped></style>
