import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {UsersComponent} from './users/users.component';
import {AddComponent} from './add/add.component';
import { HttpClientModule }    from '@angular/common/http';
import {SharedService} from './shared/shared.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './shared/common-service';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'add', component: AddComponent },
  {path:'edit', component: EditComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,   
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports:[RouterModule],
  providers: [SharedService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
