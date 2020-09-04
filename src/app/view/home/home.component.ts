import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  screenWidth: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  screenHeight: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  innerHeight: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  innerWidth: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  availHeight: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  availWidth: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  outerWidth: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  outerHeight: BehaviorSubject<any> = new BehaviorSubject<any>(0);

  constructor() {
  }

  ngOnInit(): void {
    this.resize();
    $(window).resize(() => {
      this.resize();
    });
  }

  resize() {
    this.screenHeight.next(screen.height);
    this.screenWidth.next(screen.width);
    this.innerHeight.next(window.innerHeight);
    this.innerWidth.next(window.innerWidth);
    this.availHeight.next(screen.availHeight);
    this.availWidth.next(screen.availWidth);
    this.outerWidth.next(window.outerWidth);
    this.outerHeight.next(window.outerHeight);
    //   $(document).ready(() => {
    //     const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    //     const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    //     console.log(w);
    //     console.log(h);
    //     $('html, body').css({width: w, height: h});
    //   });
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
