class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    return 'Auuuuuuuuu';
  }
}

// Ekspor class Wolf agar bisa diimpor di berkas lain
export default Wolf;
