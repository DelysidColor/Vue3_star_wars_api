<template>
  <div>
    <Vehicles v-if="!isLoading" :vehicles="vehicles" />
    <my-loader v-else />
  </div>
</template>

<script>
import Vehicles from "@/components/Vehicles.vue";
import useVehicles from "@/hooks/useVehicles";

export default {
  components: {
    Vehicles,
  },
  setup(props) {
    const { vehicles, isLoading } = useVehicles();

    return {
      useVehicles,
      vehicles,
      isLoading,
    };
  },
};
</script>

<style scoped></style>
