import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { error } from 'protractor';
import { Subscription } from 'rxjs';
import { Liga } from 'src/app/models/liga';
import { Tim } from 'src/app/models/tim';
import { TimService } from 'src/app/services/tim.service';
import { TimDialogComponent } from '../dialogs/tim-dialog/tim-dialog.component';

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'naziv', 'osnovan', 'sediste', 'liga', 'actions'];
  dataSource: MatTableDataSource<Tim>;
  timSubscription: Subscription;
  selektovanTim: Tim;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  
  constructor(public timService: TimService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.timSubscription.unsubscribe();
  }

  public loadData() {
    this.timSubscription = this.timService.getAllTims()
      .subscribe((data) => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        // pretraga po nazivu ugnježdenog objekta
        this.dataSource.filterPredicate = (data, filter: string) => {
          const accumulator = (currentTerm, key) => {
            return key === 'liga' ? currentTerm + data.liga.naziv : currentTerm + data[key];
          };
          const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        // sortiranje po nazivu ugnježdenog objekta
        this.dataSource.sortingDataAccessor = (data, property) => {
          switch (property) {
            case 'liga': return data.liga.naziv.toLocaleLowerCase();
            default: return data[property];
          }
        };

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
  }

  public openDialog(flag: number, id?: number, naziv?: string, osnovan?: Date, sediste?: string, liga?: Liga) {
    const dialogRef = this.dialog.open(TimDialogComponent,
      {data: {id, naziv, osnovan, sediste, liga}});
      dialogRef.componentInstance.flag = flag;

      dialogRef.afterClosed().subscribe(result => {
        if(result === 1) {
          this.loadData();
        }
      })
  }

  selectRow(row: any) {
    //console.log(row);
    this.selektovanTim = row;
    //console.log(this.selektovanTim);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue; //    JaBuKa    --> JaBuKa --> jabuka
  }

}
