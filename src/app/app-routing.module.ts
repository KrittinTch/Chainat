import { TempleService } from './pages/temple/temple.service';
import { ReviewService } from './pages/review/review.service';
import { PlaceService } from './pages/place/place.service';
import { HistoryService } from './pages/history/history.service';
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { AuthGuardService } from "ng6-md-auth";
import { HistoryComponent } from "./pages/history/history.component";
import { ReviewComponent } from "./pages/review/review.component";
import { TempleComponent } from "./pages/temple/temple.component";
import { OtherplaceComponent } from "./pages/otherplace/otherplace.component";
import { RestaurantComponent } from "./pages/restaurant/restaurant.component";
import { CafeComponent } from "./pages/cafe/cafe.component";
import { PlaceComponent } from './pages/place/place.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot", component: ForgotComponent },
  { path: "history", component: HistoryComponent, resolve: [ HistoryService ]},
  { path: "review", component: ReviewComponent , resolve: [ ReviewService ]},
  { path: "temple", component: TempleComponent, resolve: [ TempleService ]},
  { path: "otherplace", component: OtherplaceComponent },
  { path: "restaurant", component: RestaurantComponent },
  { path: "cafe", component: CafeComponent },
  { path: "place", component: PlaceComponent, resolve: [ PlaceService ]},
  { path: "contact", component: ContactComponent },
  { path: "admin", component: AdminComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
