import { SlideshowModule } from 'ng-simple-slideshow';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderToolbarComponent } from "./components/header-toolbar/header-toolbar.component";
import { environment } from "src/environments/environment";
import { AuthModule } from "ng6-md-auth";
import { HistoryComponent } from './pages/history/history.component';
import { ReviewComponent } from './pages/review/review.component';
import { TempleComponent } from './pages/temple/temple.component';
import { OtherplaceComponent } from './pages/otherplace/otherplace.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CafeComponent } from './pages/cafe/cafe.component';
import { PlaceComponent } from './pages/place/place.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ModalAddreviewComponent } from './pages/modal-addreview/modal-addreview.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminComponent } from './pages/admin/admin.component';




const apiSrvCfg = environment;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ForgotComponent,
    HeaderToolbarComponent,
    HistoryComponent,
    ReviewComponent,
    TempleComponent,
    OtherplaceComponent,
    RestaurantComponent,
    CafeComponent,
    PlaceComponent,
    ContactComponent,
    ModalAddreviewComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    HttpClientModule,
    NgxSpinnerModule,
    SlideshowModule,
    SlideshowModule,
    MatDialogModule,
    AuthModule.forRoot(apiSrvCfg)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddreviewComponent],
})
export class AppModule {}
