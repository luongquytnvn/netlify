import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
// loginForm: FormGroup;
// 	loading = false;
// 	errors: any = [];
// 	isClickedLogin: boolean = false;
// 	// readOnly: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
// 	width: BehaviorSubject<number> = new BehaviorSubject<number>(0);
// 	height: BehaviorSubject<number> = new BehaviorSubject<number>(0);

// 	@HostBinding('class') classes = '';
// 	@Input() iconType: '' | 'brand';
// 	language: LanguageFlag;

// 	private unsubscribe: Subject<any>;

// 	// private returnUrl: any;

// 	// Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

// 	/**
// 	 * Component constructor
// 	 *
// 	 * @param router: Router
// 	 * @param auth: AuthService
// 	 * @param authNoticeService: AuthNoticeService
// 	 * @param translate: TranslateService
// 	 * @param store: Store<AppState>
// 	 * @param fb: FormBuilder
// 	 * @param cdr
// 	 * @param route
// 	 * @param accountService
// 	 * @param translationService
// 	 * @param trackingProcessService
// 	 * @param toastr
// 	 * @param $localStorage
// 	 */
// 	constructor(
// 		private router: Router,
// 		public auth: AuthService,
// 		private authNoticeService: AuthNoticeService,
// 		public translate: TranslateService,
// 		private store: Store<AppState>,
// 		private fb: FormBuilder,
// 		private cdr: ChangeDetectorRef,
// 		private route: ActivatedRoute,
// 		private accountService: AccountService,
// 		private translationService: TranslationService,
// 		private trackingProcessService: TrackingProcessService,
// 		private toastr: ToastrService,
// 		private $localStorage: LocalStorageService,
// 	) {
// 		this.unsubscribe = new Subject();
// 		DEMO_PARAMS.USERNAME = this.$localStorage.retrieve('originalUsr');
// 	}

// 	/**
// 	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
// 	 */

// 	/**
// 	 * On init
// 	 */
	ngOnInit(): void {
// 		this.initLoginForm();
// 		// this.route.queryParams.subscribe(params => {
// 		// 	this.returnUrl = params.returnUrl || '/';
// 		// });
	}

// 	/**
// 	 * On destroy
// 	 */
// 	ngOnDestroy(): void {
// 		this.authNoticeService.setNotice(null);
// 		this.unsubscribe.next();
// 		this.unsubscribe.complete();
// 		this.loading = false;
// 	}

// 	/**
// 	 * Form initalization
// 	 * Default params, validators
// 	 */
// 	initLoginForm() {
// 		// demo message to show
// 		// if (!this.authNoticeService.onNoticeChanged$.getValue()) {
// 		// 	const initialNotice = `Use account
// 		// 	<strong>${DEMO_PARAMS.USERNAME}</strong> and password
// 		// 	<strong>${DEMO_PARAMS.PASSWORD}</strong> to continue.`;
// 		// 	this.authNoticeService.setNotice(initialNotice, 'info');
// 		// }

// 		this.loginForm = this.fb.group({
// 			username: ['', Validators.compose([
// 				Validators.required,
// 				Validators.minLength(1),
// 				Validators.maxLength(50)
// 			])
// 			],
// 			password: ['', Validators.compose([
// 				Validators.required,
// 				Validators.minLength(1),
// 				Validators.maxLength(50)
// 			])
// 			]
// 		});

// 		this.setFirst();
// 		$(window).on('resize', () => {
// 			this.setFirst();
// 		});
// 	}

// 	/**
// 	 * Form Submit
// 	 */
// 	submit() {
// 		// Object.keys(formGroup.controls).forEach((key) => {
// 		// 	formGroup.get(key).setValue(formGroup.get(key).value.trim())
// 		// });
// 		this.clearData();
// 		this.isClickedLogin = true;
// 		const controls = this.loginForm.controls;
// 		/** check form */

// 		if (this.loginForm.invalid) {
// 			Object.keys(controls).forEach(controlName =>
// 				controls[controlName].markAsTouched()
// 			);
// 			return;
// 		}

// 		this.trackingProcessService.set(true);

// 		this.loading = true;

// 		const authData = {
// 			username: controls.username.value.toUpperCase(),
// 			password: controls.password.value
// 		};
// 		this.auth
// 			.loginNew(authData.username, authData.password)
// 			.pipe(
// 				flatMap(user => {
// 					if (user != null && user.changePassword == 'PENDING') {
// 						this.router.navigateByUrl('/auth/first-change-password').then();
// 						return;
// 					}
// 					return (user != null) ? this.accountService.identity(true) : of(null);
// 				}),
// 				tap(user => {
// 					if (user) {
// 						this.store.dispatch(new Login({authToken: user.accessToken}));
// 						// this.router.navigateByUrl(this.returnUrl); // Main page
// 						this.router.navigateByUrl('/').then(); // Main page
// 					} else {
// 					}
// 				}),
// 				takeUntil(this.unsubscribe),
// 				finalize(() => {
// 					this.$localStorage.store('originalUsr', this.loginForm.controls.username.value);
// 					this.loading = false;
// 					this.isClickedLogin = false;
// 					this.trackingProcessService.set(false);
// 					this.cdr.markForCheck();
// 				})
// 			)
// 			.subscribe(() => this.toastr.clear());
// 	}

