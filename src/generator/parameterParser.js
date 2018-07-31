function parseKeyValuePairs(variable) {
  const variableObj = {};
  if (variable) {
    variable
      .split(';')
      .filter(p => p.trim() !== '')
      .forEach(p => {
        const pairs = p.split('=');
        if (pairs.length > 1) {
          const [key, value] = pairs;
          variableObj[key] = value;
        }
      });
  }

  return variableObj;
}

export default function parameterParser(program = {}) {
  const variableObj = parseKeyValuePairs(program.variable);
  return Object.assign(
    {
      name: program.name,
    },
    variableObj,
  );
}
