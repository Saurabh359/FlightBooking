import { TestBed } from "@angular/core/testing";
import { MainComponent } from "./main.component";

describe('Main Component',()=>{

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [MainComponent]
        }).compileComponents();
    })

    it('should create the main component', ()=>{
        const fixture= TestBed.createComponent(MainComponent);
        const app= fixture.componentInstance;
        expect(app).toBeTruthy();
    })

    it('should have app-banner tag',()=>{
        const fixture=TestBed.createComponent(MainComponent);
        const compiled= fixture.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('h1').textContent).toContain('Main Component');
    })

    it('should have value of check as true', ()=>{
        const fixture= TestBed.createComponent(MainComponent);
        const comp= fixture.componentInstance;
        expect(comp.check).toBeTrue();
        fixture.detectChanges();
        expect(comp.check).toBe(false,'this is correct');
    })

});


