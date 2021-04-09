export class Traveler{
    public name : string;
    public image: string;
    public detail: string;
    public active: boolean;
  
    constructor(a: string, b: string, c:string, d: boolean){
      this.name=a;
      this.image=b;
      this.detail=c;
      this.active=d;
    }
}