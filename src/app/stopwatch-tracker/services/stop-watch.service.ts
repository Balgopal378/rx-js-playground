import { Injectable } from '@angular/core';
import { Observable, interval, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StopwatchData } from '../models/stopwatch-data';

@Injectable()
export class StopWatchService {
    private readonly stopwatchData: StopwatchData[] = [];
    obj = {} as StopwatchData;
    private readonly stopwatchInfo = new BehaviorSubject([]);
    stopwatchInfo$ = this.stopwatchInfo.asObservable();
    countInfo = {
        startCount: 0,
        pauseCount: 0
    };
    private readonly stopwatchCountInfo = new BehaviorSubject(this.countInfo);
    stopwatchCountInfo$ = this.stopwatchCountInfo.asObservable();
    constructor() { }

    startTimer(start: number): Observable<number> {
        this.obj.startVal = start;
        this.obj.started = new Date();
        this.countInfo.startCount = this.countInfo.startCount + 1;
        this.stopwatchCountInfo.next(this.countInfo);
        return interval(1000)
            .pipe(
                map(i => i + start),
                tap((data) => {
                    this.obj.pauseVal = data;
                    this.obj.paused = new Date();
                })
            );
    }

    fillStopwatchData() {
        this.countInfo.pauseCount = this.countInfo.pauseCount + 1;
        this.stopwatchCountInfo.next(this.countInfo);
        this.stopwatchData.push({ ...this.obj });
        console.log(this.stopwatchData);
        this.stopwatchInfo.next(this.stopwatchData);
    }

    resetTimer() {
        this.stopwatchData.length = 0;
        this.stopwatchInfo.next(this.stopwatchData);
        this.countInfo.startCount = 0;
        this.countInfo.pauseCount = 0;
        this.stopwatchCountInfo.next(this.countInfo);
    }
}
