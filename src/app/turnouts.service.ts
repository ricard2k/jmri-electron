import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';



export interface Turnout {  
  systemName: string;
  userName: string;
  state: string;
  comment: string;
  inverted: boolean;
  locked: boolean;
}

@Injectable({
  providedIn: 'root'
}) 
export class TurnoutsService {

  constructor() { }

  //return a mocked array of turnouts
  getTurnouts(): Observable<Turnout[]> {
    return of<Turnout[]>([
      {
        systemName: 'Turnout 1',
        userName: 'Turnout 1',
        comment: 'Turnout 1 description',
        state: 'straight',
        inverted: false,
        locked: false      
      },
      {
        systemName: 'Turnout 2',
        userName: 'Turnout 2',
        comment: 'Turnout 2 description',
        state: 'straight',
        inverted: false,
        locked: false      
      },
      {
        systemName: 'Turnout 3',
        userName: 'Turnout 3',
        comment: 'Turnout 3 description',
        state: 'straight',
        inverted: true,
        locked: false      
      }
    ])
  }
}
