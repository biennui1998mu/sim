import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './share/navbar/navbar.component';
import {FriendComponent} from './mainpage/friend/friend.component';
import {CreateStatusComponent} from './mainpage/create-status/create-status.component';
import {MatDialogModule} from '@angular/material/dialog';
import {InboxComponent} from './share/inbox/inbox.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './share/login/login.component';
import {HomepageComponent} from './mainpage/homepage.component';
import {LeftsideComponent} from './mainpage/leftside/leftside.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EventComponent } from './mainpage/event/event.component';
import {StatusService} from "./share/services/status.service";
import { StatusComponent } from './mainpage/status/status.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StatusFormComponent } from './share/status-form/status-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FriendComponent,
    CreateStatusComponent,
    InboxComponent,
    LoginComponent,
    HomepageComponent,
    LeftsideComponent,
    EventComponent,
    StatusComponent,
    StatusFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [
    StatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
