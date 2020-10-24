import { Observable, Observer } from 'rxjs';

export class MyOperator {
    static myOperator <T>(source: Observable<T>) {
        return Observable.create((observer: Observer<T>) => {
            return source.subscribe(
                (next: T) => {
                    console.log('my operator subscribing to source observable');
                    observer.next(next);
                },
                (error: T) => {
                    observer.error(error);
                },
                () => {
                    observer.complete();
                },
            );
            // return subscription;
        });
    }
}
