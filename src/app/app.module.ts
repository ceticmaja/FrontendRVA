import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoziloComponent } from './components/primer-components/vozilo/vozilo.component';
import { AutomobilComponent } from './components/primer-components/automobil/automobil.component';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';
import { NacionalnostComponent } from './components/nacionalnost/nacionalnost.component';
import { LigaComponent } from './components/liga/liga.component';
import { TimComponent } from './components/tim/tim.component';
import { IgracComponent } from './components/igrac/igrac.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NacionalnostDialogComponent } from './components/dialogs/nacionalnost-dialog/nacionalnost-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LigaDialogComponent } from './components/dialogs/liga-dialog/liga-dialog.component';
import { TimDialogComponent } from './components/dialogs/tim-dialog/tim-dialog.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { IgracDialogComponent } from './components/dialogs/igrac-dialog/igrac-dialog.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    HomeComponent,
    AuthorComponent,
    AboutComponent,
    NacionalnostComponent,
    LigaComponent,
    TimComponent,
    IgracComponent,
    NacionalnostDialogComponent,
    LigaDialogComponent,
    TimDialogComponent,
    IgracDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSortModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
