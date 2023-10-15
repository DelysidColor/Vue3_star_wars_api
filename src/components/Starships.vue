<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Model</th>
        <th>Crew</th>
        <th>Passengers</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(ship, idx) in starships.results" :key="idx">
        <td>
          {{ ship.name }}
        </td>
        <td>
          {{ ship.model }}
        </td>
        <td>
          {{ ship.crew }}
        </td>
        <td>
          {{ ship.passengers }}
        </td>
        <td>
          <span v-if="ship.cost_in_credits !== 'unknown'">
            {{ ship.cost_in_credits / 10000 }}kk CDT</span
          >
          <span v-else>Unknown</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    starships: {
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
