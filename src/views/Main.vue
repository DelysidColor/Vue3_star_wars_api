<template>
  <div>
    <Link v-if="!isLoading" :links="links" />
    <my-loader v-else />
  </div>
</template>

<script>
import Link from "@/components/Link.vue";
import useLinks from "@/hooks/useLinks";

export default {
  components: {
    Link,
  },
  setup(props) {
    const { links, isLoading } = useLinks();

    return {
      useLinks,
      links,
      isLoading,
    };
  },
};
</script>

<style>
.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.page_wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid grey;
  padding: 10px;
}
.current-page {
  border: 2px solid black;
}
</style>
