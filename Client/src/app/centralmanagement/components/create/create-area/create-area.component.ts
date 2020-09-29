import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.scss']
})
export class CreateAreaComponent implements OnInit {
  userForm: FormGroup;
  errored: boolean;
  serviceErrors: string;
  values: any;
  numberValue: number;

  // ShiftDetails[]
  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.userForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      itemCreate: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  revert() {
    this.userForm.reset();
  }
  get fval() {
    return this.userForm.controls;
  }

  create() {
    // this.spinner.show();


    }
  }