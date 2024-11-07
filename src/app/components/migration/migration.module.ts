import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MigrationRoutingModule } from './migration-routing.module';
import { MigrationComponent } from './migration.component';

@NgModule({
  declarations: [MigrationComponent],
  imports: [CommonModule, MigrationRoutingModule],
})
export class MigrationModule {}