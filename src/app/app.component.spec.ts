import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';

describe('AppComponent', () => {
 beforeEach(async () => {
   await TestBed.configureTestingModule({
     imports: [RouterTestingModule, HttpClientModule],
     declarations: [AppComponent, BookListComponent],
   }).compileComponents();
 });

 it('should create the app', () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app).toBeTruthy();
 });

 it(`should have as title 'mynewapp'`, () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app.title).toEqual('mynewapp');
 });

});
/* Archivo src/app/app.component.spec.ts */