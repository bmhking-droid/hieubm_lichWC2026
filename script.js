// Dữ liệu đã được cấu hình thêm mã Quốc gia để gọi Cờ (Ví dụ: mx = Mexico, za = Nam Phi...)
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

const matchListContainer = document.getElementById("match-list");
const searchInput = document.getElementById("search-input");
const groupSelect = document.getElementById("group-select");
const dateButtons = document.querySelectorAll(".date-btn");

let selectedDateFilter = "all"; // Mặc định hiển thị tất cả các ngày

// Hàm chuyển đổi chuỗi tiếng Việt thành không dấu
function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

// Hàm lấy chuỗi ngày định dạng DD/MM/YYYY dựa trên số ngày thêm vào (offset)
function getFormattedDate(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function displayMatches(matches) {
  matchListContainer.innerHTML = "";

  if (matches.length === 0) {
    matchListContainer.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 20px;">Không tìm thấy trận đấu nào thỏa mãn bộ lọc.</p>';
    return;
  }

  matches.forEach((match) => {
    const card = document.createElement("div");
    card.classList.add("match-card");

    const flag1 = match.code1
      ? `<span class="fi fi-${match.code1}"></span>`
      : "";
    const flag2 = match.code2
      ? `<span class="fi fi-${match.code2}"></span>`
      : "";

    card.innerHTML = `
            <div class="match-header">
                <span>🗓️ ${match.date} - ⏰ <b>${match.time}</b></span>
                <span class="group-badge">Bảng ${match.group}</span>
            </div>
            <div class="match-teams">
                <div class="team team1">
                    <span>${match.team1}</span> ${flag1}
                </div>
                <div class="match-vs">VS</div>
                <div class="team team2">
                    ${flag2} <span>${match.team2}</span>
                </div>
            </div>
            <div class="match-footer">
                <div class="match-venue">📍 ${match.venue}</div>
            </div>
        `;
    matchListContainer.appendChild(card);
  });
}

function filterMatches() {
  const searchText = removeVietnameseTones(
    searchInput.value.toLowerCase().trim(),
  );
  const selectedGroup = groupSelect.value;

  // Xác định chuỗi ngày cần so khớp tương ứng với bộ lọc nhanh
  const todayStr = getFormattedDate(0);
  const tomorrowStr = getFormattedDate(1);

  const filtered = matchesData.filter((match) => {
    // 1. Kiểm tra điều kiện tìm kiếm tên đội
    const team1Clean = removeVietnameseTones(match.team1.toLowerCase());
    const team2Clean = removeVietnameseTones(match.team2.toLowerCase());
    const matchesSearch =
      team1Clean.includes(searchText) || team2Clean.includes(searchText);

    // 2. Kiểm tra điều kiện lọc theo bảng đấu
    const matchesGroup =
      selectedGroup === "all" || match.group === selectedGroup;

    // 3. Kiểm tra điều kiện lọc theo mốc thời gian (Hôm nay / Ngày mai)
    let matchesDate = true;
    if (selectedDateFilter === "today") {
      matchesDate = match.date === todayStr;
    } else if (selectedDateFilter === "tomorrow") {
      matchesDate = match.date === tomorrowStr;
    }

    return matchesSearch && matchesGroup && matchesDate;
  });

  displayMatches(filtered);
}

// Xử lý sự kiện click chuyển đổi giữa các tab ngày
dateButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    dateButtons.forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    selectedDateFilter = e.target.getAttribute("data-date");
    filterMatches();
  });
});

searchInput.addEventListener("input", filterMatches);
groupSelect.addEventListener("change", filterMatches);

// Khởi chạy kết xuất danh sách ban đầu
displayMatches(matchesData);
