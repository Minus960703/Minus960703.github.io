import data from './testimonialsdata.js'
export default class testimonials {
  constructor() {
    this.testimonialContainer = document.querySelector('.testimonials__container');
    this.renderHTML(data);
  }

  renderHTML(data) {
    if(data) {
      data.map((i,v) => {
        this.testimonials = document.createElement('div');
        this.testimonials.setAttribute('class', 'testimonials');
        if(v % 2 == 0){
          this.testimonials.innerHTML = `
          <div class="testimonial">
              <img src="${i.img}" alt="" class="testimonial__avatar" />
              <div class="testimonial__speech-bubble">
                  <p>
                      ${i.content}
                  </p>
                  <p class="name"><a href=${i.github}>${i.name}</a> / ${i.company}</p>
              </div>
          </div>
          `
        } else {
          this.testimonials.innerHTML = `
          <div class="testimonial">                
              <div class="testimonial__speech-bubble">
                  <p>
                      ${i.content}
                  </p>
                  <p class="name"><a href=${i.github}>${i.name}</a> / ${i.company}</p>
              </div>
              <img src="${i.img}" alt="" class="testimonial__avatar" />
          </div>
          `
        }
        this.testimonialContainer.appendChild(this.testimonials);
    })
  }
  }
}