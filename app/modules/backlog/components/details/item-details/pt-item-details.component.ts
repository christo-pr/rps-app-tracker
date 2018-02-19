import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { DataFormEventData } from 'nativescript-pro-ui/dataform';
import { RadDataFormComponent } from 'nativescript-pro-ui/dataform/angular';

import { setStepperEditorContentOffset,
         setStepperEditorTextPostfix,
         setStepperEditorColors,
         setMultiLineEditorFontSize
} from '../../../../../shared/helpers/ui-data-form';

import { PtItem } from '../../../../../core/models/domain';
import { PtItemDetailsEditFormModel, ptItemToFormModel } from '../../../../../shared/models/forms';
import { ItemType, PT_ITEM_STATUSES, PT_ITEM_PRIORITIES, COLOR_LIGHT, COLOR_DARK } from '../../../../../core/constants';
import { PtItemType } from '../../../../../core/models/domain/types';

@Component({
  moduleId: module.id,
  selector: 'pt-item-details',
  templateUrl: 'pt-item-details.component.html',
  styleUrls: ['pt-item-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PtItemDetailsComponent implements OnInit {

  @Input() item: PtItem;
  @Output() itemSaved = new EventEmitter<PtItem>();
  @ViewChild('itemDetailsForm') itemDetailsForm: RadDataFormComponent;

  private selectedTypeValue: PtItemType;

  public itemForm: PtItemDetailsEditFormModel;

  public itemTypesProvider = ItemType.List.map((t) => t.PtItemType);
  public statusesProvider = PT_ITEM_STATUSES;
  public prioritiesProvider = PT_ITEM_PRIORITIES;

  public get itemTypeEditorDisplayName() {
    return 'Type';
  }

  public itemTypeImage() {
    return ItemType.imageResFromType(this.selectedTypeValue);
  }


  constructor() { }

  public ngOnInit() {
    this.itemForm = ptItemToFormModel(this.item);

    this.selectedTypeValue = <PtItemType>this.itemForm.typeStr;
  }

  public onPropertyCommitted() {
    this.notifyUpdatedItem();
  }

  public onEditorUpdate(args: DataFormEventData) {
    switch ( args.propertyName ) {
      case 'description': this.editorSetupDescription(args.editor); break;
      case 'estimate': this.editorSetupEstimate(args.editor); break;

      default:
        break;
    }
  }

  private editorSetupEstimate(editor) {
    // 1. Set content offset
    setStepperEditorContentOffset(editor, -25, 0);
    // 2. set potfix to estimate
    setStepperEditorTextPostfix(editor, 'point', 'points');
    // 3. set color to level
    setStepperEditorColors(editor, COLOR_LIGHT, COLOR_DARK)
  }

  private editorSetupDescription(editor) {
    // 1. Increase the size of the multi line editor
    setMultiLineEditorFontSize(editor, 17);
  }

  private notifyUpdatedItem() {
    this.itemDetailsForm.dataForm.validateAll()
      .then(valid => {
        if (valid) {
          const updatedItem = this.getUpdatedItem();
          this.itemSaved.emit(updatedItem);
        }
      })
      .catch( err => console.error);
  }

  private getUpdatedItem(): PtItem {
    return Object.assign({}, this.item, {
      title: this.itemForm.title,
      description: this.itemForm.description,
      type: this.itemForm.typeStr,
      status: this.itemForm.statusStr,
      priority: this.itemForm.priorityStr,
      estimate: this.itemForm.estimate
    });
  }
}
