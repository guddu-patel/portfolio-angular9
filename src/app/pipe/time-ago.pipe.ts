import { Pipe, ChangeDetectorRef } from '@angular/core';
import { toDate, formatDistance } from 'date-fns';
import { AsyncPipe } from '@angular/common';
import { timer, Observable } from 'rxjs';
import { tap, map, distinctUntilChanged, startWith } from 'rxjs/operators';

@Pipe({
  name: 'timeAgo',
  pure: false,
})
export class TimeAgoPipe extends AsyncPipe {

  private time: Date;
  private formatted$: Observable<string>;

  constructor(private cd: ChangeDetectorRef) {
    super(cd);

    this.formatted$ = timer(0, 1000).pipe(
      map(() => formatDistance(this.time, new Date())),
      distinctUntilChanged(),
      tap(time => console.log('new time:', time)),
    );
  }

  public transform(value: any): any {
    this.time = toDate(new Date(value));
    return super.transform(this.formatted$);
  }

}