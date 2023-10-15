<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Birth Year</th>
        <th>Gender</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Created</th>
        <th>Edited</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(person, idx) in people" :key="idx">
        <td>
          {{ person.name }}
        </td>
        <td>
          {{ person.birth_year }}
        </td>
        <td>
          <div class="gender-picture">
            <img
              v-if="person.gender === 'male'"
              src="@/assets/images/male.png"
              alt="male" />
            <img
              v-else-if="person.gender === 'female'"
              src="@/assets/images/female.png"
              alt="female" />
            <img
              v-else="person.gender === 'n/a'"
              src="@/assets/images/notavailable.png"
              alt="not-availabel" />
          </div>
        </td>
        <td>
          {{ person.height }}
        </td>
        <td>
          {{ person.mass }}
        </td>
        <td>
          {{ dateTime(person.created) }}
        </td>
        <td>
          {{ dateTime(person.edited) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import moment from "moment";

export default {
  props: {
    people: {
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
  min-width: 80px;
  padding: 10px 20px;
}

.gender-picture {
  display: flex;
  justify-content: center;
}

.gender-picture img {
  width: 30px;
  height: 30px;
}
</style>
