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

  document.getElementById("alert-box").innerText =
   "⚠ Coconut expected to fall at **${location}** ${time}. ${warning}";
}