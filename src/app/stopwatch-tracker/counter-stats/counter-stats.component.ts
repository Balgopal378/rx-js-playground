import { Component, OnInit, Input } from '@angular/core';
import { StopwatchData } from '../models/stopwatch-data';

@Component({
  selector: 'app-counter-stats',
  templateUrl: './counter-stats.component.html',
  styleUrls: ['./counter-stats.component.scss']
})
export class CounterStatsComponent implements OnInit {

    @Input() countInfo: { startCount: number, pauseCount: number};

    constructor() { }

    ngOnInit(): void {
    }

}
