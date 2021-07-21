import React,{useState,useContext}  from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext);

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction ={
            id: Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Agregar Transaccion</h3>
                <form onSubmit={onSubmit} >
                    <div className="form-control">
                        <label htmlFor="text">Texto</label>
                        <input type="text" value={text} onChange={(e) =>setText(e.target.value)} 
                        placeholder="Ingrese Texto" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount"
                        >Monto <br /> 
                        (negativo - gastos / positivo - ingresos)
                        </label>
                        <input type="number" value={amount} onChange={(e) =>setAmount(e.target.value)}  placeholder="Ingrese Monto" />
                    </div>
                    <button className="btn">Agregar Transaccion</button>
                </form>
           

        </>
    )
}
