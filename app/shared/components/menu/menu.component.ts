import { Component, OnInit } from '@angular/core';
import { PresetType } from './../../models/ui/types/presets';

@Component({
  moduleId: module.id,
  selector: 'pt-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})

export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public onSelectPresetTap(preset: PresetType) {
    // this.navigationService.navigate(['backlog', preset]);
  }

  public onSettingsTap() {
      // this.navigationService.navigate(['settings']);
  }
}
