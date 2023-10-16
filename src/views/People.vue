<template>
  <div class="wrapper">
    <People :people="people" />
    <div class="pagination-wrapper">
      <div class="pagination">
        <div
          v-for="pageNumber in displayedPages"
          :key="pageNumber"
          @click="setPage(pageNumber)"
          :class="[
            'pagination-button',
            { 'active-button': pageNumber === page },
          ]">
          {{ pageNumber }}
        </div>
      </div>
      <my-loader v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import People from "@/components/People.vue";
import usePeople from "@/hooks/usePeople";

export default {
  components: {
    People,
  },
  setup() {
    const route = useRoute();
    const initialPage = Number(route.query.page) || 1;
    const { people, isLoading, totalPages, page, setPage } =
      usePeople(initialPage);

    const maxDisplay = 5;

    const displayedPages = computed(() => {
      const maxPages = totalPages.value;
      let startPage = 1;
      let endPage = maxPages;

      if (maxPages > maxDisplay) {
        const halfDisplay = Math.floor(maxDisplay / 2);
        if (page.value > halfDisplay) {
          startPage = page.value - halfDisplay;
        }
        endPage = Math.min(startPage + maxDisplay - 1, maxPages);
      }

      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    });

    return {
      people,
      isLoading,
      totalPages,
      page,
      setPage,
      displayedPages,
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination-wrapper {
  display: flex;
}
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

.active-button {
  background-color: #333;
  color: #fff;
}
</style>
