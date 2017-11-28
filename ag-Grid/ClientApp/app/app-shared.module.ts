import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// ag-grid
import { AgGridModule } from "ag-grid-angular/main";
// application
import { AppComponent } from "./app.component";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AgGridModule.withComponents([])
    ]
})
export class AppModuleShared {
}
