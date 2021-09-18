import { Fragment } from "react";
import React, { useState, useEffect } from 'react';

// Import Components
import Container from "../components/fragment/FragContainer.js"

// Import Resources
import { pageBgColor, fragBgColor, titleColor } from "../components/color/Color.js"


const Example = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}


const HomeTitle = () => {
    return (
        <div>
            <h1 style={{ 'color': titleColor, 'font-family': 'monospace' }}>
                Welcome to Tracie Page
            </h1>
        </div>
    );
}

// Home Body Contents
const HomeContents = () => {
    return (
        <div>
            <p>
                This is some contentwecrwerwvrwetrebtwerwtwtvwertertretsssservteswervwerwer
                erwetrwertveterte rtvertver
                <Example />
            </p>
        </div>
    );
}


const Home = () => {
    return (
        <Fragment>
            <Container>
                <HomeTitle />
                <HomeContents />
            </Container>
        </Fragment>
    );
}

export default Home