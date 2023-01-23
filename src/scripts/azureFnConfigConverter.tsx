const convertFnConfig = (input: any[]): any=> {
  const result = input.reduce((obj: any, cfg: any) => {
    obj[cfg.name] = cfg.value;
    return obj;
  }, {})

  return result;
};

export {
  convertFnConfig,
}
