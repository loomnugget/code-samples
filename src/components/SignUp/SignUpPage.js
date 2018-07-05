import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from './SignUpFormContainer';
import css from './SignUpPage.scss';

const SignUpPage = () => {
  return(
    <div className={css.signUpPage}>
      <SignUpFormContainer />

      <div className={css.link}>
        <Link to='/' > Back To Login </Link>
      </div>
      
    </div>
  );
};

export default SignUpPage;
