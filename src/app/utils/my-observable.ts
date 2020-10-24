export interface IMyObserver<T> {
    next: (n: T) => void;
    error: (error: any) => void;
    complete: (n: T) => void;
}

export class MyObservable<T> {

    constructor(private readonly producer: (observer: IMyObserver<T>)  => void) {}

    subscribe(observer: IMyObserver<T>) {
        this.producer(observer);
    }
}
