<template>
  <section>
    <ActiveUser :username="user.name" :age="user.age" />
    <UserData />
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Sean",
        age: "28",
      },
    };
  },
};
</script>