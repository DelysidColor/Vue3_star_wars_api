import axios from "axios";
import { onMounted, ref } from "vue";

export default function useSpecies() {
  const species = ref({});
  const isLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/species");
      species.value = response.data.results;
    } catch (e) {
      alert("error");
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    species,
    isLoading,
  };
}
