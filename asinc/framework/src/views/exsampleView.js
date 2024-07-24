import { html, render } from "../lib.js";

const exampleTemplate = () => html`
<section>
    <p>meeeeee</p>
</section>
`;

export function showExample(cnt) {
    debugger
    render(exampleTemplate);
}