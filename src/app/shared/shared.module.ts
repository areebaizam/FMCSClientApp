import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Project Modules
import { MaterialModule } from '@tap/material/material.module';
//Pipes
import { FilterBooleanPipe } from './pipes';


const SHARED_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgbModule,
  // Project Modules
  MaterialModule,
];
const SHARED_COMPONENTS = [];
const SHARED_DIRECTIVES = [];
const SHARED_PIPES = [FilterBooleanPipe];

@NgModule({
  declarations: [
    // ...SHARED_COMPONENTS,
    // ...SHARED_DIRECTIVES,
    ...SHARED_PIPES,
  ],
  imports: [
    CommonModule,
    ...SHARED_MODULES,
    // ...SHARED_COMPONENTS,
    // ...SHARED_DIRECTIVES,
  ],
  providers: [DatePipe],
  exports: [
    ...SHARED_MODULES,
    // ...SHARED_COMPONENTS,
    // ...SHARED_DIRECTIVES,
    ...SHARED_PIPES,
  ],
})
export class SharedModule {}
