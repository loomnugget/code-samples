import React from 'react';
import SignUpFormContainer from './SignUpFormContainer';
import css from './SignUpPage.scss';

const SignUpPage = () => {
  return(
    <div className={css.signUpPage}>
      <SignUpFormContainer />
    </div>
  );
};

export default SignUpPage;
