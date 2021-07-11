<template>
  <div>
    <ActiveUser :username="user.name" :age="user.age" />
    <UserData @change-user="changeUser" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Sean",
        age: 28,
      },
    };
  },
  methods: {
    changeUser(name, age) {
      this.user.name = name;
      this.user.age = +age;
    },
  },
};
</script>