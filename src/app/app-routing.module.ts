import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtrasComponent } from './Components/extras/extras.component';
import { FeaturesComponent } from './Components/features/features.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'main', redirectTo: '/'},
  {path:'extra', component: ExtrasComponent},
  {path:'feature', component: FeaturesComponent},
  {path:'feedback', component: FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
