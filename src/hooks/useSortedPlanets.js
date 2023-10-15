import { computed, ref } from "vue";

export default function useSortedPlanets(planets) {
  const selectedSort = ref("");
  const sortedPlanets = computed(() => {
    return [...planets.results.value].sort((planet1, planet2) =>
      planet1[selectedSort.value]?.localeCompare(planet2[selectedSort.value])
    );
  });

  return {
    selectedSort,
    sortedPlanets,
  };
}
