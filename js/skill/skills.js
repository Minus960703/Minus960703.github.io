import data from './skillsdata.js'

export default class skills {
  constructor() {
    this.skillsContainer = document.querySelector('.skillset__left');
    this.renderHTML(data);
  }

  renderHTML(data) {
    if(data) {
      data.map(i => {
        this.skills = document.createElement('div');
        this.skills.setAttribute('class','skill');
        this.skills.innerHTML = `
        <div class="skill__description">
          <span>${i.name}</span>
          <span>${i.proficiency}%</span>
        </div>
        <div class="skill__bar">
          <div class="skill__value" style="width: ${i.proficiency}%;"></div>
        </div>
        `
        this.skillsContainer.appendChild(this.skills);
      })
    }
  }
}