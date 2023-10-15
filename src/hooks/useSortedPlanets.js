import { computed, ref } from "vue";

export default function useSortedPlanets(planets) {
  const selectedSort = ref("");
  const sortedPlanets = computed(() => {
    return [...planets].sort(
      (planet1, planet2) =>
        Number(planet1[selectedSort.value]) -
        Number(planet2[selectedSort.value])
    );
  });

  return {
    selectedSort,
    sortedPlanets,
  };
}
