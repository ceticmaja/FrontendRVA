import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'protractor';
import { Subscription } from 'rxjs';
import { Igrac } from 'src/app/models/igrac';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { IgracService } from 'src/app/services/igrac.service';
import { NacionalnostService } from 'src/app/services/nacionalnost.service';

@Component({
  selector: 'app-igrac-dialog',
  templateUrl: './igrac-dialog.component.html',
  styleUrls: ['./igrac-dialog.component.css']
})
export class IgracDialogComponent implements OnInit {

  nacionalnosts: Nacionalnost[];
  public flag: number;
  nacionalnostSubscription: Subscription;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<IgracDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Igrac,
              public igracService: IgracService,
              public nacionalnostService: NacionalnostService) { }

  ngOnInit(): void {
    this.nacionalnostSubscription = this.nacionalnostService.getAllNacionalnosts()
    .subscribe(nacionalnosts => {
      this.nacionalnosts = nacionalnosts;
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
    }
  }

  ngOnDestroy() {
    this.nacionalnostSubscription.unsubscribe();
  }

  compareTo(a, b) {
    return a.id === b.id;
  }

  public add(): void {
    this.igracService.addIgrac(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspešno dodat igrac!', 'U redu', {
          duration: 2500
        })
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Dogodila se greška!', 'Zatvori', {
          duration: 1500
        })
      };
  }

  public update(): void {
    this.igracService.updateIgrac(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspešno modifikovan igrac!', 'U redu', {
          duration: 2500
        })
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Dogodila se greška!', 'Zatvori', {
          duration: 1500
        })
      };
  }

  public delete(): void {
    this.igracService.deleteIgrac(this.data.id)
    .subscribe(() => {
      this.snackBar.open('Uspešno obrisan igrac!', 'U redu', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greška!', 'Zatvori', {
        duration: 1500
      })
    };
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!', 'Zatvori', {
      duration: 1500
    })
  }




}
