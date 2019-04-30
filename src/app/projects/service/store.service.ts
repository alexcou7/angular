import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private mensaje$ = new BehaviorSubject<string>('');

  constructor() {}

  public select$ = () => this.mensaje$.asObservable();

  public dispatch(mensaje) {
    this.mensaje$.next(mensaje);
  }
}
