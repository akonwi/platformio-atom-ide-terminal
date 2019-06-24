'use babel';

const isString = x => typeof x === "string"

export function isVisible(itemOrUri) {
  const uri = isString(itemOrUri) ? itemOrUri : itemOrUri.getURI();

  const container = atom.workspace.paneContainerForURI(uri);
  if (container) {
    const activeItem = container.getActivePaneItem();
    if (!activeItem) return false;
    const viewIsActive = activeItem.getURI && activeItem.getURI() === uri;
    if (container.getLocation() !== "center") {
      return container.isVisible() && viewIsActive;
    }
    return viewIsActive;
  }
  return false;
}

// export function getDock(itemOrUri) {
//   return atom.workspace.paneContainerForURI(isString(itemOrUri) ? itemOrUri : itemOrUri.getURI())
// }
