import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    position: 'Manager',
    dateOfJoining: ''
  };
  submittedData: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.submittedData = { ...this.employee };
    }
    console.log('Form Submitted', form.value);
  }

  onReset(form: any): void {
    form.resetForm();
    this.submittedData = null;
    this.employee = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      position: 'Manager',
      dateOfJoining: ''
    };
  }

}
