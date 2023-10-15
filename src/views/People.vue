<template>
  <div>
    <People v-if="!isLoading" :people="people" />
    <my-loader v-else />
    <!-- <div v-for="p in totalPages" :key="p" @click="setPage(p)">
      {{ p }}
    </div> -->
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
    const { page, people, isLoading, totalPages, setPage } = usePeople();

    return {
      setPage,
      usePeople,
      people,
      isLoading,
      totalPages,
      page,
    };
  },
};
</script>

<style scoped></style>
