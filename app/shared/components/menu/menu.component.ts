import { Component, OnInit } from '@angular/core';
import { PresetType } from './../../models/ui/types/presets';

@Component({
  moduleId: module.id,
  selector: 'pt-menu',
  templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  onSelectedPresetTap(preset: PresetType) {}
}
