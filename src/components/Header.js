import React from 'react';

function Header({totalIncome}) {
    return (
        <header>
        <h1>Income tracker</h1>
        <div className="total-income">R{totalIncome}</div>
            
        </header>
    )
}

export default Header
