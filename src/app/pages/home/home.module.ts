import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';
import { ProgressWidgetModule } from 'src/app/components/widgets/progress-widget/progress-widget.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    ProgressWidgetModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
