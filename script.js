const matchesData = [
  {
    date: "12/06/2026",
    group: "A",
    team1: "Mexico",
    code1: "mx",
    team2: "Nam Phi",
    code2: "za",
    time: "02:00",
    venue: "Estadio Banorte, Mexico City",
    score: "2-0",
  },
  {
    date: "12/06/2026",
    group: "A",
    team1: "Hàn Quốc",
    code1: "kr",
    team2: "CH Czech",
    code2: "cz",
    time: "09:00",
    venue: "Estadio Akron, Zapopan",
    score: "2-1",
  },
  {
    date: "13/06/2026",
    group: "B",
    team1: "Canada",
    code1: "ca",
    team2: "Bosnia & Herz.",
    code2: "ba",
    time: "02:00",
    venue: "BMO Field, Toronto",
    score: "1-1",
  },
  {
    date: "13/06/2026",
    group: "C",
    team1: "Mỹ",
    code1: "us",
    team2: "Paraguay",
    code2: "py",
    time: "08:00",
    venue: "SoFi Stadium, Los Angeles",
    score: "4-1",
  },
  {
    date: "14/06/2026",
    group: "B",
    team1: "Qatar",
    code1: "qa",
    team2: "Thụy Sĩ",
    code2: "ch",
    time: "02:00",
    venue: "Địa điểm chưa xác định",
    score: "1-1",
  },
  {
    date: "14/06/2026",
    group: "D",
    team1: "Brazil",
    code1: "br",
    team2: "Morocco",
    code2: "ma",
    time: "05:00",
    venue: "MetLife Stadium, New York",
    score: "1-1",
  },
  {
    date: "14/06/2026",
    group: "D",
    team1: "Haiti",
    code1: "ht",
    team2: "Scotland",
    code2: "gb-sct",
    time: "08:00",
    venue: "Gillette Stadium",
    score: "0-1",
  },
  {
    date: "14/06/2026",
    group: "C",
    team1: "Australia",
    code1: "au",
    team2: "Thổ Nhĩ Kỳ",
    code2: "tr",
    time: "11:00",
    venue: "BC Place, Vancouver",
    score: "2-0",
  },
  {
    date: "15/06/2026",
    group: "E",
    team1: "Đức",
    code1: "de",
    team2: "Curaçao",
    code2: "cw",
    time: "00:00",
    venue: "NRG Stadium, Houston",
    score: "7-1",
  },
  {
    date: "15/06/2026",
    group: "F",
    team1: "Hà Lan",
    code1: "nl",
    team2: "Nhật Bản",
    code2: "jp",
    time: "03:00",
    venue: "Địa điểm chưa xác định",
    score: "2-2",
  },
  {
    date: "15/06/2026",
    group: "E",
    team1: "Bờ Biển Ngà",
    code1: "ci",
    team2: "Ecuador",
    code2: "ec",
    time: "06:00",
    venue: "Lincoln Financial Field, Philadelphia",
    score: "1-0",
  },
  {
    date: "15/06/2026",
    group: "F",
    team1: "Thụy Điển",
    code1: "se",
    team2: "Tunisia",
    code2: "tn",
    time: "09:00",
    venue: "Estadio BBVA, Monterrey",
    score: "5-1",
  },
  {
    date: "15/06/2026",
    group: "G",
    team1: "Tây Ban Nha",
    code1: "es",
    team2: "Cape Verde",
    code2: "cv",
    time: "23:00",
    venue: "Mercedes-Benz Stadium, Atlanta",
    score: "0-0",
  },
  {
    date: "16/06/2026",
    group: "H",
    team1: "Bỉ",
    code1: "be",
    team2: "Ai Cập",
    code2: "eg",
    time: "02:00",
    venue: "Lumen Field, Seattle",
    score: "1-1",
  },
  {
    date: "16/06/2026",
    group: "G",
    team1: "Saudi Arabia",
    code1: "sa",
    team2: "Uruguay",
    code2: "uy",
    time: "05:00",
    venue: "Hard Rock Stadium, Miami",
    score: "1-1",
  },
  {
    date: "16/06/2026",
    group: "H",
    team1: "Iran",
    code1: "ir",
    team2: "New Zealand",
    code2: "nz",
    time: "08:00",
    venue: "SoFi Stadium, Los Angeles",
    score: "2-2",
  },
  {
    date: "17/06/2026",
    group: "I",
    team1: "Pháp",
    code1: "fr",
    team2: "Senegal",
    code2: "sn",
    time: "02:00",
    venue: "MetLife Stadium",
    score: "3-1",
  },
  {
    date: "17/06/2026",
    group: "I",
    team1: "Iraq",
    code1: "iq",
    team2: "Na Uy",
    code2: "no",
    time: "05:00",
    venue: "Gillette Stadium",
    score: "1-4",
  },
  {
    date: "17/06/2026",
    group: "J",
    team1: "Argentina",
    code1: "ar",
    team2: "Algeria",
    code2: "dz",
    time: "08:00",
    venue: "Arrowhead Stadium, Kansas City",
    score: "3-0",
  },
  {
    date: "17/06/2026",
    group: "J",
    team1: "Áo",
    code1: "at",
    team2: "Jordan",
    code2: "jo",
    time: "11:00",
    venue: "Địa điểm chưa xác định",
    score: "3-1",
  },
  {
    date: "18/06/2026",
    group: "K",
    team1: "Bồ Đào Nha",
    code1: "pt",
    team2: "CHDC Congo",
    code2: "cd",
    time: "00:00",
    venue: "NRG Stadium",
    score: "1-1",
  },
  {
    date: "18/06/2026",
    group: "L",
    team1: "Anh",
    code1: "gb-eng",
    team2: "Croatia",
    code2: "hr",
    time: "03:00",
    venue: "Địa điểm chưa xác định",
    score: "2-1",
  },
  {
    date: "18/06/2026",
    group: "L",
    team1: "Ghana",
    code1: "gh",
    team2: "Panama",
    code2: "pa",
    time: "06:00",
    venue: "BMO Field",
    score: "1-0",
  },
  {
    date: "18/06/2026",
    group: "K",
    team1: "Uzbekistan",
    code1: "uz",
    team2: "Colombia",
    code2: "co",
    time: "09:00",
    venue: "Estadio Azteca, Mexico City",
    score: "1-3",
  },
  {
    date: "18/06/2026",
    group: "A",
    team1: "CH Czech",
    code1: "cz",
    team2: "Nam Phi",
    code2: "za",
    time: "23:00",
    venue: "Mercedes-Benz Stadium",
    score: "1-1",
  },
  {
    date: "19/06/2026",
    group: "B",
    team1: "Thụy Sĩ",
    code1: "ch",
    team2: "Bosnia & Herz.",
    code2: "ba",
    time: "02:00",
    venue: "SoFi Stadium",
    score: "4-1",
  },
  {
    date: "19/06/2026",
    group: "B",
    team1: "Canada",
    code1: "ca",
    team2: "Qatar",
    code2: "qa",
    time: "05:00",
    venue: "BC Place",
    score: "6-0",
  },
  {
    date: "19/06/2026",
    group: "A",
    team1: "Mexico",
    code1: "mx",
    team2: "Hàn Quốc",
    code2: "kr",
    time: "08:00",
    venue: "Estadio Akron, Zapopan",
    score: "1-0",
  },
  {
    date: "20/06/2026",
    group: "C",
    team1: "Mỹ",
    code1: "us",
    team2: "Australia",
    code2: "au",
    time: "02:00",
    venue: "Lumen Field",
    score: "2-0",
  },
  {
    date: "20/06/2026",
    group: "D",
    team1: "Scotland",
    code1: "gb-sct",
    team2: "Morocco",
    code2: "ma",
    time: "05:00",
    venue: "Gillette Stadium",
    score: "0-1",
  },
  {
    date: "20/06/2026",
    group: "D",
    team1: "Brazil",
    code1: "br",
    team2: "Haiti",
    code2: "ht",
    time: "07:30",
    venue: "Lincoln Financial Field",
    score: "3-0",
  },
  {
    date: "20/06/2026",
    group: "C",
    team1: "Thổ Nhĩ Kỳ",
    code1: "tr",
    team2: "Paraguay",
    code2: "py",
    time: "10:00",
    venue: "Địa điểm chưa xác định",
    score: "0-1",
  },
  {
    date: "21/06/2026",
    group: "F",
    team1: "Hà Lan",
    code1: "nl",
    team2: "Thụy Điển",
    code2: "se",
    time: "00:00",
    venue: "NRG Stadium",
    score: "5-1",
  },
  {
    date: "21/06/2026",
    group: "E",
    team1: "Đức",
    code1: "de",
    team2: "Bờ Biển Ngà",
    code2: "ci",
    time: "03:00",
    venue: "BMO Field",
    score: "2-1",
  },
  {
    date: "21/06/2026",
    group: "E",
    team1: "Ecuador",
    code1: "ec",
    team2: "Curaçao",
    code2: "cw",
    time: "07:00",
    venue: "Arrowhead Stadium",
    score: "0-0",
  },
  {
    date: "21/06/2026",
    group: "F",
    team1: "Tunisia",
    code1: "tn",
    team2: "Nhật Bản",
    code2: "jp",
    time: "11:00",
    venue: "Estadio BBVA, Monterrey",
    score: "0-4",
  },
  {
    date: "21/06/2026",
    group: "G",
    team1: "Tây Ban Nha",
    code1: "es",
    team2: "Saudi Arabia",
    code2: "sa",
    time: "23:00",
    venue: "Mercedes-Benz Stadium",
    score: "4-0",
  },
  {
    date: "22/06/2026",
    group: "H",
    team1: "Bỉ",
    code1: "be",
    team2: "Iran",
    code2: "ir",
    time: "02:00",
    venue: "SoFi Stadium",
    score: "0-0",
  },
  {
    date: "22/06/2026",
    group: "G",
    team1: "Uruguay",
    code1: "uy",
    team2: "Cape Verde",
    code2: "cv",
    time: "05:00",
    venue: "Hard Rock Stadium",
    score: "2-2",
  },
  {
    date: "22/06/2026",
    group: "H",
    team1: "New Zealand",
    code1: "nz",
    team2: "Ai Cập",
    code2: "eg",
    time: "08:00",
    venue: "BC Place",
    score: "1-3",
  },
  {
    date: "23/06/2026",
    group: "J",
    team1: "Argentina",
    code1: "ar",
    team2: "Áo",
    code2: "at",
    time: "00:00",
    venue: "Địa điểm chưa xác định",
    score: "2-0",
  },
  {
    date: "23/06/2026",
    group: "I",
    team1: "Pháp",
    code1: "fr",
    team2: "Iraq",
    code2: "iq",
    time: "04:00",
    venue: "Lincoln Financial Field",
    score: "3-0",
  },
  {
    date: "23/06/2026",
    group: "I",
    team1: "Na Uy",
    code1: "no",
    team2: "Senegal",
    code2: "sn",
    time: "07:00",
    venue: "MetLife Stadium",
    score: "3-2",
  },
  {
    date: "23/06/2026",
    group: "J",
    team1: "Jordan",
    code1: "jo",
    team2: "Algeria",
    code2: "dz",
    time: "10:00",
    venue: "Địa điểm chưa xác định",
    score: "1-2",
  },
  {
    date: "24/06/2026",
    group: "K",
    team1: "Bồ Đào Nha",
    code1: "pt",
    team2: "Uzbekistan",
    code2: "uz",
    time: "00:00",
    venue: "NRG Stadium",
    score: "5-0",
  },
  {
    date: "24/06/2026",
    group: "L",
    team1: "Anh",
    code1: "gb-eng",
    team2: "Ghana",
    code2: "gh",
    time: "03:00",
    venue: "Gillette Stadium",
    score: "0-0",
  },
  {
    date: "24/06/2026",
    group: "L",
    team1: "Panama",
    code1: "pa",
    team2: "Croatia",
    code2: "hr",
    time: "06:00",
    venue: "BMO Field",
    score: "0-1",
  },
  {
    date: "24/06/2026",
    group: "K",
    team1: "Colombia",
    code1: "co",
    team2: "CHDC Congo",
    code2: "cd",
    time: "09:00",
    venue: "Estadio Akron, Zapopan",
    score: "1-0",
  },
  {
    date: "25/06/2026",
    group: "B",
    team1: "Bosnia & Herz.",
    code1: "ba",
    team2: "Qatar",
    code2: "qa",
    time: "02:00",
    venue: "Lumen Field",
    score: "3-1",
  },
  {
    date: "25/06/2026",
    group: "B",
    team1: "Thụy Sĩ",
    code1: "ch",
    team2: "Canada",
    code2: "ca",
    time: "02:00",
    venue: "BC Place",
    score: "2-1",
  },
  {
    date: "25/06/2026",
    group: "D",
    team1: "Morocco",
    code1: "ma",
    team2: "Haiti",
    code2: "ht",
    time: "05:00",
    venue: "Mercedes-Benz Stadium",
    score: "4-2",
  },
  {
    date: "25/06/2026",
    group: "D",
    team1: "Scotland",
    code1: "gb-sct",
    team2: "Brazil",
    code2: "br",
    time: "05:00",
    venue: "Hard Rock Stadium",
    score: "0-3",
  },
  {
    date: "25/06/2026",
    group: "A",
    team1: "CH Czech",
    code1: "cz",
    team2: "Mexico",
    code2: "mx",
    time: "08:00",
    venue: "Estadio Azteca, Mexico City",
    score: "0-3",
  },
  {
    date: "25/06/2026",
    group: "A",
    team1: "Nam Phi",
    code1: "za",
    team2: "Hàn Quốc",
    code2: "kr",
    time: "08:00",
    venue: "Estadio BBVA, Monterrey",
    score: "1-0",
  },
  {
    date: "26/06/2026",
    group: "E",
    team1: "Curaçao",
    code1: "cw",
    team2: "Bờ Biển Ngà",
    code2: "ci",
    time: "03:00",
    venue: "Lincoln Financial Field",
  },
  {
    date: "26/06/2026",
    group: "E",
    team1: "Ecuador",
    code1: "ec",
    team2: "Đức",
    code2: "de",
    time: "03:00",
    venue: "MetLife Stadium",
  },
  {
    date: "26/06/2026",
    group: "F",
    team1: "Nhật Bản",
    code1: "jp",
    team2: "Thụy Điển",
    code2: "se",
    time: "06:00",
    venue: "Địa điểm chưa xác định",
  },
  {
    date: "26/06/2026",
    group: "F",
    team1: "Tunisia",
    code1: "tn",
    team2: "Hà Lan",
    code2: "nl",
    time: "06:00",
    venue: "Arrowhead Stadium",
  },
  {
    date: "26/06/2026",
    group: "C",
    team1: "Paraguay",
    code1: "py",
    team2: "Australia",
    code2: "au",
    time: "09:00",
    venue: "Địa điểm chưa xác định",
  },
  {
    date: "26/06/2026",
    group: "C",
    team1: "Thổ Nhĩ Kỳ",
    code1: "tr",
    team2: "Mỹ",
    code2: "us",
    time: "09:00",
    venue: "SoFi Stadium",
  },
  {
    date: "27/06/2026",
    group: "I",
    team1: "Na Uy",
    code1: "no",
    team2: "Pháp",
    code2: "fr",
    time: "02:00",
    venue: "Gillette Stadium",
  },
  {
    date: "27/06/2026",
    group: "I",
    team1: "Senegal",
    code1: "sn",
    team2: "Iraq",
    code2: "iq",
    time: "02:00",
    venue: "BMO Field",
  },
  {
    date: "27/06/2026",
    group: "G",
    team1: "Cape Verde",
    code1: "cv",
    team2: "Saudi Arabia",
    code2: "sa",
    time: "07:00",
    venue: "NRG Stadium",
  },
  {
    date: "27/06/2026",
    group: "G",
    team1: "Uruguay",
    code1: "uy",
    team2: "Tây Ban Nha",
    code2: "es",
    time: "07:00",
    venue: "Estadio Akron, Zapopan",
  },
  {
    date: "27/06/2026",
    group: "H",
    team1: "Ai Cập",
    code1: "eg",
    team2: "Iran",
    code2: "ir",
    time: "10:00",
    venue: "Lumen Field",
  },
  {
    date: "27/06/2026",
    group: "H",
    team1: "New Zealand",
    code1: "nz",
    team2: "Bỉ",
    code2: "be",
    time: "10:00",
    venue: "BC Place",
  },
  {
    date: "28/06/2026",
    group: "L",
    team1: "Croatia",
    code1: "hr",
    team2: "Ghana",
    code2: "gh",
    time: "04:00",
    venue: "Lincoln Financial Field",
  },
  {
    date: "28/06/2026",
    group: "L",
    team1: "Panama",
    code1: "pa",
    team2: "Anh",
    code2: "gb-eng",
    time: "04:00",
    venue: "MetLife Stadium",
  },
  {
    date: "28/06/2026",
    group: "K",
    team1: "Colombia",
    code1: "co",
    team2: "Bồ Đào Nha",
    code2: "pt",
    time: "06:30",
    venue: "Hard Rock Stadium",
  },
  {
    date: "28/06/2026",
    group: "K",
    team1: "CHDC Congo",
    code1: "cd",
    team2: "Uzbekistan",
    code2: "uz",
    time: "06:30",
    venue: "Mercedes-Benz Stadium",
  },
  {
    date: "28/06/2026",
    group: "J",
    team1: "Algeria",
    code1: "dz",
    team2: "Áo",
    code2: "at",
    time: "09:00",
    venue: "Arrowhead Stadium",
  },
  {
    date: "28/06/2026",
    group: "J",
    team1: "Jordan",
    code1: "jo",
    team2: "Argentina",
    code2: "ar",
    time: "09:00",
    venue: "Địa điểm chưa xác định",
  },
];

