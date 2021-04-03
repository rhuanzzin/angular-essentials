import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user-component/user.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { DebuggingButtonComponent } from './debugging-button/debugging-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    UserDetailComponent,
    CartComponentComponent,
    DebuggingButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
