
import { Component, OnDestroy, OnInit, Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription, BehaviorSubject } from 'rxjs';
import * as alertify from 'alertify.js';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading = new BehaviorSubject(false);

  public onlineEvent: Observable<Event>;
  public offlineEvent: Observable<Event>;
  public subscriptions: Subscription[] = [];
  public connectionStatusMessage: string;
  public connectionStatus: boolean;

  constructor(private router: Router, private location: Location) {
    alertify.logPosition('bottom right');
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');
    this.connectionStatus = navigator.onLine;
    this.checkInternetConnection();
    this.subscriptions.push(this.onlineEvent.subscribe(event => {
      this.connectionStatusMessage = 'Connected to internet! You are online';
      this.connectionStatus = true;
      this.location.back();
      alertify.success(this.connectionStatusMessage)
    }));
    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Connection lost! You are offline';
      this.connectionStatus = false;
      this.router.navigate(['/error']);
      alertify.error(this.connectionStatusMessage);
    }));
  }
  checkInternetConnection() {
    if (!this.connectionStatus) {
      this.router.navigate(['/error']);
      alertify.error('No internet! please check your connection');
      return false;
    }
    return true;
  }
}
