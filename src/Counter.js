import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className='centered'>
            <h1>
                Count: {count}<br /><br />
                <Button className='rounded-circle' onClick={() => setCount(count - 1)}>-</Button>
                <Button className='rounded-circle' onClick={() => setCount(count + 1)}>+</Button>
            </h1>
        </div>
    );
}
export default Counter;
