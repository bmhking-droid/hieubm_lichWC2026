const originalRounds = [
  {
    id: "round32",
    name: "VÒNG 1/16",
    matches: [
      // ================= NHÁNH TRÁI (BÊN TRÊN) =================
      {
        id: 73,
        date: "30/06",
        time: "03:30",
        team1: "Đức",
        team2: "Paraguay",
        venue: "Gillette Stadium, Boston",
        status: "scheduled",
      },
      {
        id: 74,
        date: "01/07",
        time: "04:00",
        team1: "Pháp",
        team2: "Thụy Điển",
        venue: "MetLife Stadium, New York",
        status: "scheduled",
      },
      {
        id: 75,
        date: "29/06",
        time: "02:00",
        team1: "Nam Phi",
        team2: "Canada",
        venue: "SoFi Stadium, Los Angeles",
        status: "scheduled",
      },
      {
        id: 76,
        date: "30/06",
        time: "08:00",
        team1: "Hà Lan",
        team2: "Ma Rốc",
        venue: "BBVA Stadium, Monterrey",
        status: "scheduled",
      },
      // ================= NHÁNH TRÁI (BÊN DƯỚI) =================
      {
        id: 77,
        date: "03/07",
        time: "06:00",
        team1: "Bồ Đào Nha",
        team2: "Croatia",
        venue: "BMO Field, Toronto",
        status: "scheduled",
      },
      {
        id: 78,
        date: "03/07",
        time: "02:00",
        team1: "Tây Ban Nha",
        team2: "Áo",
        venue: "SoFi Stadium, Los Angeles",
        status: "scheduled",
      },
      {
        id: 79,
        date: "02/07",
        time: "07:00",
        team1: "Mỹ",
        team2: "Bosnia và Herzegovina",
        venue: "Levi's Stadium, San Francisco",
        status: "scheduled",
      },
      {
        id: 80,
        date: "02/07",
        time: "03:00",
        team1: "Bỉ",
        team2: "Senegal",
        venue: "Lumen Field, Seattle",
        status: "scheduled",
      },
      // ================= NHÁNH PHẢI (BÊN TRÊN) =================
      {
        id: 81,
        date: "30/06",
        time: "00:00",
        team1: "Brazil",
        team2: "Nhật Bản",
        venue: "NRG Stadium, Houston",
        status: "scheduled",
      },
      {
        id: 82,
        date: "01/07",
        time: "00:00",
        team1: "Bờ Biển Ngà",
        team2: "Na Uy",
        venue: "AT&T Stadium, Dallas",
        status: "scheduled",
      },
      {
        id: 83,
        date: "01/07",
        time: "08:00",
        team1: "Mexico",
        team2: "Ecuador",
        venue: "Azteca Stadium, Mexico City",
        status: "scheduled",
      },
      {
        id: 84,
        date: "01/07",
        time: "23:00",
        team1: "Anh",
        team2: "CHDC Congo",
        venue: "Mercedes-Benz Stadium, Atlanta",
        status: "scheduled",
      },
      // ================= NHÁNH PHẢI (BÊN DƯỚI) =================
      {
        id: 85,
        date: "04/07",
        time: "05:00",
        team1: "Argentina",
        team2: "Cabo Verde",
        venue: "Hard Rock Stadium, Miami",
        status: "scheduled",
      },
      {
        id: 86,
        date: "04/07",
        time: "01:00",
        team1: "Úc",
        team2: "Ai Cập",
        venue: "AT&T Stadium, Dallas",
        status: "scheduled",
      },
      {
        id: 87,
        date: "03/07",
        time: "10:00",
        team1: "Thụy Sĩ",
        team2: "Algeria",
        venue: "BC Place, Vancouver",
        status: "scheduled",
      },
      {
        id: 88,
        date: "04/07",
        time: "08:30",
        team1: "Colombia",
        team2: "Ghana",
        venue: "Arrowhead Stadium, Kansas City",
        status: "scheduled",
      },
    ],
  },
  {
    id: "round16",
    name: "VÒNG 1/8",
    matches: [
      {
        id: 89,
        date: "05/07",
        time: "04:00", // Cập nhật: Thắng 73 vs Thắng 74 (Paraguay – Pháp)
        team1: "",
        team2: "",
        venue: "NRG Stadium, Houston",
        status: "scheduled",
      },
      {
        id: 90,
        date: "05/07",
        time: "00:00", // Cập nhật: Thắng 75 vs Thắng 76 (Canada – Morocco)
        team1: "",
        team2: "",
        venue: "Lincoln Financial Field, Philadelphia",
        status: "scheduled",
      },
      {
        id: 91,
        date: "07/07",
        time: "02:00", // Cập nhật: Thắng 77 vs Thắng 78 (Bồ Đào Nha – Tây Ban Nha)
        team1: "",
        team2: "",
        venue: "MetLife Stadium, New York",
        status: "scheduled",
      },
      {
        id: 92,
        date: "07/07",
        time: "07:00", // Cập nhật: Thắng 79 vs Thắng 80 (Mỹ - Bỉ)
        team1: "",
        team2: "",
        venue: "Azteca Stadium, Mexico City",
        status: "scheduled",
      },
      {
        id: 93,
        date: "06/07",
        time: "03:00", // Cập nhật: Thắng 81 vs Thắng 82 (Brazil – Na Uy)
        team1: "",
        team2: "",
        venue: "AT&T Stadium, Dallas",
        status: "scheduled",
      },
      {
        id: 94,
        date: "06/07",
        time: "07:00", // Cập nhật: Thắng 83 vs Thắng 84 (Mexico – Anh)
        team1: "",
        team2: "",
        venue: "Lumen Field, Seattle",
        status: "scheduled",
      },
      {
        id: 95,
        date: "07/07",
        time: "23:00", // Cập nhật: Thắng 85 vs Thắng 86 (Argentina – Ai Cập)
        team1: "",
        team2: "",
        venue: "Mercedes-Benz Stadium, Atlanta",
        status: "scheduled",
      },
      {
        id: 96,
        date: "08/07",
        time: "03:00", // Cập nhật: Thắng 87 vs Thắng 88 (Thụy Sĩ – Colombia)
        team1: "",
        team2: "",
        venue: "BC Place, Vancouver",
        status: "scheduled",
      },
    ],
  },
  {
    id: "quarter",
    name: "TỨ KẾT",
    matches: [
      {
        id: 97,
        date: "10/07",
        time: "03:00",
        team1: "",
        team2: "",
        venue: "Gillette Stadium, Boston",
        status: "scheduled",
      },
      {
        id: 99,
        date: "11/07",
        time: "02:00",
        team1: "",
        team2: "",
        venue: "SoFi Stadium, Los Angeles",
        status: "scheduled",
      },
      {
        id: 98,
        date: "12/07",
        time: "04:00",
        team1: "",
        team2: "",
        venue: "Hard Rock Stadium, Miami",
        status: "scheduled",
      },
      {
        id: 100,
        date: "12/07",
        time: "08:00",
        team1: "",
        team2: "",
        venue: "Arrowhead Stadium, Kansas City",
        status: "scheduled",
      },
    ],
  },
  {
    id: "semi",
    name: "BÁN KẾT",
    matches: [
      {
        id: 101,
        date: "15/07",
        time: "02:00",
        team1: "",
        team2: "",
        venue: "AT&T Stadium, Dallas",
        status: "scheduled",
      },
      {
        id: 102,
        date: "16/07",
        time: "02:00",
        team1: "",
        team2: "",
        venue: "Mercedes-Benz Stadium, Atlanta",
        status: "scheduled",
      },
    ],
  },
  {
    id: "third",
    name: "TRANH HẠNG BA",
    matches: [
      {
        id: 103,
        date: "19/07",
        time: "04:00",
        team1: "",
        team2: "",
        venue: "Hard Rock Stadium, Miami",
        status: "scheduled",
      },
    ],
  },
  {
    id: "final",
    name: "CHUNG KẾT",
    matches: [
      {
        id: 104,
        date: "20/07",
        time: "02:00",
        team1: "",
        team2: "",
        venue: "MetLife Stadium, New York",
        status: "scheduled",
      },
    ],
  },
];

