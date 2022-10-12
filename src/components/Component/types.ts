interface ComponentSignature {
  domElement: HTMLElement;
  render: () => void;
  addEventListeners?: () => void;
}

export default ComponentSignature;
