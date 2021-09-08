import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { MatTableDataSource } from '@angular/material/table';
import { NacionalnostService } from 'src/app/services/nacionalnost.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NacionalnostDialogComponent } from '../dialogs/nacionalnost-dialog/nacionalnost-dialog.component';

@Component({
  selector: 'app-nacionalnost',
  templateUrl: './nacionalnost.component.html',
  styleUrls: ['./nacionalnost.component.css']
})
export class NacionalnostComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];
  dataSource: MatTableDataSource<Nacionalnost>;
  subscription: Subscription;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private nacionalnostService: NacionalnostService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();

  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();

  }

  public loadData() {
    this.subscription = this.nacionalnostService.getAllNacionalnosts()
    .subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
    }
  }

  public openDialog(flag: number, id?: number, naziv?: string, oznaka?: string) {
    const dialogRef = this.dialog.open(NacionalnostDialogComponent, {data: {id, naziv, oznaka}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed()
      .subscribe(result => {
        if(result===1) {
          this.loadData();
        }
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue; //    JaBuKa    --> JaBuKa --> jabuka
  }

}