const nextMatchMap = {
  73: { nextId: 89, slot: "team1" },
  74: { nextId: 89, slot: "team2" },
  75: { nextId: 90, slot: "team1" },
  76: { nextId: 90, slot: "team2" },
  77: { nextId: 91, slot: "team1" },
  78: { nextId: 91, slot: "team2" },
  79: { nextId: 92, slot: "team1" },
  80: { nextId: 92, slot: "team2" },
  81: { nextId: 93, slot: "team1" },
  82: { nextId: 93, slot: "team2" },
  83: { nextId: 94, slot: "team1" },
  84: { nextId: 94, slot: "team2" },
  85: { nextId: 95, slot: "team1" },
  86: { nextId: 95, slot: "team2" },
  87: { nextId: 96, slot: "team1" },
  88: { nextId: 96, slot: "team2" },
  89: { nextId: 97, slot: "team1" },
  90: { nextId: 97, slot: "team2" },
  93: { nextId: 98, slot: "team1" },
  94: { nextId: 98, slot: "team2" },
  91: { nextId: 99, slot: "team1" },
  92: { nextId: 99, slot: "team2" },
  95: { nextId: 100, slot: "team1" },
  96: { nextId: 100, slot: "team2" },
  97: { nextId: 101, slot: "team1" },
  98: { nextId: 102, slot: "team2" },
  99: { nextId: 101, slot: "team1" },
  100: { nextId: 102, slot: "team2" },
};

