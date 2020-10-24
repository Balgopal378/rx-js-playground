import { Observable, Observer } from 'rxjs';

function MyHttpClient() {
    this.get = <T>(url: string): Observable<T> => {
        return Observable.create((observer: Observer<T>) => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                observer.next(data);
                observer.complete();
            })
            .catch((err) => console.log(err));
        });

    };
}

export const myHttpClient = new MyHttpClient();
