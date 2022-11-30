import { Component } from "./core";

export class App extends Component {

    render() {
        return `
            <div>My App</div>
        `
    }
}

customElements.define('it-app', App);