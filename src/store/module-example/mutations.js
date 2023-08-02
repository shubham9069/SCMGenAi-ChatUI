export function someMutation(/* state */) {}
export function SelectedLabelFunc(state, label) {
  if (label == state.selectedLabel) {
    state.isVisible = !state.isVisible;
  } else {
    state.isVisible = true;
  }
  state.selectedLabel = label;
}
