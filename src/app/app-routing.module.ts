import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectBooksComponent } from './subject-books/subject-books.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PopularSubjectsComponent } from './popular-subjects/popular-subjects.component';
import { HistoryComponent } from './history/history.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { HorrorComponent } from './horror/horror.component';
import { ThrillerComponent } from './thriller/thriller.component';
import { MajicComponent } from './majic/majic.component';


const appRoutes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'search-results/:keyword/:offset', component: SearchResultsComponent },
{ path: 'subject/:subject/:offset', component: PopularSubjectsComponent },
{ path: 'subject/:subject', component: SubjectBooksComponent },
{ path: 'History', component: HistoryComponent },
{ path: 'Fantasy', component: FantasyComponent},
{ path: 'Horror', component: HorrorComponent},
{ path: 'Thriller', component: ThrillerComponent},
{ path: 'Majic', component: MajicComponent}


];

@NgModule({
imports: [
RouterModule.forRoot(appRoutes)
],
exports: [
RouterModule
]
})
export class AppRoutingModule { }