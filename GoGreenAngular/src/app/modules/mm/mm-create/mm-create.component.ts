import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-mm-create',
  templateUrl: './mm-create.component.html',
  styleUrls: ['./mm-create.component.css']
})
export class MmCreateComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createMMForm = this.fb.group({

    })
  }

}
