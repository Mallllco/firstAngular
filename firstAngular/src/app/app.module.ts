import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, QuoteComponent],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule {}
