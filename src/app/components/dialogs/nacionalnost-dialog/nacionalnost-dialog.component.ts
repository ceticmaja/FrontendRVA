import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'protractor';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { NacionalnostService } from 'src/app/services/nacionalnost.service';

@Component({
  selector: 'app-nacionalnost-dialog',
  templateUrl: './nacionalnost-dialog.component.html',
  styleUrls: ['./nacionalnost-dialog.component.css']
})
export class NacionalnostDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<NacionalnostDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Nacionalnost,
              public nacionalnostService: NacionalnostService) { }

  ngOnInit(): void {
  }


  public add(): void {
    this.nacionalnostService.addNacionalnost(this.data)
      .subscribe(data => {
        this.snackBar.open('Uspesno dodata nacionalnost: ' + this.data.naziv, 'U redu', {
          duration: 2500
      });
    }),
    (error: Error) => {
      console.log(error.name + '-->' + error.message);
      this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'U redu', {
        duration: 2500
    });
    };
  }

  public update(): void {
    this.nacionalnostService.updateNacionalnost(this.data)
      .subscribe(data => {
        this.snackBar.open('Uspenso modifikovana nacionalnost: ' + data.naziv, 'U redu', {
          duration: 2500
        });
      }),
      (error: Error) => {
        console.log(error.name + '-->' + error.message);
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
          duration: 2500
        });
      };
  }

  public delete(): void {
    this.nacionalnostService.deleteNacionalnost(this.data.id)
      .subscribe(data => {
        this.snackBar.open('Uspesno obrisan artikl', 'U redu', {
          duration: 2500
        });
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
    this.snackBar.open('Odustali ste od izmena', 'U redu', {
      duration: 1500
    });
  }

}
