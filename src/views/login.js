import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './login.module.css'

const Login = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Login - Marketing event page</title>
        <meta property="og:title" content="Login - Marketing event page" />
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
              <span>Sign in</span>
            </h1>
            <input
              type="email"
              name="email"
              required="true"
              placeholder="Email"
              className={` ${styles['textinput']} ${projectStyles['input']} `}
            />
            <input
              type="password"
              name="password"
              required="true"
              placeholder="Password"
              className={` ${styles['textinput1']} ${projectStyles['input']} `}
            />
            <span className={styles['text2']}>Forget password</span>
            <button
              type="submit"
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              sign in
            </button>
          </form>
        </div>
        <Link to="/register" className={styles['navlink']}>
          <span>New to green indie</span>
          <span className={styles['text4']}>&amp;#8203;</span>
          <span>
            ?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text6']}>Sign up now.</span>
        </Link>
      </div>
    </div>
  )
}

export default Login
