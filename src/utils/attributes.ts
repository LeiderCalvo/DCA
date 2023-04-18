export const setAttributes = <T extends Record<any, any>>(objProps: T, elementRef: HTMLElement) => {
    Object.entries(objProps).forEach(
        ([prop, value]) => elementRef.setAttribute(prop, value)
    )
}