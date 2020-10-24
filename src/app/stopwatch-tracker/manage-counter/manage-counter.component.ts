import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StopwatchData } from '../models/stopwatch-data';

@Component({
  selector: 'app-manage-counter',
  templateUrl: './manage-counter.component.html',
  styleUrls: ['./manage-counter.component.scss']
})
export class ManageCounterComponent implements OnInit {
    isStarted = false;
    startTime: number = null;

    @Input() stopWatchInfo: StopwatchData[];

    @Output() manageTimer = new EventEmitter<{isStarted: boolean, startTime: number}>();
    @Output() resetTimer = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

    onClick() {
        if (this.startTime || this.startTime === 0) {
            this.isStarted = !this.isStarted;
            this.manageTimer.emit({
                isStarted: this.isStarted,
                startTime: this.startTime,
            });
        }
    }

    onReset() {
        if (!this.isStarted) {
            this.startTime = null;
            this.resetTimer.emit();
        }
    }
}
