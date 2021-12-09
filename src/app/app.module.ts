import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component'; import {
CalculatorKeysComponent } from './calculator-keys/calculator-keys.component';
@NgModule({
declarations: [
AppComponent,
CalculatorComponent,
CalculatorKeysComponent
],
imports: [
BrowserModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
calculator.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
describe('CalculatorComponent', () => {
let component: CalculatorComponent;
let fixture: ComponentFixture<CalculatorComponent>;
beforeEach(async () => {
await TestBed.configureTestingModule({
declarations: [ CalculatorComponent ]
})
.compileComponents();
});
beforeEach(() => {
fixture = TestBed.createComponent(CalculatorComponent); component =
fixture.componentInstance; fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});
calculator.component.ts
import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-calculator',
templateUrl: './calculator.component.html',
styleUrls: ['./calculator.component.css'] })
export class CalculatorComponent {
}