const flagMap = {
  "Nam Phi": "za",
  Canada: "ca",
  Brazil: "br",
  "Nhật Bản": "jp",
  Đức: "de",
  Paraguay: "py",
  "Hà Lan": "nl",
  "Ma Rốc": "ma",
  "Bờ Biển Ngà": "ci",
  "Na Uy": "no",
  Pháp: "fr",
  "Thụy Điển": "se",
  Mexico: "mx",
  Ecuador: "ec",
  Anh: "gb",
  "CHDC Congo": "cd",
  Bỉ: "be",
  Senegal: "sn",
  Mỹ: "us",
  "Bosnia và Herzegovina": "ba",
  "Tây Ban Nha": "es",
  Áo: "at",
  "Bồ Đào Nha": "pt",
  Croatia: "hr",
  "Thụy Sĩ": "ch",
  Algeria: "dz",
  Úc: "au",
  "Ai Cập": "eg",
  Argentina: "ar",
  "Cabo Verde": "cv",
  Colombia: "co",
  Ghana: "gh",
};

let favorites = JSON.parse(localStorage.getItem("wcFavorites")) || [];
let matchResults = {};
let currentTab = "round32";
let currentModalMatch = null;
let isAdmin = false;

// Hàm tiện ích: Chuyển đổi chuỗi ngày "DD/MM" và giờ "HH:MM" thành một mốc thời gian để so sánh
function parseMatchDateTime(dateStr, timeStr) {
  const [day, month] = dateStr.split("/").map(Number);
  const [hours, minutes] = timeStr.split(":").map(Number);
  // Mặc định năm là 2026 dựa trên giải đấu World Cup 2026
  return new Date(2026, month - 1, day, hours, minutes).getTime();
}

function checkAdminPrivilege() {
  const urlParams = new URLSearchParams(window.location.search);
  isAdmin = urlParams.get("role") === "admin";

  const badge = document.getElementById("roleBadge");
  if (badge) {
    if (isAdmin) {
      badge.textContent = "ADMIN";
      badge.style.background = "#fee2e2";
      badge.style.color = "#dc2626";
    } else {
      badge.textContent = "USER";
      badge.style.background = "#f1f5f9";
      badge.style.color = "#64748b";
    }
    badge.style.display = "block";
  }
}

function getFlagUrl(country) {
  if (!country)
    return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='16'><rect width='24' height='16' fill='%23f1f5f9'/><text x='50%' y='65%' font-size='10' font-family='sans-serif' fill='%2394a3b8' text-anchor='middle'>?</text></svg>";
  return `https://flagcdn.com/w160/${flagMap[country] || "xx"}.png`;
}

async function saveResultsToCloud() {
  try {
    const res = await fetch("/api/save-results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(matchResults),
    });
    if (!res.ok) throw new Error("Server trả về lỗi khi ghi dữ liệu.");
  } catch (err) {
    console.error("Lỗi lưu trữ Cloud Database:", err);
    showToast("❌ Không thể đồng bộ lên Cloud!");
  }
}

function getResult(matchId) {
  return (
    matchResults[matchId] || {
      score1: "",
      score2: "",
      pen1: "",
      pen2: "",
      status: "scheduled",
      winner: null,
      loser: null,
    }
  );
}

function getStatusBadge(status) {
  switch (status) {
    case "finished":
      return `<span class="badge badge-finished">Kết thúc</span>`;
    case "live":
      return `<span class="badge badge-live"><span class="dot"></span>Đang live</span>`;
    default:
      return `<span class="badge badge-scheduled">Chưa đá</span>`;
  }
}

