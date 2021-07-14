import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private circles: Array<Circle> = new Array<Circle>();
  private opened: boolean = true;

  constructor() {}

  ngOnInit(): void {
    let self = this;
    // @ts-ignore
    document.getElementById('menu').onclick = function (e) {
      let buttons = document.getElementsByTagName('button');
      self.opened = !self.opened;

      document.getElementsByTagName('img')[0].src = self.opened
        ? '../../assets/menu.png'
        : '../../assets/close.png';

      // @ts-ignore
      document.getElementById('background')?.style.height = self.opened
        ? '5rem'
        : '16rem';

      for (let i = 0; i < buttons.length; ++i)
        buttons[i].style.display = self.opened ? 'none' : 'inline';
    };
    window.onscroll = function (e) {
      // @ts-ignore
      document.getElementById('welcome')?.style.opacity = `${
        (1 - (window.scrollY * 3) / window.innerHeight) * 100
      }%`;
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelector('.container')?.classList.add('visible');
          document.querySelector('.background')?.classList.add('visible');
          document.querySelector('.banner')?.classList.remove('visible-banner');
          return;
        }
        document.querySelector('.container')?.classList.remove('visible');
        document.querySelector('.background')?.classList.remove('visible');
        document.querySelector('.banner')?.classList.add('visible-banner');
      });
    });

    let top_trigger = document.querySelector('.topnav');
    if (top_trigger) observer.observe(top_trigger);

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.getElementById('canvas')
    );
    let ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.onresize = () => {
      let count = (window.innerWidth * window.innerHeight) / 2500;
      while (this.circles.length > count) this.circles.pop();

      this.circles.map((circle) => {
        circle.x = (circle.x / canvas.width) * window.innerWidth;
        circle.y = (circle.y / canvas.height) * window.innerHeight;
        circle.w = window.innerWidth;
        circle.h = window.innerHeight;
      });

      while (this.circles.length < count)
        this.circles.push(
          new Circle(
            Math.floor(Math.random() * window.innerWidth),
            Math.floor(Math.random() * window.innerHeight),
            window.innerWidth,
            window.outerHeight,
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random()
          )
        );

      canvas.width = window.innerWidth;
      canvas.height = window.outerHeight;
    };
    if (ctx) {
      for (let i = 0; i < 300; ++i) {
        this.circles.push(
          new Circle(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height),
            canvas.width,
            canvas.height,
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random()
          )
        );
      }
      requestAnimationFrame(() => this.animation(canvas, ctx));
    }
  }

  animation(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null) {
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'black';
      this.circles.forEach((circle) => {
        ctx.beginPath();
        ctx.ellipse(circle.x, circle.y, 1, 1, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        circle.update();

        this.circles.forEach((c) => {
          if (c != circle) {
            let distance: number =
              Math.pow(c.x - circle.x, 2) + Math.pow(c.y - circle.y, 2);
            if (distance < 3000) {
              ctx.lineWidth = 0.5 - distance / 6000;
              ctx.strokeStyle = 'black';
              ctx.beginPath();
              ctx.moveTo(circle.x, circle.y);
              ctx.lineTo(c.x, c.y);
              ctx.stroke();
            }
          }
        });
      });
      requestAnimationFrame(() => this.animation(canvas, ctx));
    }
  }
}

class Circle {
  constructor(
    public x: number,
    public y: number,
    public w: number,
    public h: number,
    private x_vel: number,
    private y_vel: number,
    private x_speed: number,
    private y_speed: number
  ) {}
  update() {
    this.x += this.x_vel * this.x_speed;
    this.y += this.y_vel * this.y_speed;

    if (this.x < 0) this.x = this.w;
    if (this.x > this.w) this.x = 0;

    if (this.y < 0) this.y = this.h;
    if (this.y > this.h) this.y = 0;
  }
}
