<template>
  <div id="main">
    <h2>My Friends</h2>
    <!-- props named using kebab cse will be converted into camelcase -->
    <new-friend @addFriend="addFriendEvent"></new-friend>
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
        @deleteFriend="deleteFriendEvent"
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
    addFriendEvent(name, email, phone) {
      let friend = {
        id: new Date().getTime(),
        name,
        email,
        phone,
        isFav: false,
      };
      this.friends.push(friend);
    },
    deleteFriendEvent(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>
<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card {
  display: flex;
  gap: 5px;
}
input {
  margin: 5px;
}
form {
  background-color: steelblue;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
form input,
form input:active {
  outline: none;
  border: none;
}
form label {
  color: white;
}
</style>