function determineWinner(team1, team2, score1, score2, pen1, pen2) {
  if (score1 === "" || score2 === "") return { winner: null, loser: null };
  const s1 = parseInt(score1);
  const s2 = parseInt(score2);

  if (s1 > s2) return { winner: team1, loser: team2 };
  if (s2 > s1) return { winner: team2, loser: team1 };

  if (pen1 !== "" && pen2 !== "") {
    const p1 = parseInt(pen1);
    const p2 = parseInt(pen2);
    if (p1 > p2) return { winner: team1, loser: team2 };
    if (p2 > p1) return { winner: team2, loser: team1 };
  }
  return { winner: null, loser: null };
}

function updateTree() {
  rounds = JSON.parse(JSON.stringify(originalRounds));
  const findAndSetTeam = (mId, teamName, slot) => {
    for (let r of rounds) {
      let m = r.matches.find((match) => match.id === mId);
      if (m) {
        m[slot] = teamName;
        break;
      }
    }
  };

  for (let r of rounds) {
    for (let m of r.matches) {
      const res = getResult(m.id);

      if (matchResults[m.id] && matchResults[m.id].status) {
        m.status = matchResults[m.id].status;
      }

      if (res.winner && nextMatchMap[m.id]) {
        const target = nextMatchMap[m.id];
        findAndSetTeam(target.nextId, res.winner, target.slot);
      }
    }
  }

  const res1 = getResult(101);
  const res2 = getResult(102);
  if (res1.winner) findAndSetTeam(104, res1.winner, "team1");
  if (res1.loser) findAndSetTeam(103, res1.loser, "team1");
  if (res2.winner) findAndSetTeam(104, res2.winner, "team2");
  if (res2.loser) findAndSetTeam(103, res2.loser, "team2");
}

function renderTabs() {
  const container = document.getElementById("tabs");
  if (!container) return;
  container.innerHTML = "";
  rounds.forEach((round) => {
    const tab = document.createElement("button");
    tab.className = `tab ${currentTab === round.id ? "tab-active" : ""}`;
    tab.textContent = round.name;
    tab.onclick = () => {
      currentTab = round.id;
      renderTabs();
      renderMatches();
    };
    container.appendChild(tab);
  });

  const bracketTab = document.createElement("button");
  bracketTab.className = `tab ${currentTab === "bracket" ? "tab-active" : ""}`;
  bracketTab.textContent = "SƠ ĐỒ THI ĐẤU";
  bracketTab.onclick = () => {
    currentTab = "bracket";
    renderTabs();
    renderBracket();
  };
  container.appendChild(bracketTab);
}

function toggleFavorite(matchId, e) {
  if (e) e.stopPropagation();
  if (favorites.includes(matchId)) {
    favorites = favorites.filter((id) => id !== matchId);
  } else {
    favorites.push(matchId);
  }
  localStorage.setItem("wcFavorites", JSON.stringify(favorites));
  document.getElementById("favCount").textContent = favorites.length;
  if (currentTab === "favorites") renderMatches();
  else {
    const icon = document.querySelector(
      `.match-card[data-id="${matchId}"] .fav-icon`,
    );
    if (icon) icon.classList.toggle("active");
  }
}

function showFavorites() {
  currentTab = "favorites";
  renderTabs();
  renderMatches();
}

