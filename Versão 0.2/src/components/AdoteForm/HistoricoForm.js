import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Histórico de Adoção
      </Typography>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">É a primeira vez que você adota um animal?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
        <FormControlLabel value="Não" control={<Radio />} label="Não" />
        </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Você possui experiência com cuidado de animais?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
        <FormControlLabel value="Não" control={<Radio />} label="Não" />
        <FormControlLabel
          value="Um pouco"
          control={<Radio />}
          label="Um pouco"
        />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Você mora em:</FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="A" control={<Radio />} label="Casa" />
        <FormControlLabel value="B" control={<Radio />} label="Apartamento" />
        <FormControlLabel
          value="C"
          control={<Radio />}
          label="Outro"
        />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Você caracteriza sua casa como:</FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="A" control={<Radio />} label="Aberta (Ventilada)" />
        <FormControlLabel value="B" control={<Radio />} label="Fechada" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Mora sozinho(a)?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
        <FormControlLabel value="Não" control={<Radio />} label="Não" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Você trabalha muito?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
        <FormControlLabel value="Não" control={<Radio />} label="Não" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Está ciente sobre a responsabilidade ao realizar a adoção?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
        <FormControlLabel value="Não" control={<Radio />} label="Não" />
      </RadioGroup>
    </FormControl>

    </React.Fragment>
  );
}