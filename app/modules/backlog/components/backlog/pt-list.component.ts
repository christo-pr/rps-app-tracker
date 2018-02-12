import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { PtItem } from '../../../../core/models/domain/pt-item.model';
import { ItemEventData } from 'ui/list-view';

@Component({
  moduleId: module.id,
  selector: 'pt-list',
  templateUrl: 'pt-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PtListComponent implements OnInit {

  @Input() items: PtItem[];
  @Output() listItemSelected: EventEmitter<PtItem> = new EventEmitter<PtItem>();

  constructor() { }

  ngOnInit() {

  }

  listItemTap(args: ItemEventData) {
    const lv = args.object;
    const item = <PtItem>(<any>lv).items[args.index];
    this.listItemSelected.emit(item);
  }
}
