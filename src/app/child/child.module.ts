import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Routing
import { ChildRoutingModule } from './child-routing.module';

// Design
import { MaterialModule } from '../material-module/material-module.module';

// Components
import { ChildRegisterComponent } from './register/child-register/child-register.component';
import { ChildRegisterFormComponent } from './forms/child-register-form/child-register-form.component';
import { EditRegisterChildComponent } from './register/edit-register-child/edit-register-child.component';
import { RegisterChildMedicalRecordComponent } from './medicalRecord/register-child-medical-record/register-child-medical-record.component';
import { ChildMedicalRecordFormComponent } from './forms/child-medical-record-form/child-medical-record-form.component';
import { EditChildMedicalRecordComponent } from './medicalRecord/edit-child-medical-record/edit-child-medical-record.component';
import { RegisterChildProgressComponent } from './progress/register-child-progress/register-child-progress.component';


@NgModule({
  declarations: [
    ChildRegisterComponent,
    ChildRegisterFormComponent,
    EditRegisterChildComponent,
    RegisterChildMedicalRecordComponent,
    ChildMedicalRecordFormComponent,
    EditChildMedicalRecordComponent,
    RegisterChildProgressComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    ChildRegisterComponent,
    ChildRegisterFormComponent,
    EditRegisterChildComponent,
    RegisterChildMedicalRecordComponent,
    ChildMedicalRecordFormComponent,
    EditChildMedicalRecordComponent,
    RegisterChildProgressComponent
  ]
})
export class ChildModule { }
