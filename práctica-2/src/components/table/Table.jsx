const Table = ({netIncomes}) => {
  const mappedNetIncomes = netIncomes.map(element => {return (
    <tr>
      <td>{element.brand}</td>
      <td>{element.income}</td>
    </tr>
    
  );
  })

  const incomes = netIncomes.map(element => element.income)
  const sumIncomes = incomes.reduce((a, b) => { return a + b })
  const cantIncomes = incomes.length
  const averageIncome = sumIncomes / cantIncomes

  return (
    <>
      <tr>
        <th>marca</th>
        <th>income</th>
      </tr>
      {mappedNetIncomes}
      <p>El promedio es: {averageIncome}</p>
    </>
  );
  
};

export default Table;