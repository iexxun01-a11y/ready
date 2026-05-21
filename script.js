// Section data: edit these arrays to update records and evidence quickly.
const matchRecords = [
  {
    no: "Match 01",
    title: "법무법인 불변기일 크로스체크 및 항소 리스크 방지",
    position: "Legal Schedule Coordinator",
    tags: ["Risk", "Legal", "Deadline"],
    summary: "항소 관련 불변기일 누락을 발견해 기한 내 대응을 지원한 사례",
    problem: "항소 관련 불변기일은 기한이 지나면 더 이상 진행이 어려운 중요한 일정이며, 담당자별 개인 달력과 전체 달력 사이에서 누락 가능성이 있었습니다.",
    role: "담당 변호사 및 사건별 기일을 크로스체크하고, 개인 달력과 전체 달력 일정을 비교해 불변기일 누락 여부를 확인했습니다.",
    keyPlay: "다른 담당자가 놓친 항소 관련 불변기일을 발견하고, 기한 내 대응이 가능하도록 내부에 공유했습니다.",
    result: "항소 기한 도과 리스크를 방지하고, 성공적인 항소 진행에 기여했습니다.",
    evidence: "사건명과 개인정보는 비공개 처리. 법무 일정 관리 경험으로 설명."
  },
  {
    no: "Match 02",
    title: "노션 기반 업무·계정·자료 관리 시스템 구축",
    position: "Workflow Organizer / Internal System Builder",
    tags: ["Workflow", "Notion", "System"],
    summary: "흩어진 계정, 제안서, 프로젝트 자료를 한 번에 찾을 수 있는 내부 관리 시스템으로 재구성한 사례",
    problem: "계정, 제안서 파일, 업무 자료가 엑셀이나 개별 파일에 흩어져 있어 COO와 실무자가 필요한 자료를 매번 별도로 요청해야 했습니다.",
    role: "노션 기반 자료 관리 구조를 설계하고, 계정 정보·제안서·프로젝트 자료를 카테고리화했습니다. 추가개발, 오류사항 등 업무 유형별 템플릿을 만들고 ERP 업무자들이 한 번에 확인할 수 있는 구조를 구축했습니다.",
    keyPlay: "엑셀과 개별 파일에 흩어져 있던 자료를 노션에서 카테고리별로 확인 가능한 내부 업무 시스템으로 전환했습니다.",
    result: "자료 탐색 과정과 반복 문의의 피로도를 줄이고, 업무 확인 편의성을 개선했습니다.",
    evidence: "노션 데이터베이스 화면, 노션 템플릿 상세 화면, 내부 피드백 캡처를 썸네일로 추가할 수 있습니다."
  },
  {
    no: "Match 03",
    title: "개발 요청 체크리스트 및 QA 템플릿화",
    position: "QA Communicator / Development Request Organizer",
    tags: ["QA", "Documentation", "IT"],
    summary: "개발 요청을 구두 피드백이 아닌 실행 가능한 체크리스트로 표준화한 사례",
    problem: "개발 요청사항과 오류사항이 화면 캡처, 메신저, 구두 요청으로 흩어져 있어 처리 방향과 완료 여부를 일관되게 확인하기 어려웠습니다.",
    role: "개발 요청 체크리스트 양식을 제작하고, 오류사항과 추가개발 항목을 분리했습니다. 위치, 내용, 처리 방향, 완료 여부 기준으로 정리하고 노션 템플릿과 연계했습니다.",
    keyPlay: "비개발자도 개발자에게 정확히 요청할 수 있도록 오류와 추가개발 사항을 표준화된 체크리스트 형태로 만들었습니다.",
    result: "개발 요청사항의 가시성과 완료 여부 확인 편의성을 높이고, 개발자와 비개발자 간 커뮤니케이션 기준을 마련했습니다.",
    evidence: "개발 요청 체크리스트 스크린샷을 넣을 수 있는 썸네일 영역을 준비했습니다."
  },
  {
    no: "Match 04",
    title: "콘텐츠 제작 및 온라인 홍보 채널 구축",
    position: "Content Marketer / Promotion Coordinator",
    tags: ["Content", "Promotion", "Channel"],
    summary: "오프라인 공간과 행사 정보를 온라인에서 발견 가능한 콘텐츠로 전환한 사례",
    problem: "오프라인 공간과 행사, 코인 사용처 등 다양한 활용 가능성이 있었지만, 외부에 보여줄 온라인 채널과 콘텐츠 기반이 부족했습니다.",
    role: "네이버플레이스 및 블로그 신규 등록·세팅, 블로그 게시글 작성, 인스타그램과 트위터 업로드, 영상 콘텐츠 제작, 코인 사용처 및 행사 관련 홍보 콘텐츠 기획을 수행했습니다.",
    keyPlay: "오프라인 공간과 행사 정보를 온라인에서 검색·확인 가능한 콘텐츠로 전환했습니다.",
    result: "온라인 홍보 채널 기반을 구축하고, 콘텐츠를 통한 공간·행사 홍보와 문의 유입 확대에 기여했습니다.",
    evidence: "블로그, SNS, 영상 콘텐츠 썸네일을 넣을 수 있는 영역을 준비했습니다."
  },
  {
    no: "Match 05",
    title: "프라이빗 촬영·공연·PT 행사 운영 지원",
    position: "Event Operation Coordinator / Executive Support",
    tags: ["Operation", "Event", "Communication"],
    summary: "촬영, 공연, PT 행사에서 일정·관계자·문서 흐름을 관리한 사례",
    problem: "유명 아티스트 룩북 촬영, 드론쇼, 엔터테인먼트 신인 아이돌 공연, 해외 관련 PT 행사 등 다양한 성격의 행사가 진행되며 일정, 장소, 관계자, 비용, 계약 관련 커뮤니케이션 관리가 필요했습니다.",
    role: "행사 관계자 커뮤니케이션, 일정 및 동선 관리, 현장 안내, 자금집행 정리, 계약서 및 MOU 작성·관리, 행사 전후 자료 정리를 수행했습니다.",
    keyPlay: "각기 다른 이해관계자와 일정이 얽힌 행사를 운영 가능한 단위로 정리하고, 필요한 커뮤니케이션과 문서 흐름을 관리했습니다.",
    result: "대외비성 행사 및 외부 파트너 행사의 안정적인 운영을 지원했습니다.",
    evidence: "대외비 내용은 비공개 처리. 행사 유형과 역할 중심으로 설명."
  },
  {
    no: "Match 06",
    title: "Slack 협업 채널 구조화 및 커뮤니케이션 프로세스 개선",
    position: "Collaboration System Coordinator",
    tags: ["Collaboration", "Slack", "Operation"],
    summary: "구두와 메신저에 흩어진 업무 전달을 기록 기반 협업 구조로 전환한 사례",
    problem: "기존 업무 전달이 구두, WhatsApp, 카카오톡 등 여러 채널로 분산되어 업무 기록과 확인이 어려웠습니다.",
    role: "Slack 도입 및 업무별 채널 구조를 설계하고, 마케팅·개발·비품·상담·피드백 등 목적별 채널을 개설했습니다. 업무 주제별 커뮤니케이션을 분리해 확인 가능한 구조를 만들었습니다.",
    keyPlay: "여러 메신저와 구두 전달에 흩어져 있던 업무 흐름을 Slack 채널별로 분리해 기록이 남는 협업 구조로 전환했습니다.",
    result: "업무 전달 누락 가능성을 줄이고, 담당자별 확인 편의성과 실시간 공유 효율을 높였습니다.",
    evidence: "Slack 채널 구조 예시 썸네일을 넣을 수 있는 영역을 준비했습니다."
  },
  {
    no: "Match 07",
    title: "계약·MOU·자금집행 및 운영 문서 관리",
    position: "Legal & Admin Document Coordinator",
    tags: ["Contract", "Admin", "MOU"],
    summary: "협의 내용을 계약, 비용, 역할 기준으로 정리해 운영 문서로 구조화한 사례",
    problem: "행사, 제휴, 코인 사용처, 외부 파트너십 등 다양한 협업이 진행되며 구두 협의 내용을 문서화하고 계약·MOU·자금집행 자료를 관리할 필요가 있었습니다.",
    role: "계약서 및 MOU 초안 작성·정리, 협의 내용 문서화, 자금집행 자료 관리, 내부 검토용 문안 정리, 대표·임원진 보고용 자료 구성을 수행했습니다.",
    keyPlay: "흩어진 협의 내용을 계약, 일정, 비용, 역할 기준으로 나누어 관리 가능한 문서 형태로 전환했습니다.",
    result: "계약·MOU 검토 흐름과 자금집행 관리 기준을 정리했습니다.",
    evidence: "실제 문서는 비공개 처리. 역할과 프로세스 중심으로 설명."
  },
  {
    no: "Match 08",
    title: "AI 코딩 에이전트 활용 웹페이지 제작",
    position: "AI Workflow Operator / Client Request Builder",
    tags: ["AI", "Web", "Prompting"],
    summary: "비개발자 포지션에서 AI 코딩 에이전트로 클라이언트 요청 기반 웹페이지를 구현한 사례",
    problem: "비개발자임에도 클라이언트 요청에 따라 웹페이지 제작 업무를 수행해야 했습니다.",
    role: "클라이언트 요구사항 정리, 웹페이지 구성 방향 설계, AI 코딩 에이전트용 프롬프트 작성, 결과물 검수 및 수정 요청, 디자인·문구·기능 오류 피드백을 수행했습니다.",
    keyPlay: "클라이언트 요구를 기능, 디자인, 문구 단위로 쪼개 AI 코딩 에이전트가 실행 가능한 요청문으로 변환했습니다.",
    result: "비개발자 포지션에서 AI 도구를 활용해 웹페이지 결과물을 구현했습니다.",
    evidence: "클라이언트 요청 기반 랜딩페이지 링크 또는 스크린샷을 넣을 수 있는 영역을 준비했습니다."
  }
];

