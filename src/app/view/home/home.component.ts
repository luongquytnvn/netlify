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

  constructor() {
  }

  ngOnInit(): void {
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

    console.log('screenHeight', this.screenHeight.getValue());
    console.log('screenWidth', this.screenWidth.getValue());
    console.log('innerHeight', this.innerHeight.getValue());
    console.log('innerWidth', this.innerWidth.getValue());
    console.log('availHeight', this.availHeight.getValue());
    console.log('availWidth', this.availWidth.getValue());
    console.log('outerWidth', this.outerWidth.getValue());
    console.log('outerHeight', this.outerHeight.getValue());
    //   $(document).ready(() => {
    //     const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    //     const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    //     console.log(w);
    //     console.log(h);
    //     $('html, body').css({width: w, height: h});
    //   });

    $(document).ready(() => {
      this.documentHeight.next($(document).height());
      const bs1 = $('.bg-container');
      const bs2 = $('.bg-login');
      const bs3 = $('.sb-login-custom-form');
      // bs1.removeClass('bs-background-mobile');
      // bs2.removeClass('bs-background-form-mobile');
      // bs3.removeClass('bs-form-mobile');
      if ((innerHeight < (screen.height * 90 / 100)) && (screen.width <= 575)) {
        if (screen.width < screen.height) {
          // bs1.addClass('bs-background-mobile');
          // bs2.addClass('bs-background-form-mobile');
          // bs3.addClass('bs-form-mobile');
          // const bs4 = $('.bs-background-form-mobile');
          // const bs5 = $('.bs-form-mobile');
          // const bs6 = $('.bs-background-mobile');
          // bs4.height(screen.height);
          // bs5.height(screen.height);
          // bs6.find('*').css('font-size', screen.height * 1.8 / 100);
          this.heightCustom.next(screen.height);
        } else {
          this.heightCustom.next(null);
        }
      } else {
        this.heightCustom.next(null);
      }
    });
  }
}
