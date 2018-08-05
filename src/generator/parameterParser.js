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

function generateParams(params) {
  const generatedObj = {};

  Object.keys(params).forEach(key => {
    const value = params[key];
    if (value) {
      generatedObj[`${key}_Upper`] = value.toUpperCase();
      generatedObj[`${key}_UpperCamel`] =
        value.charAt(0).toUpperCase() + value.slice(1);
    }
  });

  return generatedObj;
}

export default function parameterParser(program = {}) {
  const variableObj = parseKeyValuePairs(program.variable);
  const params = Object.assign(
    {
      name: program.name,
    },
    variableObj,
  );

  return Object.assign(generateParams(params), params);
}
