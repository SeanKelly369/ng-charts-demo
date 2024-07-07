import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BarchartComponent } from "./barchart/barchart.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { AgChartsAngular } from "ag-charts-angular";

@NgModule({
    declarations: [
        AppComponent,
        BarchartComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [RouterOutlet, AgChartsAngular],
    bootstrap: [AppComponent]
})
export class AppModule {}