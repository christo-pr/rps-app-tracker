import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { PtItem } from '../../../../core/models/domain/pt-item.model';

@Component({
  moduleId: module.id,
  selector: 'pt-list-item',
  templateUrl: 'pt-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PtListItemComponent implements OnInit {

  @Input() item: PtItem;
  constructor() { }

  ngOnInit() {

  }

}
