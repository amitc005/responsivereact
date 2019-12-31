import React from "react"


class ResponsiveComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        const [children1, children2] = props.children
        this._mediaQueryList = window.matchMedia('(max-width: 700px)')
        this.state = {
            name: !this._mediaQueryList.matches ? "Desktop Demo" : "Mobile Demo",
            renderChild: !this._mediaQueryList.matches ? children1 : children2
        }
        this._mediaQueryList.addEventListener("change", this.mediaQueryHandler)
    }

    mediaQueryHandler = (e) => {
        console.log(e)
        if (e.matches) {
            this.setState({
                name: "Mobile Demo",
                renderChild: this.children2
            })

        } else {
            this.setState({
                name: "Desktop Demo",
                renderChild: this.children1
            })
        }
    }

    render() {
        return (
            <div>
                <h1>This is a responsive app name: {this.state.name}!</h1>
                {this.state.renderChild}
            </div>
        );
    }
}

class Children1 extends React.Component {
    constructor(props) {
        super(props)
        console.log("Children 1 instantiate")
    }
    render() {
        return <h1>This is me 1</h1>
    }
}

class Children2 extends React.Component {
    constructor(props) {
        super(props)
        console.log("Children 2 instantiate")
    }
    render() {
        return <h1>This is me 2</h1>
    }
}

export function ResponsiveRoot() {
    return (
        <ResponsiveComponent>
            <Children1 />
            <Children2 />
        </ResponsiveComponent>
    )
}

// exports ResponsiveComponent;
// exports Children1;
// exports Children2;
