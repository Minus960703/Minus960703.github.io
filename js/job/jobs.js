import data from './jobsdata.js'

export default class jobs {
  constructor() {
    this.jobsContainer = document.querySelector('.about__jobs');
    this.renderHTML(data);
  }
  
  renderHTML(data) {
    if(data) {
      data.map(i => {
        this.jobs = document.createElement('div');
        this.jobs.setAttribute('class', 'job');
        this.jobs.innerHTML = `
          <img src=${i.img} alt="" class="job__logo" />
          <div class="job__description">
              <p class="job__name">${i.name}</p>
              <p class="job__period">${i.period}</p>
          </div>
        `
        this.jobsContainer.appendChild(this.jobs);
      })
    }
  }
}