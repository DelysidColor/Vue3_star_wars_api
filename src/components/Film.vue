<template>
  <table>
    <thead>
      <tr>
        <th>Episode</th>
        <th>Title</th>
        <th>Release Date</th>
        <th>Director</th>
        <th>Producer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(film, idx) in films.results" :key="idx">
        <td>
          {{ film.episode_id }}
        </td>
        <td>
          {{ film.title }}
        </td>
        <td>
          {{ dateTime(film.release_date) }}
        </td>
        <td>
          {{ film.director }}
        </td>
        <td>
          {{ film.producer }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import moment from "moment";

export default {
  props: {
    films: {
      type: Object,
      required: true,
    },
  },
  methods: {
    dateTime(value) {
      return moment(value).format("DD MMMM YYYY");
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
