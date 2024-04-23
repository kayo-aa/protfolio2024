import { SharedEvent } from './../models/shared-event.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private eventToShare = new BehaviorSubject<SharedEvent | null>({ event: '', element: '', component: '' });

  get sharingObservable() {
    return this.eventToShare.asObservable();
  }

  set event(data: SharedEvent) {
    this.eventToShare.next(data);
  }
}
