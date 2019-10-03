import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MicroMarket} from "../../../shared/models/micro-market";
import {MicroMarketService} from "../shared/micro-market.service";
import {ZipCodeService} from "../../../shared/zip-code.service";
import {ZipCode} from "../../../shared/models/zip-code";


@Component({
  selector: 'app-mm-create',
  templateUrl: './mm-create.component.html',
  styleUrls: ['./mm-create.component.css']
})
export class MmCreateComponent implements OnInit {
  public createMMForm: FormGroup;

  constructor(private fb: FormBuilder, private mmsrv: MicroMarketService, private zipsrv: ZipCodeService) {
  }
  public zipcodes: ZipCode[] = [];

  ngOnInit() {
    this.createMMForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      floorNumber: [''],
      email: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['']
    });

    this.zipsrv.getZipcode().subscribe(success => {
      this.zipcodes = success;
      console.log(this.zipcodes);
    }, error => {
      console.log(error);
    });
  }

  // MM create
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
        phoneNumber: this.createMMForm.value.phone,
        products: [],
        streetName: this.createMMForm.value.address,
        zipCode: this.createMMForm.value.zipCode
      };
      this.mmsrv.postMicroMarket(mm).subscribe((res: any) => {
        //TODO Prety toast
      }, error => {
        console.log(error);
      });
    }
  }
}
