import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';


const Uncle = () => {
    const [money, setMoney]=useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>grandpa has {money}</p>
            <button onClick={()=>setMoney(money+1000)}>send 1000</button>
            <section className='flex'>
                <Cousin>abir</Cousin>
                <Cousin hasFriend={true} >kabir</Cousin>
            </section>
        </div>
    );
};

export default Uncle;