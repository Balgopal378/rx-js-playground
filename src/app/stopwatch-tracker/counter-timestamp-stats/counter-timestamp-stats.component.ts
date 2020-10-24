import { Component, OnInit, Input } from '@angular/core';
import { StopwatchData } from '../models/stopwatch-data';

@Component({
  selector: 'app-counter-timestamp-stats',
  templateUrl: './counter-timestamp-stats.component.html',
  styleUrls: ['./counter-timestamp-stats.component.scss']
})
export class CounterTimestampStatsComponent implements OnInit {
    @Input() stopWatchInfo: StopwatchData[];
    constructor() { }

    ngOnInit(): void {
    }

}
