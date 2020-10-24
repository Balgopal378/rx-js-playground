import { Component, OnInit, Input } from '@angular/core';
import { myHttpClient } from '../utils/my-http-client';
import { SortDirection } from './sortable-column.directive';
import { Subject, forkJoin, of } from 'rxjs';
import { map, mergeMap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

    static isCreated = false;

    private trigger = new Subject();

    @Input() product;

    items = [
        {
            id: 1,
            firstName: 'hozx',
            lastName: 'lkh'
        },
        {
            id: 2,
            firstName: 'aozx',
            lastName: 'zkh'
        },
        {
            id: 3,
            firstName: 'xx',
            lastName: 'xkh'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
        if (!DummyComponent.isCreated) {
            myHttpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
            DummyComponent.isCreated = true;
        }

        this.trigger.pipe(
            mergeMap((data) => forkJoin([
                myHttpClient.get(`https://jsonplaceholder.typicode.com/todos/${data}`),
                myHttpClient.get('https://jsonplaceholder.typicode.com/todos/2')
            ]))
        ).subscribe();

        // of([1]).pipe(
        //     mergeMap((data) => forkJoin([
        //         myHttpClient.get(`https://jsonplaceholder.typicode.com/todos/${data}`),
        //         myHttpClient.get('https://jsonplaceholder.typicode.com/todos/1')
        //     ]))
        // ).subscribe();
    }


    sortChange(sortInfo) {
        const direction = sortInfo.sortDirection ? 'desc' : 'asc';
        this.items.sort(this.compare(sortInfo.column, direction));
    }

    private compare(key, order = 'asc') {
        return (a, b) => {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
          }

          const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
    }

    triggerApis() {
        this.trigger.next(1);
    }
}
