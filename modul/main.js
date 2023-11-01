// Impor class Tiger dan Wolf dari berkas terpisah
import Tiger from './Tiger.js';
import Wolf from './Wolf.js';

// Fungsi untuk membandingkan kekuatan antara harimau dan serigala
const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
};

// Buat instance dari Tiger dan Wolf
const myTiger = new Tiger();
const myWolf = new Wolf();

// Panggil fungsi fight untuk membandingkan dan mendapatkan hasil pertarungan
const result = fight(myTiger, myWolf);

// Ekspor fungsi fight, myTiger, myWolf, dan result agar bisa diimpor di berkas lain
export { fight, myTiger, myWolf, result };
