import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';

export default function Selector({
  query,
  setQuery,
  type,
  setType,
  order,
  setOrder,
  isLoading,
  setIsLoading,
}) {
  return (
    <div className="selector-container">
      <div>
        <TextField
          value={query}
          placeholder="search here"
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <Button
          variant="outlined"
          value={isLoading}
          onClick={(e) => {
            setIsLoading(e.target.value);
          }}
        >
          Search
        </Button>
      </div>
      <FormControl>
        <InputLabel id="pokemon-type">type</InputLabel>
        <Select
          labelId="pokemon-type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="normal">normal</MenuItem>
          <MenuItem value="fire">fire</MenuItem>
          <MenuItem value="water">water</MenuItem>
          <MenuItem value="grass">grass</MenuItem>
          <MenuItem value="flying">flying</MenuItem>
          <MenuItem value="fighting">fighting</MenuItem>
          <MenuItem value="electric">electric</MenuItem>
          <MenuItem value="ice">ice</MenuItem>
          <MenuItem value="poison">poison</MenuItem>
          <MenuItem value="ground">ground</MenuItem>
          <MenuItem value="psychic">psychic</MenuItem>
          <MenuItem value="bug">bug</MenuItem>
          <MenuItem value="rock">rock</MenuItem>
          <MenuItem value="ghost">ghost</MenuItem>
          <MenuItem value="dark">dark</MenuItem>
          <MenuItem value="dragon">dragon</MenuItem>
          <MenuItem value="steel">steel</MenuItem>
          <MenuItem value="fairy">fairy</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="pokemon-type">order</InputLabel>
        <Select
          value={order}
          onChange={(c) => {
            setOrder(c.target.value);
          }}
        >
          <MenuItem value="asc">A-Z</MenuItem>
          <MenuItem value="desc">Z-A</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