const evidenceItems = [
  {
    title: "개발 요청 체크리스트",
    desc: "오류사항과 추가개발을 분리하고, 위치·내용·처리 방향·완료 여부 기준으로 정리한 체크리스트",
    image: "assets/evidence-01.png"
  },
  {
    title: "노션 업무 DB",
    desc: "계정, 제안서, 프로젝트 자료를 카테고리별로 확인할 수 있도록 구성한 업무 관리 데이터베이스",
    image: "assets/evidence-02.png"
  },
  {
    title: "노션 요청사항 템플릿",
    desc: "추가개발과 오류사항을 반복 입력할 수 있도록 만든 요청사항 템플릿",
    image: "assets/evidence-03.png"
  },
  {
    title: "내부 피드백",
    desc: "업무 시스템 개선 후 내부 구성원으로부터 받은 피드백",
    image: "assets/evidence-04.png"
  },
  {
    title: "콘텐츠 채널",
    desc: "블로그, 네이버플레이스, SNS 등 온라인 홍보 채널 운영 자료",
    image: "assets/evidence-05.png"
  },
  {
    title: "AI 웹 제작 결과물",
    desc: "클라이언트 요구사항을 프롬프트로 정리해 구현한 웹페이지 제작 사례",
    image: "assets/evidence-06.png"
  }
];

// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

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

// Match records accordion
const recordsList = document.querySelector("#records-list");

recordsList.innerHTML = matchRecords.map((record, index) => `
  <article class="record-item reveal ${index === 0 ? "open" : ""}">
    <button class="record-button" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
      <div class="record-summary">
        <span class="match-no">${record.no}</span>
        <div>
          <span class="position">${record.position}</span>
          <h3>${record.title}</h3>
          <p>${record.summary}</p>
          <div class="tags">${record.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
        <span class="record-icon" aria-hidden="true">${index === 0 ? "−" : "+"}</span>
      </div>
    </button>
    <div class="record-detail">
      <div class="detail-grid">
        <div class="detail-box"><strong>문제 상황</strong><p>${record.problem}</p></div>
        <div class="detail-box"><strong>내 역할</strong><p>${record.role}</p></div>
        <div class="detail-box"><strong>Key Play</strong><p>${record.keyPlay}</p></div>
        <div class="detail-box"><strong>Result</strong><p>${record.result}</p></div>
        <div class="detail-box"><strong>Evidence</strong><p>${record.evidence}</p></div>
      </div>
    </div>
  </article>
`).join("");

recordsList.addEventListener("click", (event) => {
  const button = event.target.closest(".record-button");
  if (!button) return;

  const item = button.closest(".record-item");
  const isOpen = item.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
  item.querySelector(".record-icon").textContent = isOpen ? "−" : "+";
});

