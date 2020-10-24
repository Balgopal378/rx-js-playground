import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UseCustomObservablesComponent } from './use-custom-observables/use-custom-observables.component';
import { DummyComponent } from './dummy/dummy.component';
import { StopwatchTrackerComponent } from './stopwatch-tracker/stopwatch-tracker.component';
import { CounterComponent } from './stopwatch-tracker/counter/counter.component';
import { ManageCounterComponent } from './stopwatch-tracker/manage-counter/manage-counter.component';
import { CounterTimestampStatsComponent } from './stopwatch-tracker/counter-timestamp-stats/counter-timestamp-stats.component';
import { CounterStatsComponent } from './stopwatch-tracker/counter-stats/counter-stats.component';
import { SortableColumnDirective } from './dummy/sortable-column.directive';

@NgModule({
  declarations: [
    AppComponent,
    UseCustomObservablesComponent,
    DummyComponent,
    StopwatchTrackerComponent,
    CounterComponent,
    ManageCounterComponent,
    CounterTimestampStatsComponent,
    CounterStatsComponent,
    SortableColumnDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
