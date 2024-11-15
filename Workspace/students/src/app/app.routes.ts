import { Routes } from '@angular/router';
import { ListStudentsComponent } from './list-students/list-students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
       path: '',  
        component: ListStudentsComponent
   }, {
        path: 'addStudent', 
        component: StudentFormComponent
    }, {
        path: 'editStudent/:_id', 
        component: StudentFormComponent 
    },{
        path: 'listStudents',  
        component: ListStudentsComponent
    }, {
        path: '**',  
       component: NotFoundComponent
    } 
];
