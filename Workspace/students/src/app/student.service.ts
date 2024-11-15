import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {

    constructor(private http:HttpClient) {}

    getStudents() {
        return this.http.get('http://localhost:8000/students');
    }
addStudents(firstName: string, lastName: string) {
    this.http.post('http://localhost:8000/students',{firstName, lastName})
        .subscribe((responseData) => {
            console.log(responseData);
        }); 
    }
    deleteStudent(studentId: string) {
        this.http.delete("http://localhost:8000/students/" + studentId)
            .subscribe(() => {
                console.log('Deleted: ' + studentId);
            });
            location.reload();
    }
    updateStudent(studentId: string,firstName: string, lastName: string) {
        this.http.put("http://localhost:8000/students/" + 
        studentId,{ firstName, lastName })
        .subscribe(() => {
            console.log('Updated: ' + studentId);
        });
    }
getStudent(studentId: string) {
    return this.http.get('http://localhost:8000/students/'+ studentId);
 }
}
