import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { NavigationService } from '../../../../core/services';

import { BacklogService } from '../../services/backlog.service';
import { Store } from '../../../../core/state/app-store';
import { PtItem } from '../../../../core/models/domain';
import { PresetType } from '../../../../shared/models/ui/types/presets';

@Component({
  moduleId: module.id,
  selector: 'pt-backlog',
  templateUrl: 'backlog.page.component.html',
  styleUrls: ['backlog.page.component.css']
})
export class BacklogPageComponent implements OnInit {

  public items$ = this.store.select<PtItem[]>('backlogItems');
  public selectedPreset$: Observable<PresetType> = this.store.select<PresetType>('selectedPreset');
  public isListRefreshing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    private backlogService: BacklogService,
    private store: Store
  ) { }

  public ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      const reqPreset = params['preset'];
      if (reqPreset) {
        this.store.set('selectedPreset', reqPreset);
      }
    });

    this.selectedPreset$.subscribe( next => {
      this.backlogService.fetchItems().then(() => {
        console.log('loaded');
      });
    });
  }


  public selectListItem(item: PtItem) {
    // Navigate to detail page
    this.navigationService.navigate(['/detail', item.id]);
  }

  public onAddTap(args) {
    // Add new resource
  }

  public onRefresh(args) {
    this.isListRefreshing$.next(true);
    this.backlogService.fetchItems()
      .then(() => {
        // set is refreshin to false
        this.isListRefreshing$.next(false);
      })
      .catch(() => {
        // set is refreshin to false
        this.isListRefreshing$.next(false);
      })
  }

}
