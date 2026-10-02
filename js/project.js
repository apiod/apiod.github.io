const procjetGrid = document.querySelectorAll(".projects-grid");

const createContent = (data) => {
  let techs = "";
  data.tech.forEach((tech) => {
    techs += `<span>${tech}</span>`;
  });
  const checkedDetail = () => {
    if (!data.projectDetail) {
      return "";
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
            href=${data.projcet_link}
            target="_blank"
            >GitHub →</a
            >${checkedDetail()}
        </div>
        </div>
    </article>
    `;
};

projectData.forEach((data) => {
  //project
  procjetGrid[0].innerHTML += createContent(data);
});
porjectKostaData.forEach((data) => {
  procjetGrid[1].innerHTML += createContent(data);
});
