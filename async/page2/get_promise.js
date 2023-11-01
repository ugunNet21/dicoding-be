// const util = require('util');

// function getProvinces(countryId, callback) {
//   setTimeout(() => {
//     if (countryId === 'id') {
//       callback(null, [
//         { id: 'id-jk', name: 'Jakarta' },
//         { id: 'id-bt', name: 'Banten' },
//         { id: 'id-jr', name: 'Jawa Barat' },
//       ]);
//       return;
//     }

//     callback(new Error('Country not found'), null);
//   }, 1000);
// }

// module.exports = { getProvinces: util.promisify(getProvinces) };

const util = require('util');

function getProvinces(countryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (countryId === 'id') {
        const provinces = [
          { id: 'id-jk', name: 'Jakarta' },
          { id: 'id-bt', name: 'Banten' },
          { id: 'id-jr', name: 'Jawa Barat' },
        ];
        resolve(provinces);
      } else {
        reject(new Error('Country not found'));
      }
    }, 1000);
  });
}

module.exports = { getProvinces: getProvinces };