function getMatchKey(match) {
  return `${match.date}|${match.time}|${match.team1}|${match.team2}`;
}

function parseMatchDate(match) {
  const [day, month, year] = match.date.split("/").map(Number);
  const [hour = 0, minute = 0] = match.time.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute);
}

function getMatchStatus(match) {
  const now = new Date();
  const start = parseMatchDate(match);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  if (now >= start && now < end) return "live";
  if (now >= end) return "finished";
  return "upcoming";
}

function getStatusLabel(status) {
  if (status === "live") return "TRỰC TIẾP";
  if (status === "finished") return "ĐÃ KẾT THÚC";
  return "SẮP DIỄN RA";
}

matchesData.forEach((m) => {
  m.id = getMatchKey(m);
  if (!("score" in m)) m.score = null;
});

const matchListContainer = document.getElementById("match-list");
const searchInput = document.getElementById("search-input");
const groupSelect = document.getElementById("group-select");
const sortSelect = document.getElementById("sort-select");
const dateButtons = document.querySelectorAll(".date-btn");
const tabButtons = document.querySelectorAll(".tab-btn");
const modal = document.getElementById("match-modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close-modal");

let selectedDateFilter = "all";
let currentTab = "all";
let favorites = JSON.parse(localStorage.getItem("wc2026_favorites")) || [];
if (favorites.length && typeof favorites[0] === "object") {
  favorites = favorites.map((item) => {
    if (typeof item === "string") return item;
    return getMatchKey(item);
  });
}

