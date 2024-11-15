import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Document {
    _id: string;
    item: string;
}

@Injectable({
    providedIn: 'root',
})
export class PackingListService {
    private baseUrl = 'http://localhost:8000';

    constructor(private http: HttpClient) {}

    getDocuments(): Observable<Document[]> {
        return this.http.get<Document[]>(`${this.baseUrl}/items`);
    }

    addDocument(item: string): Observable<Document> {
        return this.http.post<Document>(`${this.baseUrl}/add-item`, { item });
    }

    deleteDocument(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/delete-item/${id}`);
    }

    updateDocument(id: string, item: string): Observable<Document> {
        return this.http.put<Document>(`${this.baseUrl}/update-item/${id}`, { item });
    }
}
