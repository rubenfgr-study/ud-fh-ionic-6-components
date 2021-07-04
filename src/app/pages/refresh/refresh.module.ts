import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefreshPageRoutingModule } from './refresh-routing.module';

import { RefreshPage } from './refresh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefreshPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RefreshPage]
})
export class RefreshPageModule {}
