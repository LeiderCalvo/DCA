export const loadCss = (elRef: HTMLElement, styles: string) => {
    const css = elRef.ownerDocument.createElement("style");
    css.innerHTML = styles;
    elRef.shadowRoot?.appendChild(css)
}