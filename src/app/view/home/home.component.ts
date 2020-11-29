import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {EventEmitter} from 'events';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {replaceVietnamese} from './replaceVietnamese';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() message: any;
  @Input() basePath;
  @Input() error: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  @Input() isCallback: boolean = false;
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dataLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  otpForm: FormGroup;
  input1: any = null;
  input2: any = null;
  input3: any = null;
  input4: any = null;
  input5: any = null;
  input6: any = null;
  isOtp: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  countEntry: number = 0;
  otpError: string;
  isFocus: boolean = false;
  isKeyPress: boolean = false;
  timeOut: any = [];

  evenStringKeyDown: BehaviorSubject<KeyboardEvent> = new BehaviorSubject<KeyboardEvent>(null);
  evenStringKeyUp: BehaviorSubject<KeyboardEvent> = new BehaviorSubject<KeyboardEvent>(null);

  @ViewChild('inputOtp1', {static: true}) inputOtp1: ElementRef;
  @Output() callBack = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              // public activeModal: NgbActiveModal,
              // private swibCommon: SwibCommonResourceService,
              // public translate: TranslateService,
              // private modalService: NgbModal
  ) {
    this.otpForm = this.formBuilder.group({
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(12)
      ])
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.inputOtp1.nativeElement.focus();
    }, 1000);
    // this.swibCommon.basePath = this.basePath;
  }

  onSubmit(data: any) {
    // if (this.otpForm.invalid || !this.isOtp.getValue()) {
    //   return;
    // }
    // this.otpError = null;
    // data.otp = this.input1 + '' + this.input2 + '' + this.input3 + '' + this.input4 + '' + this.input5 + '' + this.input6;
    // this.dataLoading.next(true);
    // this.swibCommon.checkPasswordUsingPOST(data.password).subscribe((res: any) => {
    //   this.dataLoading.next(false);
    //   if (res && res.code == '1002') {
    //     this.countEntry++;
    //     if (this.countEntry >= 5) {
    //       this.callBack.emit(null);
    //       // this.activeModal.close(new ModalOTPRes(false));
    //     }
    //   }
    //   if (res && res.code === '00') {
    //     if (!this.isCallback) {
    //       this.activeModal.close(data);
    //     } else {
    //       this.callBack.emit(data.otp);
    //       this.dataLoading.next(true);
    //       this.error.subscribe(error => {
    //         if (!error) {
    //           return;
    //         }
    //         this.dataLoading.next(false);
    //         this.input1 = null;
    //         this.input2 = null;
    //         this.input3 = null;
    //         this.input4 = null;
    //         this.input5 = null;
    //         this.input6 = null;
    //         this.isOtp.next(false);
    //         $(document).ready(() => {
    //           this.inputOtp1.nativeElement.focus();
    //         });
    //         this.error.next(null);
    //       });
    //     }
    //   } else {
    //     this.otpForm.controls.password.setErrors({passwordInvalid: true});
    //     $(document).ready(() => {
    //       $('#passId').blur();
    //     });
    //   }
    // });
  }

  close() {
    // const modal = this.modalService.open(ModalConfirmCloseComponent, {
    //   backdrop: 'static',
    //   keyboard: false,
    //   size: 'sm'
    // });
    // modal.result.then(res => {
    //   if (res) {
    //     this.activeModal.close(new ModalOTPRes(true));
    //   }
    // });
  }

  get f() {
    if (this.otpForm != undefined) {
      return this.otpForm.controls;
    }
  }

  checkOtp() {
    this.isOtp.next(((this.input1 != null && !isNaN(this.input1) && this.input1 >= 0 && this.input1 <= 9)
      && (this.input2 != null && !isNaN(this.input2) && this.input2 >= 0 && this.input2 <= 9)
      && (this.input3 != null && !isNaN(this.input3) && this.input3 >= 0 && this.input3 <= 9)
      && (this.input4 != null && !isNaN(this.input4) && this.input4 >= 0 && this.input4 <= 9)
      && (this.input5 != null && !isNaN(this.input5) && this.input5 >= 0 && this.input5 <= 9)
      && (this.input6 != null && !isNaN(this.input6) && this.input6 >= 0 && this.input6 <= 9)));
  }

  focusInput(event: KeyboardEvent, index: number, inputPrev: HTMLInputElement, inputNext: HTMLInputElement) {
    if (!(event.which >= 48 && event.which <= 57)) {
      this['input' + index] = null;
    }
    console.log(event);
    this.evenStringKeyUp.next(event);
    if (Number.isInteger(+event.key)) {
      if (this['input' + index] && this['input' + index] != '') {
        inputNext.focus();
      }
      this.isKeyPress = false;
    }
    this.checkOtp();
  }

  focus(event: KeyboardEvent, index: number, inputPrev: HTMLInputElement, inputNext: HTMLInputElement) {
    if (!(event.which >= 48 && event.which <= 57)) {
      this['input' + index] = null;
    }
    console.log(event);
    this.evenStringKeyDown.next(event);
    this.isFocus = false;

    if (Number.isInteger(+event.key)) {
      if (this['input' + index] && this['input' + index] != '' && this.isKeyPress) {
        inputNext.focus();
        this.isFocus = true;
      }
      if (this['input' + index] && !this.isKeyPress) {
        this['input' + index] = null;
      }
      this.isKeyPress = true;
    }
    if ((event.key == 'Backspace' || event.key == 'Delete')) {
      if (this['input' + index] == null) {
        inputPrev.focus();
      } else if (this['input' + index] == '') {
        this['input' + index] = null;
        inputPrev.focus();
      } else {
        this['input' + index] = null;
      }
    }
  }

  test(event) {
    console.log(event);
  }

  testKeyDown($event: KeyboardEvent) {
    console.log($event.keyCode);
    console.log(String.fromCharCode($event.keyCode));
    console.log($event.which);
    console.log(String.fromCharCode($event.which));
  }

  testKeyUp($event: KeyboardEvent, value: any) {
    console.log($event);
    console.log(value);
    console.log(replaceVietnamese(value));
  }

  addSpace($event: KeyboardEvent, a: any) {
    // a.value = a.value + ' ';
    if ($event.which == 8) {
      if (this.timeOut) {
        clearTimeout( this.timeOut);
      }
      this.timeOut = setTimeout(() => {
        a.value = a.value.slice(0, a.value.length - 1);
      }, 100);
    }
    if ($event.which == 231 && this.timeOut) {
     clearTimeout( this.timeOut);
    }
    return false;
  }

  deleteSpace($event: KeyboardEvent, a: any) {
    // a.value = replaceVietnamese(a.value);
    console.log($event.key);
    if (($event.which >= 48 && $event.which <= 57) || ($event.which >= 65 && $event.which <= 90)) {
      a.value = a.value + $event.key;
    }
  }

  qqq($event: KeyboardEvent) {
    this.evenStringKeyDown.next($event);
  }

  ppp($event: KeyboardEvent) {
    this.evenStringKeyUp.next($event);
  }
}
