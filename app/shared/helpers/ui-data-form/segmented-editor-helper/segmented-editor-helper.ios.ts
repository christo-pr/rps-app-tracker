import { Color } from 'color';

export function setSegmentedEditorColor(editor, color: Color) {
  const coreEditor = <UISegmentedControl>editor.editor;
  coreEditor.tintColor = color.ios;
}