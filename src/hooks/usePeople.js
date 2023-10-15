import axios from "axios";
import { onMounted, ref } from "vue";

export default function usePeople() {
  const people = ref({});
  const isLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people");
      people.value = response.data;
      console.log(response);
    } catch (e) {
      alert("error");
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    people,
    isLoading,
  };
}
