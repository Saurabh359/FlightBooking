export class Ticket{
    id : number;
    starting : string; 
    destination : string;
    roundTrip : boolean;
    departureDate : Date;
    returnDate : Date;
    passengerCount : number; 
    classType : string;

    constructor(
        id : number,
        starting : string,
        destination : string,
        roundTrip : boolean,
        departureDate : Date,
        returnDate : Date,
        passengerCount : number, 
        classType : string){

            this.id= id;
            this.starting= starting;
            this.destination= destination;
            this.roundTrip= roundTrip;
            this.departureDate= departureDate;
            this.returnDate= returnDate;
            this.passengerCount= passengerCount;
            this.classType= classType;
        }
}