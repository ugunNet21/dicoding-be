function getUsers(isOffline) {
    // return a Promise object
    return new Promise((resolve, reject) => {
   
      // simulate network delay
      setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
      
        if (isOffline) {
          reject(new Error('cannot retrieve users due offline'));
          return;
        }
   
        resolve(users);
      }, 3000);
    
    });
  }