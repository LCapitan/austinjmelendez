import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // required for ngIf templating property
import { HomepageComponent } from './homepage.component';
import { PrismicService } from '../../prismic/prismic.service';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule],
  exports: [HomepageComponent],
  providers: [PrismicService]
})
export class HomepageModule {}
