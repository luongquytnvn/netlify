import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.resize();
    $(window).resize(() => {
      this.resize();
    });
  }

  resize() {
    $(document).ready(() => {
      const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      console.log(w);
      console.log(h);
      $('html, body').css({width: w, height: h});
    });
  }

  // setBG() {
  //   $(document).ready(() => {
  //     const bs1 = $('.bs-background');
  //     const bs2 = $('.bs-background-form');
  //     const bs3 = $('.sb-form');
  //     console.log(window.innerHeight);
  //     console.log(window.screen.height);
  //     if ((window.innerHeight < window.screen.height * 45 / 100)
  //       && (window.screen.height < window.screen.width)) {
  //       bs2.height(window.screen.height);
  //       bs2.width(bs2.height() * 55 / 100);
  //       bs3.height(window.screen.height);
  //     } else {
  //       bs2.height(window.innerHeight);
  //       bs2.width(bs2.height() * 55 / 100);
  //       bs3.height(window.innerHeight);
  //     }
  //   });
  // }
}
