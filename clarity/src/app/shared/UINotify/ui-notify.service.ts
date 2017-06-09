import { ToastyService, ToastyConfig, ToastOptions,  } from 'ng2-toasty';
import { Injectable } from '@angular/core';

@Injectable()
export class NotifyService {
	constructor(
		private toastyService: ToastyService,
		private toastyConfig: ToastyConfig,
	) {}

	send(options: any) {
		this.executeNotify(options.type, this.getOptions(options));
	}

	private getOptions(options: any = {}): ToastOptions {
		let opt: ToastOptions = {
            title: options.title || "Error",
            msg: options.msg || "",
            showClose: options.showClose || true,
            timeout: options.timeout || 5000,
            onAdd: options.onAdd || function(){},
            onRemove: options.onRemove || function(){},
            theme: options.theme || 'bootstrap',
		}
		return opt;
	}

	private executeNotify(type: string, options: ToastOptions) {
		switch (type) {
			case 'default': this.toastyService.default(options); break;
			case 'info': this.toastyService.info(options); break;
			case 'success': this.toastyService.success(options); break;
			case 'wait': this.toastyService.wait(options); break;
			case 'warning': this.toastyService.warning(options); break;
			default: this.toastyService.error(options); break;
		}
	}
}
