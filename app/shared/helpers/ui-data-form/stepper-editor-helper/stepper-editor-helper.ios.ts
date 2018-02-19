import { Color } from 'color';

export function setStepperEditorContentOffset(editor, horizontalOffset: number, verticalOffset: number) {
  const labelDef = editor.gridLayout.definitionForView(editor.valueLabel);
  labelDef.contentOffset = {
    horizontal: horizontalOffset,
    vertical: verticalOffset
  }
}

export function setStepperEditorTextPostfix(editor, singularPostfix: string, pluralPostifx: string) {
  const labelDef = editor.gridLayout.definitionForView(editor.valueLabel);
  const numVal = parseInt(labelDef.view.text, 10);
  if (numVal === 1) {
    labelDef.view.text = `1 ${singularPostfix}`;
  } else {
    labelDef.view.text = `${numVal} ${pluralPostifx}`;
  }
}


export function setStepperEditorColors(editor, lightColor: Color, darkColor: Color) {
  const coreEditor = <UIStepper>editor.editor;
  coreEditor.tintColor = lightColor.ios;

  for (let i = 0; i < coreEditor.subviews.count; i++) {
    if (coreEditor.subviews[i] instanceof UIButton) {
      (<any>coreEditor.subviews[i]).imageView.tintColor = darkColor.ios;
    }
  }
}
