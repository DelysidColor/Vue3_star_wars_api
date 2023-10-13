<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>API</th>
        <th>btn</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(link, idx) in links" :key="idx">
        <td>
          {{}}
        </td>
        <td>
          {{ idx }}
        </td>
        <td>
          {{ link }}
        </td>
        <td>
          <span>
            <my-button @click="$router.push(`/posts/${link.id}`)">
              Open
            </my-button>
          </span>
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
};
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
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
</style>
