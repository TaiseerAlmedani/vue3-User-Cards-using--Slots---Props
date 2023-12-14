<script>
import UserCard from '@/components/UserCard.vue';
export default {
  components: {
    UserCard
  },
  data() {
    return {
      usersFromApi: []
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.usersFromApi = users)
  }
}
</script>
<template>
  <section>
    <div class="row">
      <h1>Our Team</h1>
    </div>
    <div class="row">
      <UserCard :twitter="user.address.street" :linkedin="user.name" :github="user.address.zipcode"
        :envelope="user.address.city" v-for="user in usersFromApi" :key="user.id">
        <template #fullName>
          {{ user.name }}
        </template>
        <template #role>
          {{ user.username }}
        </template>
        <template #brief>
          {{ user.email }}
        </template>
      </UserCard>
    </div>
  </section>
</template>