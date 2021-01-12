import React, { memo } from 'react'
import Api from '../../commons/utils/api';
import Board from './components/Board';
import Panel from './components/Panel'
import { Container } from './styles';

function Main() {
  const [data, setData] = React.useState({});
  const [country, setCountry] = React.useState('brazil');
  const updateAt = new Date().toLocaleString();

  const getCovidData = React.useCallback((country) => {
    Api.getCountry(country)
    .then(data => setData(data))
  }, []);
  
  React.useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country]);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  }

  return (
    <Container>
      <div className="mb-2">
        <Panel 
        data={data}
        updateAt={updateAt}
        OnChange={handleChange}
        country={country}
        getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />

    </Container>
  )
}
// memo é similar ao pureComponent, cria um componente imutavel, evitando
// renderização desnecessária na página
export default memo(Main)
