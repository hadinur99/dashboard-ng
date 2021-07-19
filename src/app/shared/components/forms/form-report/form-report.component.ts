import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms'


@Component({
  selector: 'app-form-report',
  templateUrl: './form-report.component.html',
  styleUrls: ['./form-report.component.scss']
})
export class FormReportComponent implements OnInit {

  myForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([]) 
    })

  }

  get phoneForms(){
    return this.myForm.get('phones') as FormArray
  }

  addPhone(){
    const phone = this.fb.group({
      area: '',
      prefix: '',
      line: []
    })

    this.phoneForms.push(phone)
  }

  deletePhone(idx:any){
    console.log(idx)
    this.phoneForms.removeAt(idx)
  }

}
