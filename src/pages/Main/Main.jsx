import React, { memo } from 'react'
import Api from '../../commons/utils/api';

import { Container } from './styles';

function Main() {
  const [data, setData] = React.useState({});
  const [country, setCountry] = React.useState('brazil')

  const getCovidData = React.useCallback((country) => {
    Api.getCountry(country)
    .then(data => console.log(data))
  }, [])
  
  React.useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  return (
    <Container>
      <div className="mb-2">
      OOOOI
      </div>

    </Container>
  )
}
// memo é similar ao pureComponent, cria um componente imutavel, evitando
// renderização desnecessária na página
export default memo(Main)
