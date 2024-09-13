import React, { useId } from 'react';


  const InputBox = ({label, amount, onAmountChange, onCurrencyChange, currencyOption=[],selectCurrency='usd',amountDisable=false, currencyDisable=false, classNaame=''}) => {
    const amountId = useId()
    return  (  
    <div className={`flex items-center bg-white space-x-4 w-64 ${classNaame}`}>
    <label htmlFor={amountId} className=
    "text-black/40 mb-2 inline-block">
            {label}
        </label>
    <input
    id={amountId}
      type="number"
      className="w-full p-2 rounded-md outline-none text-center"
      placeholder="Amount"
      disabled={amountDisable}
      value={amount}
      onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
    />

    <select className=" p-2  rounded-md" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
      {currencyOption.map((currency)=>(
        <option key={currency} value={currency}>{currency}</option>
      ))}
    </select>
  </div>
      );
  };

  export default InputBox;