<template>
  <li>
    <h2>{{ name }} {{ friendisFavorite === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite()">Toggle Favorite</button>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  //props: ["name", "phoneNumber", "email", "isFavorite"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      detailsAreVisible: false,
      friendisFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendisFavorite === "0") {
        this.friendisFavorite = "1";
      } else {
        this.friendisFavorite = "0";
      }
    },
  },
};
</script>

