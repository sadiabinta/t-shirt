import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>aunty</h2>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Aunty;