function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

function getFormattedDate(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

function isFavorite(match) {
  return favorites.includes(match.id);
}

function toggleFavorite(match) {
  const key = match.id;
  if (favorites.includes(key)) {
    favorites = favorites.filter((f) => f !== key);
  } else {
    favorites.push(key);
  }
  localStorage.setItem("wc2026_favorites", JSON.stringify(favorites));
  filterMatches();
}

function displayMatches(matches) {
  matchListContainer.innerHTML = "";
  if (matches.length === 0) {
    matchListContainer.innerHTML =
      '<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px;">Không tìm thấy trận đấu nào.</p>';
    return;
  }

  matches.forEach((match) => {
    const status = getMatchStatus(match);
    const card = document.createElement("div");
    card.classList.add("match-card", status);

    const scoreHTML = match.score
      ? `<div class="match-score">${match.score}</div>`
      : `<span class="match-score placeholder">${status === "live" ? "Đang cập nhật" : status === "finished" ? "Kết quả chờ" : "VS"}</span>`;

    card.innerHTML = `
      <div class="match-header">
        <span>🗓️ ${match.date} • ⏰ <b>${match.time}</b></span>
        <span class="group-badge">Bảng ${match.group}</span>
      </div>
      <div class="match-teams">
        <div class="team team1"><span class="fi fi-${match.code1}"></span> <span>${match.team1}</span></div>
        <div class="match-vs">${scoreHTML}</div>
        <div class="team team2"><span>${match.team2}</span> <span class="fi fi-${match.code2}"></span></div>
      </div>
      <div class="match-footer">
        <div class="match-venue">📍 ${match.venue}</div>
        <div class="match-actions">
          <span class="status-badge ${status}">${getStatusLabel(status)}</span>
          <button class="fav-btn ${isFavorite(match) ? "active" : ""}" title="Yêu thích">★</button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("fav-btn")) {
        e.stopPropagation();
        toggleFavorite(match);
      } else {
        showMatchDetail(match);
      }
    });

    matchListContainer.appendChild(card);
  });
}

function filterMatches() {
  const searchText = removeVietnameseTones(
    searchInput.value.toLowerCase().trim(),
  );
  const selectedGroup = groupSelect.value;
  const sortBy = sortSelect.value;

  const todayStr = getFormattedDate(0);
  const tomorrowStr = getFormattedDate(1);

  let filtered = matchesData.filter((match) => {
    const status = getMatchStatus(match);
    const team1Clean = removeVietnameseTones(match.team1.toLowerCase());
    const team2Clean = removeVietnameseTones(match.team2.toLowerCase());
    const matchesSearch =
      !searchText ||
      team1Clean.includes(searchText) ||
      team2Clean.includes(searchText);

    const matchesGroup =
      selectedGroup === "all" || match.group === selectedGroup;

    let matchesDate = true;
    if (selectedDateFilter === "today") matchesDate = match.date === todayStr;
    if (selectedDateFilter === "tomorrow")
      matchesDate = match.date === tomorrowStr;

    let matchesTab = true;
    if (currentTab === "upcoming") matchesTab = status !== "finished";
    if (currentTab === "finished") matchesTab = status === "finished";
    if (currentTab === "favorites") matchesTab = isFavorite(match);

    return matchesSearch && matchesGroup && matchesDate && matchesTab;
  });

  if (sortBy === "group")
    filtered.sort((a, b) => a.group.localeCompare(b.group));
  else if (sortBy === "team")
    filtered.sort((a, b) => a.team1.localeCompare(b.team1));
  else filtered.sort((a, b) => parseMatchDate(a) - parseMatchDate(b));

  displayMatches(filtered);
}

function showMatchDetail(match) {
  const status = getMatchStatus(match);
  const scoreView = match.score
    ? `<div class="big-score">${match.score}</div>`
    : `<div class="big-score">${getStatusLabel(status)}</div>`;

  modalBody.innerHTML = `
    <h2>${match.team1} vs ${match.team2}</h2>
    <p class="modal-info"><strong>Bảng ${match.group}</strong> — ${match.date} ${match.time}</p>
    <p class="modal-info"><strong>Sân:</strong> ${match.venue}</p>
    ${scoreView}
    <div class="modal-actions">
      <button onclick="alert('Đã thêm vào Google Calendar (demo)')">📅 Thêm vào lịch</button>
      <button onclick="toggleFavoriteFromModal('${match.id}')">
        ${isFavorite(match) ? " Bỏ yêu thích" : "☆ Thêm vào yêu thích"}
      </button>
    </div>
  `;
  modal.style.display = "flex";
}

function toggleFavoriteFromModal(id) {
  const match = matchesData.find((m) => m.id === id);
  if (match) toggleFavorite(match);
  modal.style.display = "none";
}

dateButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    dateButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDateFilter = btn.dataset.date;
    filterMatches();
  }),
);

tabButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    filterMatches();
  }),
);

searchInput.addEventListener("input", filterMatches);
groupSelect.addEventListener("change", filterMatches);
sortSelect.addEventListener("change", filterMatches);

closeModal.addEventListener("click", () => (modal.style.display = "none"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
setInterval(filterMatches, 60_000);

filterMatches();
