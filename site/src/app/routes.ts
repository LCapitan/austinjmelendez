import { Routes } from '@angular/router';
import { HelpComponent } from './modules/help/help.component';
import { PreviewComponent } from './modules/preview/preview.component';
import { PageComponent } from './modules/page/page.component';
import { HomepageComponent } from './modules/homepage/homepage.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  //{ path: 'help', component: HelpComponent},
  { path: 'preview', component: PreviewComponent },
  { path: ':uid', component: PageComponent},
];
