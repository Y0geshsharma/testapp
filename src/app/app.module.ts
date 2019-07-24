import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorOneComponent } from './test/color-one/color-one.component';
import { ColorTwoComponent } from './test/color-two/color-two.component';
import { ColorThreeComponent } from './test/color-three/color-three.component';
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AddEmpComponent,
    ColorOneComponent,
    ColorTwoComponent,
    ColorThreeComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot( [
      {path: '', component: TestComponent},
      {path: 'addemployee', component: AddEmpComponent }
    ]), FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/src/app/test'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
