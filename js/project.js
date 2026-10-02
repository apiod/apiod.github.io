const procjetGrid = document.querySelector(".projects-grid");
projectData.forEach((data) => {
  let techs = "";
  data.tech.forEach((tech) => {
    techs += `<span>${tech}</span>\n`;
    if (data.length !== data.tech.indexOf(tech)) {
      techs += ", ";
    }
  });
  procjetGrid.innerHTML += `
    <article class="project-card">
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
            ><button
            type="button"
            class="detail-button"
            data-project=${data.projectDetail}
            >
            자세히 보기 →
            </button>
        </div>
        </div>
    </article>
    `;
});
