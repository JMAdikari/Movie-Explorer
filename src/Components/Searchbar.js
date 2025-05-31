import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment, Alert, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchMovies } from '../Services/Movieservice'; // Import from Movieservice.js
import { useTheme } from '@mui/material/styles';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please enter a movie name to search.');
      return;
    }

    try {
      setError(null);
      const results = await searchMovies(query); // Use searchMovies from Movieservice.js
      if (results.length === 0) {
        setError('No movies found for your search. Try another title.');
        return;
      }
      navigate(`/search?q=${encodeURIComponent(query)}`);
      // Store last searched movie in localStorage as per project requirements
      localStorage.setItem('lastSearchedMovie', query);
    } catch (err) {
      setError(err.message || 'Failed to search movies. Please try again later.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: { xs: '100%', sm: 'auto' } }}>
      <form onSubmit={handleSearch}>
        <TextField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: theme.palette.mode === 'dark' ? 'grey.800' : 'white',
            borderRadius: 1,
            minWidth: { xs: '100%', sm: 250 },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme.palette.divider,
              },
              '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" edge="end" aria-label="Search movies">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          aria-label="Search movies"
        />
      </form>
      {error && (
        <Alert severity="error" sx={{ mt: 1, width: { xs: '100%', sm: 'auto' } }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default SearchBar;