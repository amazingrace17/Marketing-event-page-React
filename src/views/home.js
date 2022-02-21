import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Marketing event page</title>
        <meta property="og:title" content="Marketing event page" />
      </Helmet>
      <Navigation></Navigation>
      <main className={styles['Main']}>
        <div
          className={` ${styles['Hero']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['content-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading1']} `}
              >
                <span>
                  THE MOST INSIGHTFUL
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text02']}>MARKETING CONFERENCE</span>
                <br></br>
                <span>IN EUROPE</span>
                <span></span>
              </h1>
              <span className={styles['text05']}>
                <span>GET YOUR TICKETS AT A HALF PRICE UNTIL 10.10.2022.</span>
                <br></br>
                <span>HURRY UP, LIMITED NUMBERS AVAILABLE.</span>
              </span>
              <div className={styles['btns-container']}>
                <button
                  className={` ${styles['primary']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
                >
                  register now
                </button>
                <button
                  className={` ${projectStyles['button']} ${projectStyles['button-outline']} ${projectStyles['button-lg-border']} `}
                >
                  learn more
                </button>
              </div>
            </div>
            <div className={styles['video-container']}>
              <video
                src
                muted="true"
                poster="/playground_assets/rectangle%205-1200w.png"
                autoPlay="true"
                controls="true"
                className={styles['video']}
              ></video>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['Sponsors']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text08']}>
              <span></span>
              <span>proudly sponsored by</span>
            </span>
            <div className={styles['container1']}>
              <img
                alt="image"
                src="/playground_assets/group%207-1200w.png"
                className={styles['image']}
              />
              <img
                alt="image"
                src="/playground_assets/group%208-1200w.png"
                className={styles['image1']}
              />
              <img
                alt="image"
                src="/playground_assets/group%209-1200w.png"
                className={styles['image2']}
              />
              <img
                alt="image"
                src="/playground_assets/group%2010-1200w.png"
                className={styles['image3']}
              />
              <img
                alt="image"
                src="/playground_assets/group%2011-1200w.png"
                className={styles['image4']}
              />
              <img
                alt="image"
                src="/playground_assets/group%2012-1200w.png"
                className={styles['image5']}
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles['Speakers']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <span className={styles['text11']}>
                16 speakers from 7 countries and 3 continents
              </span>
              <h1
                className={` ${styles['text12']} ${projectStyles['heading2']} `}
              >
                <span>meet our speakers</span>
                <span className={styles['text14']}></span>
              </h1>
            </div>
            <div className={styles['speakers-container']}>
              <SpeakerCard></SpeakerCard>
              <SpeakerCard
                role="digital marketing associate @ WPP"
                lastName="Simpson"
                firstName="Mellisa"
                image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="VP OF Marketing @ BUZZFEED"
                lastName="tevlenko"
                firstName="alina"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="HEAD OF DIGITAL @ HUBSPOT"
                lastName="iprovich"
                firstName="gregor"
                image_src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="marketing officer @ salesforce"
                lastName="daris"
                firstName="damian"
                image_src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="social media manager @ vodafone"
                lastName="warren"
                firstName="matt"
                image_src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="creative director @ BBDO"
                lastName="moore"
                firstName="kathie"
                image_src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="chan"
                firstName="erick"
                image_src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="rootClassName"></Footer>
    </div>
  )
}

export default Home
