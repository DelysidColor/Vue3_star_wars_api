import { computed, ref } from "vue";

export default function searchedAndSortedLinks(sortedLinks) {
  const searchQuery = ref("");
  const searchedAndSortedLinks = computed(() => {
    return sortedLinks.value.filter((link) =>
		link.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

	return {
		searchQuery, searchedAndSortedLinks
	}
}
