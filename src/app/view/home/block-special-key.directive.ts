import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
	selector: '[blockSpecialKey]'
})
export class BlockSpecialKeyDirective {
	@Input() regex: string = '^[0-9a-zA-Z ]+$';
	@Input() maxLength: number = 255;
	@Input() formValue: any;

	constructor(private el: ElementRef) {
	}

	@HostListener('keypress', ['$event'])
	onKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			return false;
		}
		if (event.currentTarget['value'] !== '' && event.currentTarget['value'].length >= this.maxLength) {
			return false;
		}
		if (event.currentTarget['value'] === '' && event.key === ' ') {
			return false;
		}
		if (this.regex) {
			return (new RegExp(this.regex)).test(event.key);
		} else {
			return true;
		}
	}

	@HostListener('keydown', ['$event'])
	onKeydown(event: KeyboardEvent) {
		this.formValue = this.formValue + ' ';
	}

	@HostListener('paste', ['$event'])
	blockPaste(event: ClipboardEvent) {
		event.preventDefault();
		let currentData = this.formValue.value ? this.formValue.value : '';
		let data = (currentData + event.clipboardData.getData('text')).slice(0, this.maxLength).replace(/(\r\n|\n|\r)/g, ' ').trim();
		// this.formValue.setValue(data);
	}
}
