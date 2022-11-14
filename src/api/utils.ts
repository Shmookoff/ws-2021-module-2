const dateReplacer = (key: string, value: any) => {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
};
