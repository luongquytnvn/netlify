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
  }

  setBG() {
    $(document).ready(() => {
      const bs1 = $('.bs-background');
      const bs2 = $('.bs-background-form');
      const bs3 = $('.sb-form');
      console.log(window.innerHeight);
      console.log(window.screen.height);
      if ((window.innerHeight < window.screen.height * 45 / 100)
        && (window.screen.height < window.screen.width)) {
        bs2.height(window.screen.height);
        bs2.width(bs2.height() * 55 / 100);
        bs3.height(window.screen.height);
      } else {
        bs2.height(window.innerHeight);
        bs2.width(bs2.height() * 55 / 100);
        bs3.height(window.innerHeight);
      }
    });
  }
}
