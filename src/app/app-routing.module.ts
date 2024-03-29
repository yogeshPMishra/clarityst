import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { ManagerCoachingComponent } from './pages/services/corporate_coaching/manager-coaching/manager-coaching.component';
import { PerformanceCoachingComponent } from './pages/services/corporate_coaching/performance-coaching/performance-coaching.component';
import { SalesCoachingComponent } from './pages/services/corporate_coaching/sales-coaching/sales-coaching.component';
import { TeamCoachingComponent } from './pages/services/corporate_coaching/team-coaching/team-coaching.component';
import { MicroCoachingComponent } from './pages/services/micro-coaching/micro-coaching.component';
import { LeadingCareerComponent } from './pages/services/projects/leading-career/leading-career.component';
import { TalentAcquisitionComponent } from './pages/services/projects/talent-acquisition/talent-acquisition.component';
import { EntrepreneursComponent } from './pages/services/specialised_coaching/entrepreneurs/entrepreneurs.component';
import { LeaderDigitalTransformationComponent } from './pages/services/specialised_coaching/leader-digital-transformation/leader-digital-transformation.component';
import { WomenLeadersComponent } from './pages/services/specialised_coaching/women-leaders/women-leaders.component';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: "",
    children:[
      {
        component: HomepageComponent,
        path : "home",
      },
      {
        path :  "",
        redirectTo : "/home",
        pathMatch : "full"
      },
       {
        component : ManagerCoachingComponent,
        path : "manager-coaching"
       },
       {
        component :  PerformanceCoachingComponent,
        path : "performance-coaching"
       },
       {
        component : SalesCoachingComponent,
        path : "sales-coaching"
       },
       {
        component : TeamCoachingComponent,
        path : "team-coaching"
       },
       {
        component : MicroCoachingComponent,
        path : "micro-coaching"
       },
       {
        component : LeadingCareerComponent,
        path : "leading-career"
       },
       {
        component : TalentAcquisitionComponent,
        path : 'talent-acquisition'
       },
       {
        component : EntrepreneursComponent,
        path : 'entrepreneurs'
       },
       {
        component : LeaderDigitalTransformationComponent,
        path : 'leader-digital-transformation'
       },
       {
        component : WomenLeadersComponent,
        path :  "women-leader"
       }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
