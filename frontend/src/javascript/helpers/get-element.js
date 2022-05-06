export default function getElement(target) {
    const element = document.querySelector(`[${target}]`);
    if (!element)
        throw new Error('Element don`t exists');
    return element;
}