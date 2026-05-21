// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Age calculation for profile data
document.querySelectorAll("[data-age]").forEach((target) => {
  const birthDate = new Date(target.dataset.age);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const beforeBirthday = today.getMonth() < birthDate.getMonth()
    || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
  if (beforeBirthday) age -= 1;
  target.textContent = `${age}세`;
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Radar chart for Core Stats & Skills
function renderRadarChart() {
  const svg = document.querySelector("#radar-chart");
  if (!svg) return;

  const stats = [
    { label: "상황 판단력", value: 90 },
    { label: "정보 구조화", value: 94 },
    { label: "문서 설계력", value: 92 },
    { label: "데이터 자동화 활용", value: 84 },
    { label: "협업 속도 개선", value: 88 }
  ];

  const center = 260;
  const radius = 165;
  const angleFor = (index) => (-90 + index * 360 / stats.length) * Math.PI / 180;
  const point = (index, scale) => {
    const angle = angleFor(index);
    return {
      x: center + Math.cos(angle) * radius * scale,
      y: center + Math.sin(angle) * radius * scale
    };
  };
  const polygonPoints = (scale) => stats
    .map((_, index) => {
      const p = point(index, scale);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  const grid = [0.25, 0.5, 0.75, 1].map((scale) =>
    `<polygon class="radar-grid" points="${polygonPoints(scale)}"></polygon>`
  ).join("");

  const axes = stats.map((stat, index) => {
    const end = point(index, 1);
    const label = point(index, 1.28);
    return `
      <line class="radar-axis" x1="${center}" y1="${center}" x2="${end.x}" y2="${end.y}"></line>
      <text x="${label.x}" y="${label.y}" text-anchor="middle" dominant-baseline="middle">${stat.label}</text>
    `;
  }).join("");

  const values = stats.map((stat, index) => point(index, stat.value / 100));

  svg.innerHTML = `
    ${grid}
    ${axes}
    <polygon class="radar-shape" points="${values.map((p) => `${p.x},${p.y}`).join(" ")}"></polygon>
    ${values.map((p) => `<circle class="radar-point" cx="${p.x}" cy="${p.y}" r="5"></circle>`).join("")}
  `;
}

renderRadarChart();

// Portfolio Works filter
const filterButtons = document.querySelectorAll(".filter-btn");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    workCards.forEach((card) => {
      const categories = card.dataset.category || "";
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});
