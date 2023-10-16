import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default function usePeople(initialPage) {
  const people = ref({});
  const page = ref(initialPage);
  const totalPages = ref(0);
  const isLoading = ref(true);
  const route = useRoute();
  const router = useRouter();

  const fetching = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people", {
        params: {
          page: page.value,
        },
      });
      people.value = response.data.results;
      totalPages.value = Math.ceil(response.data.count / 10);

      router.push({ query: { page: page.value } });
    } catch (e) {
      alert("error");
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetching);

  const setPage = (p) => {
    page.value = p;
    isLoading.value = true;
    fetching();
  };

  watch(route, (to, from) => {
    const newPage = Number(to.query.page) || 1;
    if (newPage !== page.value) {
      page.value = newPage;
    }
  });

  return {
    people,
    isLoading,
    totalPages,
    page,
    setPage,
  };
}
