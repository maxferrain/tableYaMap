import { Component, OnInit } from '@angular/core';
import {District, Region, Route, Service} from './table-data.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
  providers: [Service]
})
export class TableDataComponent implements OnInit {

  // constructor() { }
  districts: District[];
  regions: Region[];
  routes: Route[];
  summRoutes: Route[];

  summRoutesForRegion: Route[];

  regionsDataSourceStorage: any;
  routesDataSourceStorage: any;

  constructor(private service: Service) {
    // service.countRouForReg();

    this.districts = service.getDistricts();
    this.regions = service.getRegions();
    this.routes = service.getRoutes();

    this.summRoutes = service.getRoutes();
    this.summRoutesForRegion = service.getRoutes();

    this.regionsDataSourceStorage = [];
    this.routesDataSourceStorage = [];
  }

  completedValue(rowData) {
    return rowData.Status === "Completed";
  }

  getRegions(key) {
    let item = this.regionsDataSourceStorage.find((i) => i.key === key);
    if (!item) {
      item = {
        key: key,
        dataSourceInstance: new DataSource({
          store: new ArrayStore({
            data: this.regions,
            key: "REGION_ID"
          }),
          filter: ["PARENT_REGION_ID", "=", key]
        })
      };
      this.regionsDataSourceStorage.push(item);
    }

    this.service.getDistricts();
    return item.dataSourceInstance;
  }

  getRoutes(key) {
    let item = this.routesDataSourceStorage.find((i) => i.key === key);
    if (!item) {
      item = {
        key: key,
        dataSourceInstance: new DataSource({
          store: new ArrayStore({
            data: this.routes,
            key: "ID"
          }),
          filter: ["PARENT_REGION_ID", "=", key]
        })
      };
      this.routesDataSourceStorage.push(item);
    }

    this.service.getDistricts();
    return item.dataSourceInstance;
  }

  calculateSalesAmount(rowData) {
    return (
      Number(rowData.VALUE_MEN_KID) +
      Number(rowData.VALUE_MEN_ADULT) +
      Number(rowData.VALUE_MEN_SENIOR) +
      Number(rowData.VALUE_WOMEN_ADULT) +
      Number(rowData.VALUE_WOMEN_KID) +
      Number(rowData.VALUE_WOMEN_SENIOR)
    );
  }


  ngOnInit(): void {
  }

}
