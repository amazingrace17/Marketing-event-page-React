import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './register.module.css'

const Register = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Register - Marketing event page</title>
        <meta property="og:title" content="Register - Marketing event page" />
      </Helmet>
      <div className={styles['container1']}>
        <img
          alt="image"
          src="/playground_assets/green-logo-1500w.png"
          className={styles['image']}
        />
        <div className={styles['container2']}>
          <form className={styles['Form']}>
            <h1 className={styles['text']}>
              <span></span>
              <span>Register</span>
              <br></br>
              <span></span>
              <span>&amp;#8203;</span>
            </h1>
            <input
              type="text"
              target="firstname"
              required="true"
              placeholder="First Name"
              className={` ${styles['textinput']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              name="lastname"
              required="true"
              placeholder="Last Name"
              className={` ${styles['textinput1']} ${projectStyles['input']} `}
            />
            <input
              type="number"
              name="phone"
              required="true"
              placeholder="Phone Number"
              className={` ${styles['textinput2']} ${projectStyles['input']} `}
            />
            <input
              type="email"
              name="email"
              required="true"
              placeholder="Email"
              className={` ${styles['textinput3']} ${projectStyles['input']} `}
            />
            <input
              type="password"
              name="password"
              required="true"
              placeholder="Password"
              className={` ${styles['textinput4']} ${projectStyles['input']} `}
            />
            <input
              type="password"
              name="confirmpassword"
              required="true"
              placeholder="Confirm Password"
              className={` ${styles['textinput5']} ${projectStyles['input']} `}
            />
            <input
              type="checkbox"
              checked="true"
              required="true"
              className={styles['checkbox']}
            />
            <span className={styles['text05']}>
              I agree to terms and condition
            </span>
            <button
              type="submit"
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              Register
            </button>
          </form>
        </div>
        <Link to="/login" className={styles['navlink']}>
          <span>have an account</span>
          <span className={styles['text07']}>â</span>
          <span>
            ?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text09']}>Sign in now.</span>
        </Link>
      </div>
    </div>
  )
}

export default Register
