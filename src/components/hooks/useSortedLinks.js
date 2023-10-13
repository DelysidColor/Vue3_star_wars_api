import axios from "axios";
import { computed, ref } from "vue";

export default function useSortedLinks(links) {
  const selectedSort = ref("");
  const sortedLinks = computed(() => {
    return [...links.value].sort((link1, link2) =>
      link1[selectedSort.value]?.localeCompare(link2[selectedSort.value])
    );
  });

  return {
    selectedSort,
    sortedLinks,
  };
}
