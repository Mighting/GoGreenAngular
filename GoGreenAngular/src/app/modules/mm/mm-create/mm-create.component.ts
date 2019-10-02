import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MicroMarket} from "../../../shared/models/micro-market";
import {MicroMarketService} from "../shared/micro-market.service";


@Component({
  selector: 'app-mm-create',
  templateUrl: './mm-create.component.html',
  styleUrls: ['./mm-create.component.css']
})
export class MmCreateComponent implements OnInit {
  private createMMForm: FormGroup;

  // private fb: FormBuilder;

  constructor(private fb: FormBuilder, private mmsrv: MicroMarketService) {
    // this.fb = _fb;
  }

  ngOnInit() {
    this.createMMForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      floorNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.createMMForm.valid) {

      let mm: MicroMarket = {
        email: this.createMMForm.value.email,
        firstName: this.createMMForm.value.firstName,
        floorNumber: this.createMMForm.value.floorNumber,
        houseNumber: this.createMMForm.value.houseNumber,
        lastName: this.createMMForm.value.lastName,
        microMarketID: 0,
        openingHoursEnd: undefined,
        openingHoursStart: undefined,
        orderHoursEnd: undefined,
        orderHoursStart: undefined,
        password: this.createMMForm.value.password,
        phoneNumber: this.createMMForm.value.phoneNumber,
        productList: [],
        streetName: this.createMMForm.value.streetName,
        zipCode: this.createMMForm.value.zipCode
      };

      this.mmsrv.postMicroMarket(mm).subscribe((res: any) => {
        alert(res);
      }, error => {
        alert("Error " + error.message);
        console.log(error);
      });

    }
  }
}
