<template>
  <div>
    <h2>My Friends</h2>
    <!-- props named using kebab cse will be converted into camelcase -->
    <div class="card">
      <friend-contact
        v-for="friend in friends"
        :id="friend.id"
        :key="friend.id"
        :name="friend.name"
        :email="friend.email"
        :phone-number="friend.phone"
        :is-fav="friend.isFav"
        @toggleFav="toggleFavEvent"
      ></friend-contact>
    </div>
  </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Surya',
          email: 'surya@gmail.com',
          phone: '0123 456 789',
          isFav: true,
        },
        {
          id: 2,
          name: 'Maddy',
          email: 'maddy@gmail.com',
          phone: '0123 456 789',
          isFav: false,
        },
      ],
    };
  },
  methods: {
    toggleFavEvent(friendId) {
      let f = this.friends.find((friend) => friend.id === friendId);
      f.isFav = !f.isFav;
    },
  },
};
</script>
<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
.card {
  display: flex;
  gap: 5px;
}
</style>
