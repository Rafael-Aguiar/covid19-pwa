import React, { memo } from 'react';
import RefreshIcon from '../../../assets/images/refresh.svg';
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardContentStyled, Item } from './styles';

const navigatorHasShare = navigator.share;

function Panel({ updateAt, OnChange, data, country, getCovidData}) {

  const {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
  } = data;

  const renderCountries = (country, index) => (
    <MenuItem 
    key={`country-${index}`}  
    value={country.value}
    >
      <Item>
        <div> {country.label} </div>
        <img src={country.flag} alt={country.label}/>
      </Item>
    </MenuItem>
  );

  const textCovid19 = `País: ${country}, Casos hoje: ${todayCases}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid 19 - ${country}`,
      text: textCovid19,
      url: '.....com'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="container" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="container" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <CardContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID19
          </Typography>
          <Typography variant="h6" component="span" color="primary">
            Paínel Covid
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            Atualizado em: {updateAt}
          </Typography>
          <div className="pt-2">
            <Select onChange={OnChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardContentStyled>
    </Card>
  )
}

export default Panel
