const envelope = document.getElementById("envelope");
const song = document.getElementById("song");

function toggleEnvelope() {
  const isOpen = envelope.classList.toggle("open");
  envelope.setAttribute("aria-expanded", String(isOpen));

  // Banyak browser block autoplay, jadi coba play saat user interaksi pertama
  if (song && song.paused) {
    song.play().catch(() => {
      // kalau masih diblok, user tinggal pencet tombol play di audio
    });
  }
}

envelope.addEventListener("click", toggleEnvelope);

// Biar bisa dibuka pakai keyboard (Enter/Space)
envelope.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleEnvelope();
  }
});