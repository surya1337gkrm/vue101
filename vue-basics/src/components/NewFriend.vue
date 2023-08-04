<template>
  <form @submit.prevent="submitEvent">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="name" /><br />
    <label for="email">E-Mail</label>
    <input type="email" name="email" id="email" v-model="email" /><br />
    <label for="phone">Phone</label>
    <input type="text" name="phone" id="phone" v-model="phone" />
    <br />
    <button>Add Friend</button>
  </form>
</template>

<script>
export default {
  emits: ['add-friend'],
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    submitEvent() {
      this.$emit('add-friend', this.name, this.email, this.phone);
      this.name = '';
      this.email = '';
      this.phone = '';
    },
  },
};
</script>
