const absoluteUrl = (path: string) => {
  const baseUrl = process.env.BASE_URL;

  return `${baseUrl}${path}`;
};

export { absoluteUrl };
