// Taken from Redux form docs: https://redux-form.com/7.0.3/examples/fieldlevelvalidation/
export const validateEmail = value => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address.' : undefined;
  };

export const required = value => value ? undefined : 'Required';
