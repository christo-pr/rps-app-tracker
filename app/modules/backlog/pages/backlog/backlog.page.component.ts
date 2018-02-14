import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../../core/services';

import { BacklogService } from '../../services/backlog.service';
import { Store } from '../../../../core/state/app-store';
import { PtItem } from '../../../../core/models/domain';

@Component({
  moduleId: module.id,
  selector: 'pt-backlog',
  templateUrl: 'backlog.page.component.html',
  styleUrls: ['backlog.page.component.css']
})
export class BacklogPageComponent implements OnInit {

  public items$ = this.store.select<PtItem[]>('backlogItems');
  constructor(
    private navigationService: NavigationService,
    private backlogService: BacklogService,
    private store: Store
  ) { }

  public ngOnInit() {
    this.backlogService.fetchItems();
  }


  public selectListItem(item: PtItem) {
    // Navigate to detail page
    this.navigationService.navigate(['/detail', item.id]);
  }

  public onAddTap(args) {
    // Add new resource
  }

}
