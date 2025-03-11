import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _http: HttpClient) { }

  getEvents(): Observable<any> {
    return this._http.get("http://localhost:3000/eventList");
  }

  getEventById(id: any): Observable<any> {
    return this._http.get(`http://localhost:3000/eventList/${id}`);
  }

  addEvent(data: any): Observable<any> {
    return this._http.post("http://localhost:3000/eventList", data);
  }

  updateEvent(id: any,data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/eventList/${id}`, data);
  }

  deleteEventById(id: any) {
    return this._http.delete(`http://localhost:3000/eventList/${id}`);
  }
}
