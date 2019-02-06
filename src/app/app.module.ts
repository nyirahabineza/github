// import{AlertsService} from './alert-service/alerts.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
// import { HttpClient } from 'selenium-webdriver/http';
import { StrikethroughDirective } from './strikethrough.directive';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import{NgModule} from '@angular/core'
// import { DateCountPipe } from './date-count.pipe';
const routes:Routes=[
  // {path:"users",component:UserComponent},
  {path:"about",component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    StrikethroughDirective,
    AboutComponent,
    // DateCountPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClient,
    RouterModule.forRoot(routes)
    
  ],
  // providers: [AlertsService],//add service to providers
  bootstrap: [AppComponent]
})
export class AppModule { 

}