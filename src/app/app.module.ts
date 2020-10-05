import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './nav/nav.component';
import { HomeRepoComponent } from './home-repo/home-repo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    DateCountPipe,
    FormComponent,
    HomepageComponent,
    NavComponent,
    HomeRepoComponent,
    NotFoundComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
