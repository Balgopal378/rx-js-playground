import { Observable, Observer } from 'rxjs';

export const myOperatorWithData = <T>(input: string) => (source: Observable<T>) => {
    return Observable.create((observer: Observer<T>) => {
        return source.subscribe(
            (next: T) => {
                console.log(`Recieved data in my operator ${input} ${next}`);
                observer.next(next);
            },
            (error: T) => {
                observer.error(error);
            },
            () => {
                observer.complete();
            },
        );
    });
};
