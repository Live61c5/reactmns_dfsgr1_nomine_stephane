import { useState } from 'react';

export default function UseStateButton() {
    const [color, setColor] = useState('red');

    return (
        <>
            {
                <button onClick={() => setColor(color === 'red' ? 'green' : 'blue')}>Click me</button>
            }
        </>
    );
}