import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    // const params = new HttpParams().set('name', termino);
    // Podemos retornar un arreglo vacío en caso de que no se encuentre el país
    // return this.http.get(url).pipe(catchError(err => of ([])))
    return this.http.get<Country[]>(url);
  }
}
