const procjetGrid = document.querySelectorAll(".projects-grid");

const createProjectContent = (data) => {
  let techs = "";
  data.tech.forEach((tech) => {
    techs += `<span>${tech}</span>`;
  });
  const checkedDetail = () => {
    if (!data.projectDetail) {
      return `<div class="project-links">
            <a href=${data.projectpage} target="_blank">
            프로젝트 페이지보기
            </a>
            </div>`;
    } else {
      return `<button
            type="button"
            class="detail-button"
            data-project=${data.projectDetail}
            >
            자세히 보기 →
            </button>`;
    }
  };

  return ` <article class="project-card">
        <div class="project-number">${data.id + 1}</div>
        <div class="project-content">
        <p class="project-category">${data.category}</p>
        <h3>${data.title}</h3>
        <p>
            ${data.content}
        </p>
        <div class="project-tech">
            ${techs}
        </div>
        <div class="project-links">
            <a
            href=${data.project_link}
            target="_blank"
            >GitHub →</a
            >${checkedDetail()}
        </div>
        </div>
    </article>
    `;
};

//프로젝트
projectData.forEach((data) => {
  //project
  procjetGrid[0].innerHTML += createProjectContent(data);
});

//kosta 프로젝트
porjectKostaData.forEach((data) => {
  procjetGrid[1].innerHTML += createProjectContent(data);
});

const timeLine = document.querySelector(".timeline");
timelineData.forEach((data) => {
  timeLine.innerHTML += `
        <div class="timeline-item">
            <div class="timeline-date">${data.date}</div>
            <div class="timeline-content">
                <h3>${data.title}</h3>
                <p>${data.subTitle}</p>
                <p>${data.content}</p>
            </div>
        </div>`;
});

//skillList
const skillGrid = document.querySelector(".skills-grid");
const skillList = (data) => {
  let str = "";
  for (let i = 1; i < data.length; i++) {
    str += `<span>${data[i]}</span>`;
  }
  return str;
};
skillData.forEach((obj) => {
  // ["backEnd", "Java", "Node.js", "Flask"],
  skillGrid.innerHTML += `
  <article class="skill-card">
    <h3>${obj[0]}</h3>

    <div class="skill-list">
      ${skillList(obj)}
    </div>
  </article>`;
});
