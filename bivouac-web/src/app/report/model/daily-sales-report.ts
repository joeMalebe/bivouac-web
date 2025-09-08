import { GuestOccupation } from "./guest-occupation";

export interface DailySalesReport {
    occupations:GuestOccupation[],
    noOccupationsDay:boolean,
    resturantSales:number,
    dateCaptured:Date,
    capturedBy:string
}
