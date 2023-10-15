import axios from "axios";
import { onMounted, ref } from "vue";

export default function useVehicles() {
  const vehicles = ref({});
  const isLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/vehicles");
      vehicles.value = response.data;
    } catch (e) {
      alert("error");
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    vehicles,
    isLoading,
  };
}
