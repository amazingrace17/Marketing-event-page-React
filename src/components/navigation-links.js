import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span
        className={` ${styles['text']} ${projectStyles['navigation-Link']} `}
      >
        {props.link1}
      </span>
      <span
        className={` ${styles['Text1']} ${projectStyles['navigation-Link']} `}
      >
        {props.link2}
      </span>
      <span
        className={` ${styles['text2']} ${projectStyles['navigation-Link']} `}
      >
        {props.link3}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link2: 'ARTISTS',
  link3: 'Agenda',
  link1: 'About',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
