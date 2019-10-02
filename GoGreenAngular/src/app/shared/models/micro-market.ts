export interface MicroMarket {
  firstName: string;
  lastName: string;
  streetName: string;
  houseNumber: number;
  floorNumber: number;
  phoneNumber: number;
  email: string;
  password: string;

  // ID's
  microMarketID: number;
  zipCode: number;

  // Orders
  orderHoursStart: Date;
  orderHoursEnd: Date;
  openingHoursStart: Date;
  openingHoursEnd: Date;

  productList: any[];

}