// 	/**
// 	 * Checking control validation
// 	 *
// 	 * @param controlName: string => Equals to formControlName
// 	 * @param validationType: string => Equals to valitors name
// 	 */
// 	isControlHasError(controlName: string, validationType: string): boolean {
// 		const control = this.loginForm.controls[controlName];
// 		if (!control) {
// 			return false;
// 		}

// 		return control.hasError(validationType) && (control.dirty || control.touched);
// 	}

// 	/**
// 	 * Set language
// 	 *
// 	 */
// 	setLanguage() {
// 		let currentLanguage = this.translationService.getSelectedLanguage();
// 		currentLanguage = ('en' == currentLanguage) ? 'vn' : 'en';
// 		this.translationService.setLanguage(currentLanguage);
// 	}

// 	setFirst() {
// 		$(document).ready(() => {
// 			const c3 = $('.bg-login');
// 			const c4 = $('.sb-login-custom-form-child');
// 			const c5 = $('.bg-container');
// 			if (window.innerHeight < (window.screen.height * 45 / 100)) {
// 				this.auth.isScroll.next(true);
// 				this.auth.footer.next(window.innerHeight - window.screen.height);
// 			} else {
// 				this.auth.isScroll.next(false);
// 				this.auth.footer.next(0);
// 			}
// 			c5.css('background-image', 'url(assets/media/bg/background_resize_PC.png)');

// 			if (window.innerWidth > 1024) {
// 				this.auth.isMobile.next(false);
// 				if (this.auth.isScroll.getValue()) {
// 					if (c5.height() >= window.screen.height) {
// 						c3.height(c5.height());
// 					} else {
// 						c3.height(window.screen.height);
// 					}
// 				} else {
// 					c3.height(c5.height());
// 				}
// 				c3.width(c3.height() * 58 / 100);
// 				this.auth.widthBgLogin.next(c3.height() * 58 / 100);
// 				this.auth.heightBgLogin.next(c3.height());

// 			} else if (window.innerWidth > 575 || window.innerWidth > window.innerHeight) {
// 				if (this.auth.isScroll.getValue()) {
// 					if (c5.height() >= window.screen.height) {
// 						c3.height(c5.height());
// 					} else {
// 						c3.height(window.screen.height);
// 					}
// 				} else {
// 					c3.height(c5.height());
// 				}
// 				this.auth.isMobile.next(false);
// 				c3.width(c3.height() * 45 / 100);
// 				this.auth.widthBgLogin.next(c3.height() * 45 / 100);
// 				this.auth.heightBgLogin.next(c3.height());
// 			} else {
// 				c5.css('background-image', 'url(assets/media/bg/background_resize_mobile.png)');
// 				if (this.auth.isScroll.getValue()) {
// 					if (c5.height() >= window.screen.height) {
// 						c3.height(c5.height());
// 					} else {
// 						c3.height(window.screen.height);
// 					}
// 				} else {
// 					c3.height(c5.height());
// 				}
// 				this.auth.isMobile.next(true);
// 				c3.width(window.innerWidth);
// 				this.auth.widthBgLogin.next(window.innerWidth);
// 				this.auth.heightBgLogin.next(c3.height());
// 			}
// 			c4.find('*').css('font-size', Math.floor(this.auth.widthBgLogin.getValue() * 3.4 / 100) + 'px');

// 		});
// 	}

// 	clearUser() {
// 		this.loginForm.controls.username.setValue(null);
// 		this.loginForm.updateValueAndValidity();
// 	}

// 	clearPassword() {
// 		this.loginForm.controls.password.setValue(null);
// 		this.loginForm.updateValueAndValidity();
// 	}

// 	clearData() {
// 		// clear passbooks
// 		this.store.dispatch(new GetListPassbookSuccess({
// 			passbooks: [],
// 		}));

// 		//clear list account in open passbook
// 		this.store.dispatch(new ListAccountDepositLoaded({
// 			accounts: null,
// 		}));
// 	}

// 	register() {
// 		this.router.navigate(['/auth/register']).then();
// 	}

// 	forgotPassword() {
// 		this.router.navigate(['/auth/forgot-password']).then();
// 	}

// 	get getFontSize() {
// 		return Math.floor((this.auth.widthBgLogin.getValue()) * 3.4 / 100);
// 	}

// 	// changeReadOnly() {
// 	// 	this.readOnly.next(false);
// 	// }

// 	focusout() {
// 		this.loginForm.updateValueAndValidity();
// 	}

// 	focusin() {
// 		this.loginForm.setErrors(null);
// 	}
}
