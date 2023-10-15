import axios from "axios";
import { onMounted, ref } from "vue";

export default function usePeople() {
  const people = ref({});
  const page = ref(1);
  const totalPages = ref(0);
  const isLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people", {
        params: {
          page: page.value,
        },
      });
      people.value = response.data.results;
      totalPages.value = Math.ceil(
        response.data.count / response.data.results.length
      );
    } catch (e) {
      alert("error");
    } finally {
      isLoading.value = false;
    }
  };

  const setPage = function (p) {
    page.value = p;
  };

  onMounted(fetching);

  return {
    people,
    isLoading,
    totalPages,
    setPage,
  };
}
