const useGenres = (selectedGenres) => {
    if (!selectedGenres || selectedGenres.length < 1) return "";

    const genreIds = selectedGenres.map((g) => g.id);
    return genreIds.join(',');
}

export default useGenres;
