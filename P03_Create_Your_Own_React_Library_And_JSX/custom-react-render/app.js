const customElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click to Visit Google'
};

/**
 * Brute-Force Approach
 * 
 * @param {*} parent 
 * @param {*} child 
 */
const renderRootBruteForce = (parent, child) => {
    const htmlElement = document.createElement(child?.type);
    htmlElement.setAttribute('href', child?.props?.href | '');
    htmlElement.setAttribute('target', child?.props?.target | '');
    htmlElement.innerHTML = child.children;
    parent.appendChild(htmlElement);
};

/**
 * Optimal and Reusable Approach
 * 
 * @param {*} parent 
 * @param {*} child 
 */
const renderRoot = (parent, child) => {
    const htmlElement = document.createElement(child?.type);
    for (const prop in child?.props) {
        if (prop === 'children' || prop === 'type') {
            continue;
        }
        htmlElement.setAttribute(prop, child?.props?.[prop]);
    }
    htmlElement.innerHTML = child.children;
    parent.appendChild(htmlElement);
};

const root = document.querySelector('#root');
// renderRootBruteForce(root, customElement);
renderRoot(root, customElement);