// Radar and pitch view toggle
const toggleButtons = document.querySelectorAll(".toggle-btn");
const radarView = document.querySelector("#radar-view");
const pitchView = document.querySelector("#pitch-view");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    const isRadar = button.dataset.view === "radar";
    radarView.classList.toggle("active", isRadar);
    pitchView.classList.toggle("active", !isRadar);
  });
});

// Radar chart without external libraries
function renderRadarChart() {
  const svg = document.querySelector("#radar-chart");
  const abilities = [
    { label: "상황 판단력", value: 92 },
    { label: "명확한 전달력", value: 90 },
    { label: "업무 커버리지", value: 94 },
    { label: "구조화 능력", value: 91 },
    { label: "변수 대응력", value: 88 },
    { label: "마무리와 검수", value: 89 }
  ];
  const center = 260;
  const radius = 178;
  const pointsFor = (scale) => abilities.map((_, index) => {
    const angle = (-90 + index * 360 / abilities.length) * Math.PI / 180;
    const pointRadius = radius * scale;
    return `${center + Math.cos(angle) * pointRadius},${center + Math.sin(angle) * pointRadius}`;
  }).join(" ");

  const grid = [0.25, 0.5, 0.75, 1].map((scale) =>
    `<polygon class="radar-grid" points="${pointsFor(scale)}"></polygon>`
  ).join("");

  const axes = abilities.map((ability, index) => {
    const angle = (-90 + index * 360 / abilities.length) * Math.PI / 180;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    const labelX = center + Math.cos(angle) * (radius + 42);
    const labelY = center + Math.sin(angle) * (radius + 42);
    return `
      <line class="radar-axis" x1="${center}" y1="${center}" x2="${x}" y2="${y}"></line>
      <text x="${labelX}" y="${labelY}" text-anchor="middle" dominant-baseline="middle">${ability.label}</text>
    `;
  }).join("");

  const valuePoints = abilities.map((ability, index) => {
    const angle = (-90 + index * 360 / abilities.length) * Math.PI / 180;
    const pointRadius = radius * (ability.value / 100);
    return {
      x: center + Math.cos(angle) * pointRadius,
      y: center + Math.sin(angle) * pointRadius
    };
  });

  svg.innerHTML = `
    ${grid}
    ${axes}
    <polygon class="radar-shape" points="${valuePoints.map((point) => `${point.x},${point.y}`).join(" ")}"></polygon>
    ${valuePoints.map((point) => `<circle class="radar-point" cx="${point.x}" cy="${point.y}" r="5"></circle>`).join("")}
  `;
}

renderRadarChart();

// Evidence cards and modal
const evidenceGrid = document.querySelector("#evidence-grid");
const modal = document.querySelector("#evidence-modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalDesc = document.querySelector("#modal-desc");

function imageWithFallback(item) {
  return `
    <div class="thumb">
      <img src="${item.image}" alt="${item.title}" onerror="this.remove(); this.parentElement.insertAdjacentHTML('beforeend', '<span class=&quot;thumb-fallback&quot;>Evidence image will be added</span>')">
    </div>
  `;
}

evidenceGrid.innerHTML = evidenceItems.map((item, index) => `
  <article class="evidence-card reveal" tabindex="0" role="button" data-index="${index}" aria-label="${item.title} 크게 보기">
    ${imageWithFallback(item)}
    <div class="evidence-body">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  </article>
`).join("");

function openEvidenceModal(index) {
  const item = evidenceItems[index];
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  modalImage.innerHTML = `<img src="${item.image}" alt="${item.title}" onerror="this.remove(); this.parentElement.textContent='Evidence image will be added'">`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeEvidenceModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

evidenceGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".evidence-card");
  if (card) openEvidenceModal(card.dataset.index);
});

evidenceGrid.addEventListener("keydown", (event) => {
  const card = event.target.closest(".evidence-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openEvidenceModal(card.dataset.index);
  }
});

document.querySelectorAll("[data-close-modal]").forEach((control) => {
  control.addEventListener("click", closeEvidenceModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeEvidenceModal();
});

// Scroll reveal effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
