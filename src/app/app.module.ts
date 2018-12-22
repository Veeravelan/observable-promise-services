import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { IncharchComponent } from './incharch/incharch.component';
import { StudentServiceService } from './_services/student-service.service';
import { LoginComponent } from './login/login.component';
import { TokenauthService } from './tokenauth.service';

const routerArray: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'incharch', component: IncharchComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    IncharchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerArray),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    StudentServiceService,
    {
      provide: APP_INITIALIZER,
      useFactory: startUpServiceFactory,
      deps: [TokenauthService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routerComponents = [StaffComponent, StudentComponent];
export function startUpServiceFactory(
  startupService: TokenauthService
): Function {
  return () => startupService.getToken();
}
