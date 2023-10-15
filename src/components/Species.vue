<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Skin Color</th>
        <th>Classification</th>
        <th>Language</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(species, idx) in species" :key="idx">
        <td>
          {{ species.name }}
        </td>
        <td>
          {{ species.skin_colors }}
        </td>
        <td>
          {{ species.classification }}
        </td>
        <td>
          {{ species.language }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    species: {
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
  border: 2px solid rgb(0, 85, 85);
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color:rgb(0, 85, 85);
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
  min-width: 80px;
  padding: 10px 20px;
}
</style>
