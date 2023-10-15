import axios from "axios";
import { onMounted, ref } from "vue";

export default function useFilms() {
  const films = ref({});
  const isLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/films");
      films.value = response.data;
    } catch (e) {
      alert("error");
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    films,
    isLoading,
  };
}
