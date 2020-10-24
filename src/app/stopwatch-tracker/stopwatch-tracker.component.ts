import { Component, OnInit } from '@angular/core';
import { StopWatchService } from './services/stop-watch.service';
import { Observable, Subject, of, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StopwatchData } from './models/stopwatch-data';

@Component({
  selector: 'app-stopwatch-tracker',
  templateUrl: './stopwatch-tracker.component.html',
  styleUrls: ['./stopwatch-tracker.component.scss'],
  providers: [StopWatchService]
})
export class StopwatchTrackerComponent implements OnInit {
    timer$: Observable<number> = of(0);
    stopWatchInfo$: Observable<StopwatchData[]>;
    countInfo$: Observable<{ startCount: number, pauseCount: number}>;
    destroyTimer$: Subject<void>;
    sub: Subscription;

    constructor(private readonly stopWatchService: StopWatchService) { }

    ngOnInit(): void {
        this.stopWatchInfo$ = this.stopWatchService.stopwatchInfo$;
        this.countInfo$ = this.stopWatchService.stopwatchCountInfo$;
    }

    onManageTimer(status: {isStarted: boolean, startTime: number}) {
        if (status.isStarted) {
            this.destroyTimer$ = new Subject();
            this.timer$ = this.stopWatchService.startTimer(status.startTime).pipe(takeUntil(this.destroyTimer$));
        } else {
            this.destroyTimer$.next();
            this.destroyTimer$.complete();
            this.stopWatchService.fillStopwatchData();
            this.destroyTimer$ = null;
        }
    }

    onResetTimer() {
        this.destroyTimer$ = null;
        this.timer$ = of(0);
        this.stopWatchService.resetTimer();
    }

}
