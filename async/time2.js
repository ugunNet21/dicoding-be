function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
   
      callback(users);
    }, 3000);
  }
   
  function usersCallback(users) {
    console.log(users);
  }
   
  getUsers(usersCallback);