function renderMatches() {
  if (currentTab === "bracket") {
    renderBracket();
    return;
  }
  const container = document.getElementById("matchesContainer");
  if (!container) return;
  container.innerHTML = "";

  const searchTerm =
    document.getElementById("searchInput")?.value.toLowerCase().trim() || "";
  const selectedDate = document.getElementById("dateFilter")?.value || "";
  let matchesToShow = [];

  if (currentTab === "favorites") {
    const all = [];
    rounds.forEach((r) => r.matches.forEach((m) => all.push(m)));
    matchesToShow = all.filter((m) => favorites.includes(m.id));
  } else {
    const round = rounds.find((r) => r.id === currentTab);
    if (round) matchesToShow = round.matches;
  }

  // THAY ĐỔI TẠI ĐÂY: Sao chép mảng trận đấu và tiến hành sắp xếp theo thời gian tăng dần (gần nhất lên đầu)
  const sortedMatches = [...matchesToShow].sort((a, b) => {
    return (
      parseMatchDateTime(a.date, a.time) - parseMatchDateTime(b.date, b.time)
    );
  });

  const filtered = sortedMatches.filter((match) => {
    const t1 = match.team1 ? match.team1.toLowerCase() : "";
    const t2 = match.team2 ? match.team2.toLowerCase() : "";
    return (
      (t1.includes(searchTerm) || t2.includes(searchTerm)) &&
      (!selectedDate || match.date === selectedDate)
    );
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-matches" style="text-align:center; padding:40px; color:gray;">Không tìm thấy trận đấu phù hợp.</div>`;
    return;
  }

  filtered.forEach((match) => {
    const res = getResult(match.id);
    const matchEl = document.createElement("div");
    matchEl.className = "match-card";
    matchEl.setAttribute("data-id", match.id);
    matchEl.onclick = () => showMatchModal(match);

    let scoreDisplay = `<div class="vs-label">VS</div>`;
    if (res.score1 !== "" && res.score2 !== "") {
      const penText =
        res.pen1 !== "" && res.pen2 !== ""
          ? `<small style="display:block;font-size:11px;color:#ef4444;">(Pen: ${res.pen1} - ${res.pen2})</small>`
          : "";
      scoreDisplay = `<div class="match-score">${res.score1} - ${res.score2}${penText}</div>`;
    }

    matchEl.innerHTML = `
      <div class="match-card-header">
        <span class="match-id">#${match.id}</span>
        ${getStatusBadge(match.status)}
        <button onclick="toggleFavorite(${match.id}, event)" class="fav-icon ${favorites.includes(match.id) ? "active" : ""}">
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>
      <div class="teams">
        <div class="team ${res.winner && res.winner === match.team1 ? "winner" : ""}">
          <img src="${getFlagUrl(match.team1)}" alt="">
          <span>${match.team1 || "Chưa xác định"}</span>
        </div>
        <div class="vs-container">
          <div class="vs-time">${match.time}</div>
          <div class="vs-date">${match.date}</div>
          ${scoreDisplay}
        </div>
        <div class="team ${res.winner && res.winner === match.team2 ? "winner" : ""}">
          <img src="${getFlagUrl(match.team2)}" alt="">
          <span>${match.team2 || "Chưa xác định"}</span>
        </div>
      </div>
      <div class="venue"><i class="fa-solid fa-location-dot"></i> ${match.venue}</div>
    `;
    container.appendChild(matchEl);
  });
}

function renderBracket() {
  const container = document.getElementById("matchesContainer");
  if (!container) return;
  container.innerHTML = `
    <div class="bracket-wrapper">
      <div class="bracket-header-info">
        <h2><i class="fa-solid fa-sitemap"></i> SƠ ĐỒ THI ĐẤU KNOCKOUT</h2>
        <p>${isAdmin ? "Bạn đang ở quyền ADMIN - Click trực tiếp vào các trận để sửa điểm số đám mây" : "Chế độ xem trực tuyến"}</p>
      </div>
      <div class="bracket-grid">
        ${rounds
          .map(
            (round) => `
          <div class="bracket-column">
            <div class="column-title">${round.name}</div>
            <div class="bracket-list">
              ${round.matches
                .map((m) => {
                  const res = getResult(m.id);
                  const penText1 =
                    res.pen1 !== "" && res.pen2 !== ""
                      ? `<span style="font-size:10px;color:#ef4444;margin-left:4px;">(${res.pen1})</span>`
                      : "";
                  const penText2 =
                    res.pen1 !== "" && res.pen2 !== ""
                      ? `<span style="font-size:10px;color:#ef4444;margin-left:4px;">(${res.pen2})</span>`
                      : "";

                  return `
                  <div class="bracket-match-node" onclick="showMatchModalFromId(${m.id})">
                    <div class="node-header">
                      <span class="node-id">#${m.id}</span>
                      ${getStatusBadge(m.status)}
                    </div>
                    <div class="node-body">
                      <div class="node-team ${res.winner && res.winner === m.team1 ? "winner" : ""} ${!m.team1 ? "empty" : ""}">
                        <div class="node-team-info">
                          <img src="${getFlagUrl(m.team1)}">
                          <span class="team-name">${m.team1 || "Chưa xác định"}</span>
                        </div>
                        <span class="team-score">${res.score1 !== "" ? res.score1 : "-"}${penText1}</span>
                      </div>
                      <div class="node-team ${res.winner && res.winner === m.team2 ? "winner" : ""} ${!m.team2 ? "empty" : ""}">
                        <div class="node-team-info">
                          <img src="${getFlagUrl(m.team2)}">
                          <span class="team-name">${m.team2 || "Chưa xác định"}</span>
                        </div>
                        <span class="team-score">${res.score2 !== "" ? res.score2 : "-"}${penText2}</span>
                      </div>
                    </div>
                  </div>
                `;
                })
                .join("")}
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function showMatchModal(match) {
  if (!match.team1 || !match.team2) {
    alert("Trận đấu này chưa xác định xong các đội tuyển!");
    return;
  }
  currentModalMatch = match;
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.classList.add("active");
  const res = getResult(match.id);

  document.getElementById("modalMatchInfo").innerHTML = `
    <span class="modal-id">#${match.id}</span>
    <span class="modal-round-tag">${rounds.find((r) => r.matches.some((m) => m.id === match.id))?.name}</span>
  `;

  const inputClass = isAdmin ? "score-input" : "score-input score-readonly";
  const disabledAttr = isAdmin ? "" : "disabled";

  document.getElementById("modalTeams").innerHTML = `
    <div class="team-block">
      <img src="${getFlagUrl(match.team1)}" alt="">
      <div class="modal-team-name">${match.team1}</div>
      <div style="display:flex; flex-direction:column; gap:4px; align-items:center;">
         <input type="number" id="score1" class="${inputClass}" value="${res.score1}" min="0" ${disabledAttr} placeholder="Bàn thắng">
         <input type="number" id="pen1" class="${inputClass}" value="${res.pen1 || ""}" min="0" ${disabledAttr} placeholder="Pen" style="width:55px; border-color:#ef4444; font-size:12px; ${res.score1 === res.score2 && res.score1 !== "" ? "" : "display:none;"}">
      </div>
    </div>
    <div class="vs-big">VS</div>
    <div class="team-block">
      <img src="${getFlagUrl(match.team2)}" alt="">
      <div class="modal-team-name">${match.team2}</div>
      <div style="display:flex; flex-direction:column; gap:4px; align-items:center;">
         <input type="number" id="score2" class="${inputClass}" value="${res.score2}" min="0" ${disabledAttr} placeholder="Bàn thắng">
         <input type="number" id="pen2" class="${inputClass}" value="${res.pen2 || ""}" min="0" ${disabledAttr} placeholder="Pen" style="width:55px; border-color:#ef4444; font-size:12px; ${res.score1 === res.score2 && res.score1 !== "" ? "" : "display:none;"}">
      </div>
    </div>
  `;

  if (isAdmin) {
    const checkScoresTogglePen = () => {
      const s1 = document.getElementById("score1").value;
      const s2 = document.getElementById("score2").value;
      const p1Input = document.getElementById("pen1");
      const p2Input = document.getElementById("pen2");
      if (s1 !== "" && s2 !== "" && parseInt(s1) === parseInt(s2)) {
        p1Input.style.display = "block";
        p2Input.style.display = "block";
      } else {
        p1Input.style.display = "none";
        p2Input.style.display = "none";
        p1Input.value = "";
        p2Input.value = "";
      }
    };
    document.getElementById("score1").oninput = checkScoresTogglePen;
    document.getElementById("score2").oninput = checkScoresTogglePen;
  }

  document.getElementById("modalTime").textContent = match.time;
  document.getElementById("modalDate").innerHTML = `📅 Ngày ${match.date}/2026`;
  document.getElementById("modalVenue").innerHTML = `📍 ${match.venue}`;

  const infoContainer = document.getElementById("modalVenue").parentNode;
  let statusSelector = document.getElementById("modalStatusSelect");
  if (!statusSelector) {
    const newContainer = document.createElement("div");
    newContainer.className = "status-select-container";
    newContainer.innerHTML = `
      <label style="font-size:12px; font-weight:700; margin-right:8px;">Trạng thái:</label>
      <select id="modalStatusSelect" ${disabledAttr}>
        <option value="scheduled">Chưa diễn ra</option>
        <option value="live">Đang diễn ra</option>
        <option value="finished">Kết thúc</option>
      </select>
    `;
    infoContainer.appendChild(newContainer);
  }
  document.getElementById("modalStatusSelect").value = match.status;

  const footer = document.querySelector(".modal-footer");
  if (footer) {
    if (isAdmin) {
      footer.innerHTML = `
        <button onclick="saveMatchResult()" class="btn-save">💾 Lưu lên Cloud</button>
        <button onclick="resetMatchResult()" class="btn-reset">🔄 Xóa trận</button>
        <button onclick="closeModal()" class="btn-close">Hủy</button>
      `;
    } else {
      footer.innerHTML = `<button onclick="closeModal()" class="btn-close" style="width:100%">Đóng cửa sổ xem</button>`;
    }
  }
}

function showMatchModalFromId(id) {
  const allMatches = rounds.flatMap((r) => r.matches);
  const match = allMatches.find((m) => m.id === id);
  if (match) showMatchModal(match);
}

async function saveMatchResult() {
  if (!isAdmin || !currentModalMatch) return;
  const s1 = document.getElementById("score1").value;
  const s2 = document.getElementById("score2").value;
  const p1 = document.getElementById("pen1").value;
  const p2 = document.getElementById("pen2").value;
  const selectedStatus = document.getElementById("modalStatusSelect").value;

  if (selectedStatus === "finished" && (s1 === "" || s2 === "")) {
    alert("Ban tổ chức vui lòng nhập đầy đủ tỷ số trận đấu!");
    return;
  }

  if (selectedStatus === "finished" && parseInt(s1) === parseInt(s2)) {
    if (p1 === "" || p2 === "") {
      alert(
        "Trận đấu có kết quả hòa, vui lòng nhập kết quả sút luân lưu Pen để tìm đội đi tiếp!",
      );
      return;
    }
    if (parseInt(p1) === parseInt(p2)) {
      alert("Tỷ số đá luân lưu Penalty không thể hòa nhau!");
      return;
    }
  }

  const outcome = determineWinner(
    currentModalMatch.team1,
    currentModalMatch.team2,
    s1,
    s2,
    p1,
    p2,
  );

  matchResults[currentModalMatch.id] = {
    score1: s1,
    score2: s2,
    pen1: p1,
    pen2: p2,
    status: selectedStatus,
    winner: outcome.winner,
    loser: outcome.loser,
  };

  currentModalMatch.status = selectedStatus;

  updateTree();
  closeModal();
  showToast("🔄 Đang đồng bộ hóa kết quả lên Cloud KV...");

  await saveResultsToCloud();

  showToast("✅ Đã lưu thành công! Tất cả mọi người sẽ thấy kết quả này.");
  currentTab === "bracket" ? renderBracket() : renderMatches();
}

async function resetMatchResult() {
  if (
    !isAdmin ||
    !currentModalMatch ||
    !confirm(
      "Bạn có chắc chắn muốn hủy kết quả trận đấu này trên Database đám mây?",
    )
  )
    return;
  delete matchResults[currentModalMatch.id];
  currentModalMatch.status = "scheduled";

  updateTree();
  closeModal();
  showToast("🔄 Đang xóa dữ liệu trên đám mây...");

  await saveResultsToCloud();

  showToast("🗑️ Đã hoàn tác kết quả về mặc định thành công.");
  currentTab === "bracket" ? renderBracket() : renderMatches();
}

function closeModal() {
  document.getElementById("modal")?.classList.remove("active");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");
  if (toast && toastText) {
    toastText.innerHTML = message;
    toast.classList.add("active");
    setTimeout(() => toast.classList.remove("active"), 3000);
  }
}

function populateDateFilter() {
  const select = document.getElementById("dateFilter");
  if (!select) return;
  select.innerHTML = '<option value="">Tất cả ngày</option>';
  const dates = new Set();
  originalRounds.forEach((r) => r.matches.forEach((m) => dates.add(m.date)));
  Array.from(dates)
    .sort()
    .forEach((date) => {
      const opt = document.createElement("option");
      opt.value = date;
      opt.textContent = date;
      select.appendChild(opt);
    });
}

function filterMatches() {
  renderMatches();
}

async function init() {
  checkAdminPrivilege();
  populateDateFilter();

  try {
    const res = await fetch("/api/get-results");
    if (res.ok) {
      matchResults = await res.json();
    } else {
      console.warn("API KV trả về status không thành công, chạy offline.");
    }
  } catch (e) {
    console.error(
      "Không kết nối được Cloud, chạy trên dữ liệu rỗng offline.",
      e,
    );
  }

  updateTree();
  renderTabs();
  const favCount = document.getElementById("favCount");
  if (favCount) favCount.textContent = favorites.length;
  renderMatches();
}

window.onload = init;
