import { Component, OnInit, Inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  spinner :NgxSpinnerService= Inject(NgxSpinnerService);

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

    //setTimeout(() => this.hideSpinner(spinnerNameType), 1000);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  BallAtom = "s1",
  BallScaleMultiple = "s2",
  BallSpinClockwiseFadeRotating = "s3"
}
