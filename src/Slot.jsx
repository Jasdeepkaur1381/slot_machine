import React from 'react';

const Slot = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;
    // let points = 0;
    // let icons = ["😃", "👏", "🎨"];
    // let first = icons[Math.floor(Math.random() * icons.length)];
    // let second = icons[Math.floor(Math.random() * icons.length)];
    // let third = icons[Math.floor(Math.random() * icons.length)];

    // const check = (first === second && second === third);
    // if (check) {
    //   points++;
    // }
    //or
    // let{x,y,z}=props;
    if (x === y && y === z) {
        return <>
            <h1 className='slot_emg'>{x} {y} {z}</h1>
            <h2 className='slot_emg'>Above pattern is Matching 😍</h2>
            <hr />
        </>;
    }
    else {
        return <>
            <h1 className='slot_emg'>{x} {y} {z}</h1>
            <h2 className='slot_emg'>Above pattern is Not Matching 💔 </h2>
            <hr />
        </>
    }

}
export default Slot;