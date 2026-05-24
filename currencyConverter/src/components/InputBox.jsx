import React from "react";
// learn about markdown


function InputBox({
    // we are taking  inputs label and the className
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], // by default array leli for the worst case
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false, 
    className = "",
}) {
   
//const amountInputId = useId() // it will give a unique id
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label 
                 className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange = {(e)=>onAmountChange && onAmountChange(Number(e.target.value))} // one is checker that the amount is available or not to prevent from crash we used && 

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none  " value = {selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                    
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value ={currency}>{currency}</option>
                    ))}
                    
                        <option value="usd">
                            usd
                        </option>
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
