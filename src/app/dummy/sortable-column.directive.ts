import { Input, HostListener, Directive, Output, EventEmitter, HostBinding } from '@angular/core';

export enum SortDirection {
    ASC,
    DESC,
}

@Directive({
    selector: '[appSortableColumn]',
})
export class SortableColumnDirective {
    @Input('appSortableColumn') column: string;

    private sortDirection = SortDirection.ASC;

    @Output() sort = new EventEmitter<any>();

    @HostListener('click') onClick() {
        this.sortDirection = this.sortDirection === SortDirection.ASC ?  SortDirection.DESC :  SortDirection.ASC;
        this.sort.emit({
            column: this.column,
            sortDirection: this.sortDirection
        });
    }
}
