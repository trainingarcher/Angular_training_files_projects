import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { ColordishComponent } from './colordish/colordish.component';
import { TaskmasterComponent } from './taskmaster/taskmaster.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FriendlistComponent,
    ColordishComponent,
    TaskmasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
