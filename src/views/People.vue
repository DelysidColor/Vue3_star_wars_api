<template>
  <div>
    <People v-if="!isLoading" :people="people" />
    <my-loader v-else />
  </div>
</template>

<script>
import People from "@/components/People.vue";
import usePeople from "@/hooks/usePeople";

export default {
  components: {
    People,
  },
  setup(props) {
    const { people, isLoading } = usePeople();

    return {
      usePeople,
      people,
      isLoading,
    };
  },
};
</script>

<style scoped></style>
