import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Liga } from 'src/app/models/liga';
import { LigaService } from 'src/app/services/liga.service';
import { LigaDialogComponent } from '../dialogs/liga-dialog/liga-dialog.component';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];
  dataSource: MatTableDataSource<Liga>;
  subscription: Subscription;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  

  constructor(private ligaService: LigaService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();

  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();

  }

  public loadData() {
    this.subscription = this.ligaService.getAllLigas()
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
    const dialogRef = this.dialog.open(LigaDialogComponent, {data: {id, naziv, oznaka}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed()
      .subscribe(result => {
        if(result===1) {
          this.loadData();
        }
      });
  }

  selectRow(row: any) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue; //    JaBuKa    --> JaBuKa --> jabuka
  }

}
