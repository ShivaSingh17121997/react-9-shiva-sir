import React, { useState, useEffect } from 'react';

const LifecycleComponent = () => {
    const [count, setCount] = useState(0);

    // This effect runs only once when the component is mounted
    useEffect(() => {
        console.log('Component is created (componentDidMount)');

        // Cleanup function runs when the component is unmounted
        return () => {
            console.log('Component is deleted (componentWillUnmount)');
        };
    }, []); // Empty dependency array means this effect runs once

    // This effect runs on every render (update)
    useEffect(() => {
        console.log('Component is updated (componentDidUpdate)');

        // Optionally, return a cleanup function to run on unmount
        return () => {
            console.log('Cleanup before update or unmount');
        };
    }); // No dependency array means this effect runs on every render

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

const App = () => {
    const [showComponent, setShowComponent] = useState(true);

    return (
        <div>
            <button onClick={() => setShowComponent(!showComponent)}>
                Toggle Component
            </button>
            {showComponent && <LifecycleComponent />}
        </div>
    );
};

export default App;
