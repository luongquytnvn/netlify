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
  documentHeight: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  heightCustom: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  minHeight: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {
  }

  ngOnInit(): void {
//     this.setFirst();
//     $(window).resize(() => {
//       this.resize();
//     });
  }

  // setFirst() {
  //   const bs2 = $('.bg-login');
  //   const bs3 = $('.sb-login-custom-form');
  //   this.minHeight.next(innerHeight > screen.height ? screen.height : innerHeight);
  // }
  //
  // resize() {
  //   this.screenHeight.next(screen.height);
  //   this.screenWidth.next(screen.width);
  //   this.innerHeight.next(window.innerHeight);
  //   this.innerWidth.next(window.innerWidth);
  //   this.availHeight.next(screen.availHeight);
  //   this.availWidth.next(screen.availWidth);
  //   this.outerWidth.next(window.outerWidth);
  //   this.outerHeight.next(window.outerHeight);
  //
  //   console.log('screenHeight', this.screenHeight.getValue());
  //   console.log('screenWidth', this.screenWidth.getValue());
  //   console.log('innerHeight', this.innerHeight.getValue());
  //   console.log('innerWidth', this.innerWidth.getValue());
  //   console.log('availHeight', this.availHeight.getValue());
  //   console.log('availWidth', this.availWidth.getValue());
  //   console.log('outerWidth', this.outerWidth.getValue());
  //   console.log('outerHeight', this.outerHeight.getValue());
  //   //   $(document).ready(() => {
  //   //     const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  //   //     const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  //   //     console.log(w);
  //   //     console.log(h);
  //   //     $('html, body').css({width: w, height: h});
  //   //   });
  //
  //   $(document).ready(() => {
  //     this.documentHeight.next($(document).height());
  //     const bs2 = $('.bg-login');
  //     const bs3 = $('.sb-login-custom-form');
  //     bs3.removeClass('sb-login-custom-form-mobile');
  //     bs2.removeClass('bg-login-mobile');
  //     this.heightCustom.next(null);
  //     if ((innerHeight < (screen.height * 80 / 100)) && (screen.width <= 1024)) {
  //       bs3.addClass('sb-login-custom-form-mobile');
  //       this.heightCustom.next(this.minHeight.getValue());
  //     }
  //
  //     if (innerWidth <= 575 && screen.width < screen.height) {
  //       bs2.addClass('bg-login-mobile');
  //     }
  //   });
  // }
}
