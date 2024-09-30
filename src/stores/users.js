import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUsersStore = defineStore('users-store', () => {
  const users = ref(localStorage.getItem('smotrim-users') ? JSON.parse(localStorage.getItem('smotrim-users')) : []);
  
  const current = computed(() => users.value.find(user => user.isAuthorized));
  
  function login(email) {
    const isset = users.value.find(user => user.email === email);
    const user = {
      email,
      isAuthorized: true
    }

    if (isset) {
      users.value = users.value.map(user => {
        if (email === user.email) {
          user.isAuthorized = true
        }

        return user;
      })
    } else {
      users.value.push(user);
    }

    updateStorage();
  }

  function logout(email) {
    users.value = users.value.map(user => {
      if (email === user.email) {
        user.isAuthorized = false
      }

      return user
    });

    updateStorage();
  }

  function remove(email) {
    users.value = users.value.filter(user => user.email !== email);

    updateStorage();
  }

  function updateStorage() {
    localStorage.setItem('smotrim-users', JSON.stringify(users.value));
  }

  return {
    users,
    current,
    login, logout, remove
  }
})