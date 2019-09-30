import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ChildRegisterComponent } from './register/child-register/child-register.component';
import { EditRegisterChildComponent } from './register/edit-register-child/edit-register-child.component';
import { RegisterChildMedicalRecordComponent } from './medicalRecord/register-child-medical-record/register-child-medical-record.component';
import { EditChildMedicalRecordComponent } from './medicalRecord/edit-child-medical-record/edit-child-medical-record.component';
import { RegisterChildProgressComponent } from './progress/register-child-progress/register-child-progress.component';
import { ChildsComponent } from './interfaces/childs/childs.component';


const routes: Routes = [
  {path: 'registerChild', component: ChildRegisterComponent},
  {path: 'editRegisterChild', component: EditRegisterChildComponent},
  {path: 'registerMedicalRecord', component: RegisterChildMedicalRecordComponent},
  {path: 'editMedicalRecord', component: EditChildMedicalRecordComponent},
  {path: 'registerProgress', component: RegisterChildProgressComponent},
  {path: 'childs', component: ChildsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
