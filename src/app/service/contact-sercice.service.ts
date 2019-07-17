import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactM } from '../model/contact-m';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactSerciceService {

  constructor(private http: HttpClient) { }


}
