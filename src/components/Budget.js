import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, dispatch,expenses, currency } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} 

        else if (val>20000){
            alert("The budget can't exceed 20000!");
        }
        
        
        else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	};

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
        };

	
	return (
		<div className='alert alert-secondary'>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                <option defaultValue>Currency select</option>
                <option value="£" name="pound">Pound</option>
                <option value="$" name="dollar">Dollar</option>
                <option value="₹" name="rupees">Rupees</option>
                <option value="€" name="euro">Euro</option>
                </select>
                <span> -- Budget: {currency}</span>
			<input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
            </div>
	);
};

export default Budget;
