<template>
  <div>
    <People v-if="!isLoading" :people="people" />
    <my-loader v-else />
    <div class="pagination">
      <div
        v-for="p in totalPages"
        :key="p"
        @click="setPage(p)"
        class="pagination-button">
        {{ p }}
      </div>
    </div>
  </div>
</template>

<script>
import People from "@/components/People.vue";
import usePeople from "@/hooks/usePeople";

export default {
  components: {
    People,
  },
  setup() {
    const { people, isLoading, totalPages, page, setPage } = usePeople(1);

    return {
      people,
      isLoading,
      totalPages,
      setPage,
    };
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
}

.pagination-button {
  cursor: pointer;
  padding: 4px 6px;
  margin: 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  color: #333;
}

.pagination-button:hover {
  background-color: #333;
  color: #fff;
}
</style>
