const exteralApicall = async () => {
  const request = await fetch('https://api.tvmaze.com/singlesearch/shows?q=adventure');
  const response = await request.json();
  return response;
};
