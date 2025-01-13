import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com'; // Cambiar por la URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener plantas
  getPlants(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/plants`);
  }

  // Obtener usuarios
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }

  // Eliminar planta
  deletePlant(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/plants/${id}`);
  }

  // Eliminar usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }
}
