class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    return 'grrrrrrr';
  }
}

// Ekspor class Tiger agar bisa diimpor di berkas lain
export default Tiger;
