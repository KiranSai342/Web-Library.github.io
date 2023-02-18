import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PopularSubjectsComponent } from './popular-subjects/popular-subjects.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SubjectBooksComponent } from './subject-books/subject-books.component';

import { HistoryComponent } from './history/history.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { HorrorComponent } from './horror/horror.component';
import { ThrillerComponent } from './thriller/thriller.component';
import { MajicComponent } from './majic/majic.component';



const appRoutes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'search-results/:keyword/:offset', component: SearchResultsComponent },
{ path: 'subject/:subject/:offset', component: PopularSubjectsComponent },
{ path: 'History', component: HistoryComponent},
{ path: 'Fantasy', component: FantasyComponent},
{ path: 'Horror', component: HorrorComponent},
{ path: 'Thriller', component: ThrillerComponent},
{ path: 'Majic', component: MajicComponent}

];

@NgModule({
declarations: [
AppComponent,

HomeComponent,
SearchResultsComponent,
PopularSubjectsComponent,
BookDetailsComponent,
PaginationComponent,
SearchResultsComponent,
SubjectBooksComponent,

HistoryComponent,
FantasyComponent,
HorrorComponent,
ThrillerComponent,
MajicComponent,

],
imports: [
BrowserModule,
RouterModule.forRoot(appRoutes),
HttpClientModule,FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }