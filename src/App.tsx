import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { InfoArea } from './components/InfoArea/InfoArea';
import { TableArea } from './components/TableArea/TableArea';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setcurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Sistema Financeiro
        </C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        />


        {/* inserçao*/}


        {/* itens*/}
        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  )
}

export default App;