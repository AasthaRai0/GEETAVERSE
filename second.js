const quotes = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।",
    translation: "You have the right to perform your duty, but not to the fruits of action.",
    meaning: "Focus on your efforts, not on the outcome 🌱",
    bg: "url('https://png.pngtree.com/thumb_back/fh260/background/20240429/pngtree-lord-krishna-play-flute-with-cows-at-sunset-time-image_15721908.jpg')"
  },
  {
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।",
    translation: "Perform your duty with equanimity, abandoning attachment.",
    meaning: "Stay balanced, don’t cling to results ✨",
    bg: "url('https://akm-img-a-in.tosshub.com/sites/dailyo/story/header/201608/lord-krishna-2---cop_082316114117.jpg')"
  },
  {
    sanskrit: "श्रेयान् स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।",
    translation: "Better is one’s own duty, even if imperfect, than another’s duty well performed.",
    meaning: "Be true to your path, not someone else’s 💫",
    bg: "url('https://miro.medium.com/v2/resize:fit:700/0*Dz0C_8WHk1h-DVPL.png')"
  },
  {
    sanskrit: "मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये ।",
    translation: "Among thousands of men, one strives for perfection.",
    meaning: "Rare are those who walk the path of wisdom 🌸",
    bg: "url('https://cdn.wallpapersafari.com/45/56/b9q3Ll.jpg')"
  },
  {
    sanskrit: "ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा ।",
    translation: "The fire of knowledge burns all actions to ashes.",
    meaning: "Knowledge purifies everything 🔥",
    bg: "('https://www.radhakrishnatemple.net/blog/content/images/2025/05/BhagavadGita_quotes1.webp')"
  },
  {
    sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय ।",
    translation: "There is nothing higher than Me, O Arjuna.",
    meaning: "The Divine is the ultimate source ✨",
    bg: "('https://cdn.wallpapersafari.com/79/81/sWOXIu.jpg')"
  },
];

function newQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("sanskrit").innerText = random.sanskrit;
  document.getElementById("translation").innerText = random.translation;
  document.getElementById("meaning").innerText = random.meaning;
  document.body.style.backgroundImage = random.bg;

}

newQuote();
