import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ChildRegisterComponent } from './register/child-register/child-register.component';
import { RegisterListComponent } from './register/register-list/register-list.component';
import { MedicalRecordListComponent } from './medicalRecord/medical-record-list/medical-record-list.component';
import { ProgressListComponent } from './progress/progress-list/progress-list.component';
import { ChildsComponent } from './interfaces/childs/childs.component';
import { ShowRegisterFormComponent } from './register/show-register-form/show-register-form.component';
import { ShowMedicalRecordFormComponent } from './medicalRecord/show-medical-record-form/show-medical-record-form.component';
import { ShowProgressProfileComponent } from './progress/show-progress-profile/show-progress-profile.component';
import { EditRegisterChildComponent } from './register/edit-register-child/edit-register-child.component';
import { EditMedicalRecordComponent } from './medicalRecord/edit-medical-record/edit-medical-record.component';


const routes: Routes = [
  {path: 'registerChild', component: ChildRegisterComponent},
  {path: 'showRegisterChild', component: RegisterListComponent},
  {path: 'showMedicalRecord', component: MedicalRecordListComponent},
  {path: 'showProgress', component: ProgressListComponent},
  {path: 'childs', component: ChildsComponent},
  {path: 'showRegister', component: RegisterListComponent},
  {path: 'showRegisterProfile/:id', component: ShowRegisterFormComponent},
  {path: 'showMedicalRecordProfile/:id', component: ShowMedicalRecordFormComponent},
  {path: 'showProgressProfile/:id', component: ShowProgressProfileComponent},
  {path: 'editRegisterChild', component: EditRegisterChildComponent},
  {path: 'editMedicalRecord', component: EditMedicalRecordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
