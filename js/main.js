/* ==================================================
   Mobile Menu
================================================== */

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ==================================================
   Navigation
================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

/* ==================================================
   Project Modal
================================================== */

const projectModal = document.querySelector("#projectModal");
const modalOverlay = document.querySelector("#modalOverlay");
const modalClose = document.querySelector("#modalClose");
const modalBody = document.querySelector("#modalBody");

const projectData = {
  conversation: {
    title: "대화 분석 애플리케이션",

    content: `
      <p>
        대화 데이터를 분석하여 사용자의 대화 성향과
        분석 결과를 제공하는 애플리케이션입니다.
      </p>

      <h3>담당 역할</h3>

      <ul>
        <li>분석 결과 페이지 구현</li>
        <li>REST API 데이터 연동</li>
        <li>API 응답 데이터 가공 및 출력</li>
        <li>Dark / Light Mode 구현</li>
        <li>React Router를 이용한 페이지 이동</li>
      </ul>

      <h3>사용 기술</h3>

      <p>
        React · JavaScript · Axios · REST API
      </p>

      <h3>주요 경험</h3>

      <p>
        서버에서 전달받은 분석 결과 데이터를
        화면에서 사용하기 적합한 형태로 가공하고
        사용자에게 직관적으로 보여주는 UI를 구현했습니다.
      </p>
    `,
  },

  rental: {
    title: "물품 대여 서비스",

    content: `
      <p>
        사용자 간 물품을 대여하고 반납할 수 있는
        콘솔 기반 대여 서비스입니다.
      </p>

      <h3>담당 역할</h3>

      <ul>
        <li>Rental 도메인 설계</li>
        <li>대여 신청 및 승인 처리</li>
        <li>반납 상태 관리</li>
        <li>Repository / Service / Controller 구성</li>
        <li>MySQL 데이터 처리</li>
      </ul>

      <h3>사용 기술</h3>

      <p>
        Java 21 · MySQL 8.0 · JDBC
      </p>

      <h3>주요 경험</h3>

      <p>
        대여와 반납의 상태를 단계별로 관리하고
        하나의 게시글에 대한 대여 승인 과정에서
        다른 대여 요청을 처리하는 비즈니스 로직을 구현했습니다.
      </p>
    `,
  },

  weather: {
    title: "날씨 알림 애플리케이션",

    content: `
      <p>
        사용자가 설정한 시간과 위치를 기반으로
        날씨 정보를 제공하는 애플리케이션입니다.
      </p>

      <h3>담당 역할</h3>

      <ul>
        <li>React Native 화면 구현</li>
        <li>날씨 API 연동</li>
        <li>사용자 설정 화면 구현</li>
        <li>위치 기반 데이터 처리</li>
      </ul>

      <h3>사용 기술</h3>

      <p>
        React Native · Expo · JavaScript · API
      </p>
    `,
  },

  graduation: {
    title: "졸업요건 시뮬레이터",

    content: `
      <p>
        학생의 데이터를 기반으로 졸업요건을 확인하고
        필요한 과목을 시각적으로 확인할 수 있는 서비스입니다.
      </p>

      <h3>담당 역할</h3>

      <ul>
        <li>DB 데이터 처리</li>
        <li>사용자별 졸업요건 데이터 표시</li>
        <li>OCR 데이터 처리</li>
        <li>졸업요건 화면 구현</li>
      </ul>

      <h3>주요 경험</h3>

      <p>
        데이터베이스에서 사용자별 데이터를 받아
        화면에서 필요한 정보로 가공하여 표시하는
        과정을 경험했습니다.
      </p>
    `,
  },
};

const detailButtons = document.querySelectorAll(".detail-button");

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectId = button.dataset.project;

    const project = projectData[projectId];

    if (!project) {
      return;
    }

    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      ${project.content}
    `;

    projectModal.classList.add("active");

    projectModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  });
});

/* ==================================================
   Close Modal
================================================== */

const closeModal = () => {
  projectModal.classList.remove("active");

  projectModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
};

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);

/* ==================================================
   ESC Key
================================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal.classList.contains("active")) {
    closeModal();
  }
});
