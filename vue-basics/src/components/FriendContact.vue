<template>
  <section>
    <p>{{ name }} {{ isFav ? '[Favourite]' : '' }}</p>
    <button @click="toggleDetails">
      {{ dataVisible ? 'Hide' : 'Show' }} Details
    </button>
    <br />
    <button @click="toggleFav">{{ isFav ? 'Remove' : 'Set' }} Favourite</button>

    <ul v-if="dataVisible">
      <li>Email: {{ email }}</li>
      <li>Mobile: {{ phoneNumber }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      required: true,
      type: String,
    },
    isFav: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  //Adding the emits property and adding the custom events will let the developer know the list of custom events emitted from the component
  // emits: ['toggle-fav'],
  // we can also define as follows
  emits: {
    // takes the custom event name as the key
    // as for the custom event, we are passing the id
    'toggle-fav': function (id) {
      if (id) return true;
      else {
        // if the id isn't passed when toggle-fav event is emmited, we will get an error
        console.warn('ID is required');
        return false;
      }
    },
  },
  data() {
    return {
      dataVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.dataVisible = !this.dataVisible;
    },
    toggleFav() {
      this.$emit('toggle-fav', this.id);
    },
  },
};
</script>
<style>
section {
  background-color: steelblue;
  padding: 10px;
  margin: 5px;
  width: fit-content;
  border-radius: 5px;
  height: fit-content;
  text-align: center;
  box-shadow: 2px 2px 1px;
}
p {
  color: white;
  font-size: large;
}
li {
  list-style-type: none;
  color: white;
}
button {
  background-color: aquamarine;
  padding: 5px;
  margin: 2px;
  color: steelblue;
}
</style>
