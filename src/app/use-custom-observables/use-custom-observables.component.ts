import { Component, OnInit } from '@angular/core';
import { Observable, noop, of } from 'rxjs';
import { MyObservable, IMyObserver } from '../utils/my-observable';
import { MyObservableUsingCreate } from '../utils/my-bservable-using-create';
import { MyOperator } from '../utils/my-operator';
import { myOperatorWithData } from '../utils/my-operator-with-data';

@Component({
  selector: 'app-use-custom-observables',
  templateUrl: './use-custom-observables.component.html',
  styleUrls: ['./use-custom-observables.component.scss']
})
export class UseCustomObservablesComponent implements OnInit {
    obs1$: MyObservable<number>;
    obs2$: Observable<string>;
    constructor() { }

    ngOnInit(): void {
        console.log('use-custom-observables');
        this.obs1$ = new MyObservable<number>((observer: IMyObserver<number>) => {
            observer.next(1);
            setTimeout(() => observer.next(2), 1000);
            setTimeout(() => observer.complete(2), 2000);
        });

        this.obs1$.subscribe({
            next: (n: number) => console.log('next', n),
            error: () => {},
            complete: (n: number) => console.log('complete', n),
        });

        this.obs2$ = MyObservableUsingCreate.create('hi');
        this.obs2$.subscribe(
            (data) => { console.log('second emiting', data); },
            noop,
            () => { console.log('second completed'); }
        );
        of(1).pipe(MyOperator.myOperator).subscribe((data) => {
            console.log('operator working', data);
        });

        of(2, 3).pipe(myOperatorWithData('Hey operator...')).subscribe();
    }

}
