const locations = [
  "Palayam Bus Stand",
  "Mananchira Square",
  "Kozhikode Railway Station",
  "Pushpa Junction",
  "Mughadar Beach",
  "Kuttichira",
  "Godisharam",
  "Calicut Medical College",
  "Beypore Harbour"
];

const times = [
  "in 5 minutes",
  "at 3:45 PM",
  "soon after tea time",
  "at midnight",
  "during Onam sadya",
  "while you read this",
  "within 10 seconds",
  "when you least expect"
];

const warnings = [
  "Duck immediately!",
  "Umbrella won't help!",
  "Run in zig-zag!",
  "Coconut has GPS lock!",
  "May fall on your slipper!",
  "One already fell. RIP phone."
];

function generateAlert() {
  const location = locations[Math.floor(Math.random() * locations.length)];
  const time = times[Math.floor(Math.random() * times.length)];
  const warning = warnings[Math.floor(Math.random() * warnings.length)];

  document.getElementById("alert-box").innerHTML =
    `⚠ Coconut expected to fall at <strong>${location}</strong> ${time}. ${warning}`;

  const audio = document.getElementById("fallSound");
  if (audio) {
    audio.currentTime = 0; // rewind sound
    audio.play().catch(error => {
      console.warn("Audio playback failed:", error);
    });
  }
}
function playCoconutVideo() {
  const video = document.getElementById("coconutVideo");
  const container = document.getElementById("video-container");

  if (video && container) {
    container.style.display = "block";
    video.currentTime = 0;
    video.play().catch(err => console.warn("Video play failed:", err));

    // Hide video after playback (or setTimeout if looping)
    video.onended = () => {
      container.style.display = "none";
    };
  }
}
playCoconutVideo();
function generateAlert() {
  const location = locations[Math.floor(Math.random() * locations.length)];
  const time = times[Math.floor(Math.random() * times.length)];
  const warning = warnings[Math.floor(Math.random() * warnings.length)];

  document.getElementById("alert-box").innerHTML =
    `⚠ Coconut fell at <strong>${location}</strong> ${time}. ${warning}`;

  const audio = document.getElementById("fallSound");
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(err => console.warn("Audio play failed:", err));
  }

  // Show video
  playCoconutVideo();

  // Optional: trigger falling coconut image too
  triggerCoconutFall();
}
