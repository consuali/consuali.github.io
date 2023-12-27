import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorMessageComponent } from './pages/error-message/error-message.component';
import { MemoryCardComponent } from './components/memory-card/memory-card.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FormsModule } from '@angular/forms';

// TODO: routing working in production
// https://angular.io/api/common/PathLocationStrategy

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About me' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'Projects' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: '**',
    component: ErrorMessageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ErrorMessageComponent,
    MemoryCardComponent,
    BlogComponent,
  ],
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false }), BrowserModule,FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
