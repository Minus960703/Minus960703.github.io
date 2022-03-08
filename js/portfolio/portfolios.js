import data from './portfoliosdata.js'

export default class port {
  constructor() {
    this.portfolioContainer = document.querySelector('.work__projects');
    this.front = 0;
    this.back = 0;
    this.mobile = 0;
    this.renderHTML(data);
  }

  renderHTML(data) {
    if(data) {
      data.map(i => {
        this.project = document.createElement('a');
        this.project.setAttribute('class', 'project');
        this.project.setAttribute('target', 'blank');
        this.project.setAttribute('data-type', i.type);
        this.project.setAttribute('href', i.link);
        this.project.innerHTML = `
          <img src=${i.img} alt="" class="project__img" />
          <div class="project__description">
            <h3>${i.name}</h3>
            <span>${i.content}</span>
          </div>
        `
        this.portfolioContainer.appendChild(this.project);
        switch(i.type) {
          case 'front-end' :
            this.front++;
            return;
          case 'back-end' :
            this.back++;
            return;
          case 'mobile' :
            this.mobile++;
            return; 
        }
      })
      this.sum = this.front + this.back + this.mobile;
      document.querySelector('.all__count').textContent = this.sum;
      document.querySelector('.front__count').textContent = this.front;
      document.querySelector('.back__count').textContent = this.back;
      document.querySelector('.mobile').textContent = this.mobile;
    }
  }
}