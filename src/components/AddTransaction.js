import React,{useState}  from 'react'


export const AddTransaction = () => {

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    return (
        <>
            <h3>Agregar Transaccion</h3>
                <form>
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
