import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Liga } from 'src/app/models/liga';
import { Tim } from 'src/app/models/tim';
import { LigaService } from 'src/app/services/liga.service';
import { TimService } from 'src/app/services/tim.service';

@Component({
  selector: 'app-tim-dialog',
  templateUrl: './tim-dialog.component.html',
  styleUrls: ['./tim-dialog.component.css']
})
export class TimDialogComponent implements OnInit, OnDestroy {

  ligas: Liga[];
  public flag: number;
  ligaSubscription: Subscription;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<TimDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Tim,
              public timService: TimService,
              public ligaService: LigaService) { }
  ngOnDestroy(): void {
    this.ligaSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ligaSubscription = this.ligaService.getAllLigas()
      .subscribe(ligas => {
        this.ligas = ligas
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  public add(): void {
    this.timService.addTim(this.data)
      .subscribe(()=> {
        this.snackBar.open('Uspešno dodat tim', 'U redu', {
          duration: 2500
        })
      }),
      (error: Error) => {
        console.log(error.name + '-->' + error.message);
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
          duration: 2500
        });
      };
  }

  public update(): void {
    this.timService.updateTim(this.data)
    .subscribe(()=> {
      this.snackBar.open('Uspešno modifikovan tim: ' + this.data.id, "U redu", {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + '-->' + error.message);
      this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
        duration: 2500
      });
    };
  }

  public delete(): void {
    this.timService.deleteTim(this.data.id)
      .subscribe(() => {
        this.snackBar.open('Uspešno obrisan tim: ' + this.data.id, "U redu", {
          duration: 2500
        })
      }),
      (error: Error) => {
        console.log(error.name + '-->' + error.message);
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
          duration: 2500
        });
      };
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!', 'Zatvori', {
      duration: 1500
    });
  }


}
