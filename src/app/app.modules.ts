import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { AgChartsAngularModule } from 'ag-charts-angular';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AgChartsAngularModule // Import the module here, not in providers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
