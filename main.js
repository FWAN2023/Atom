const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

function updateTime() {
  const today = new Date();
  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedTime = today.toLocaleTimeString('fr-FR', options);
  timeElement.innerHTML = formattedTime;
 }

setInterval(updateTime, 1000);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const today = new Date();

const formattedDate = today.toLocaleDateString('fr-FR', options).toUpperCase();
dateElement.innerHTML = formattedDate;

// Code JS pour calculer et afficher les temps de prière
const p = new PrayTimes();
p.setMethod('Jafari');
const latitude = 49.182863;
const longitude = -0.370679;
const times = p.getTimes(today, [latitude, longitude]);

const prayerTimesElement = document.getElementById('prayerTimes');
const prayerTimesString = `
  <div class="prayer-time">Imsak : <span>${times.imsak}</span></div>
  <div class="prayer-time">Fajr : <span>${times.fajr}</span></div>
  <div class="prayer-time">Dhuhr : <span>${times.dhuhr}</span></div>
  <div class="prayer-time">Asr : <span>${times.asr}</span></div>
  <div class="prayer-time">Maghrib : <span>${times.maghrib}</span></div>
  <div class="prayer-time">Isha : <span>${times.isha}</span></div>
`;

prayerTimesElement.innerHTML = prayerTimesString;