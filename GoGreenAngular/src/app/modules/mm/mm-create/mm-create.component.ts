import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mm-create',
  templateUrl: './mm-create.component.html',
  styleUrls: ['./mm-create.component.css']
})
export class MmCreateComponent implements OnInit {
  private createMMForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createMMForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      floorNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
  };

  onSubmit() {
    if(this.createMMForm.valid) {

    }
  }
}
