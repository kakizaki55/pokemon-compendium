import * as React from 'react';
import './Selector.css';

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
  types,
}) {
  return (
    <div className="container-container">
      <div className="selector-container">
        <h1 id="pokedex-text"> Pokedex </h1>
        <div id="search-container">
          <div id="search-bar">
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
              {types.map((ty) => (
                <MenuItem key={ty.type} value={ty.type}>
                  {ty.type}
                </MenuItem>
              ))}
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
      </div>
    </div>
  );
}
