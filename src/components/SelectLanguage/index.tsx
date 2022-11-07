import React from 'react';
import { setSelectedLanguage } from '../../redux/typingSpeedSlice';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface LanguageType {
  code: string;
  language: string;
}

function SelectLanguage() {
  const dispatch = useDispatch();

  const languages: readonly LanguageType[] = [
    { code: 'us', language: 'English' },
    { code: 'es', language: 'Spanish' },
    { code: 'it', language: 'Italian' }
  ];

  const handleChange = (e: any) => {
    dispatch(setSelectedLanguage(e.target.value))
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel> Select a Language</InputLabel>
        <Select
          defaultValue={'english'}
          label="Select a Language"
          onChange={e => handleChange(e)}
        >
          {languages && languages.map(option => (

            <MenuItem key={option.code} value={option.language.toLowerCase()}>
              <Box sx={{ '& > img': { mr: 2, flexShrink: 0 } }} >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.language}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>


  );
}

export default SelectLanguage;