<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" v-model="enteredAge" />
    </div>
    <div>
      <button>Click</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["change-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("change-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>