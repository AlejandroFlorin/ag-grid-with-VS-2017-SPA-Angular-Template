import { Component } from "@angular/core";

import { GridOptions } from "ag-grid/main";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
    ]
})
export class AppComponent {
    public gridOptions: GridOptions;
    public rowData: any[];
    public columnDefs: any[];

    constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            }
        };
        this.columnDefs = [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" }
        ];
        this.rowData = [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "911", price: 72000 }
        ];
    }
}
