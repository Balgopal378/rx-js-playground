import { Observable } from 'rxjs';

export class MyObservableUsingCreate {
    static create<T>(data: T): Observable<T> {
        return Observable.create((observer) => {
            setTimeout(() => {
                observer.next(data);
            }, 2000);

            setTimeout(() => {
                observer.complete(data);
            }, 3000);
        });
    }
}
