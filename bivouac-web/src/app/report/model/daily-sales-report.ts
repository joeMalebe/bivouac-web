import { GuestOccupation } from "./guest-occupation";

export interface DailySalesReport {
    occupations:GuestOccupation[],
    noOccupationsDay:boolean,
    resturantSales:number,
    currency:string,
    dateCaptured:Date,
    capturedBy:string
}
