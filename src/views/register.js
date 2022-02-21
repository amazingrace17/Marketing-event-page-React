import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import projectStyles from '../style.module.css'
import styles from './register.module.css'

const Register = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Register - Marketing event page</title>
        <meta property="og:title" content="Register - Marketing event page" />
      </Helmet>
      <Navigation rootClassName="rootClassName"></Navigation>
      <form className={styles['Form']}>
        <input
          type="text"
          placeholder="placeholder"
          className={` ${styles['textinput']} ${projectStyles['input']} `}
        />
      </form>
    </div>
  )
}

export default Register
