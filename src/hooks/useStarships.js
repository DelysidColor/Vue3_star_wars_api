import axios from "axios";
import { onMounted, ref } from "vue";

export default function useStarships() {
  const starships = ref({});
  const isLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships");
      starships.value = response.data;
    } catch (e) {
      alert("error");
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    starships,
    isLoading,
  };
}
