<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>API</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(link, idx) in links" :key="idx">
        <td>{{ idx + 1 }}</td>
        <td>
          {{ link[0] }}
        </td>
        <td>
          {{ link[1] }}
        </td>
        <td class="td-button">
          <my-button @click="$router.push(link[0])"> Open </my-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rowNumber: 0,
    };
  },
};
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgb(0, 85, 85);
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: rgb(0, 85, 85);
  color: rgba(255, 255, 255, 0.66);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

.td-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
