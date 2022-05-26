import React from 'react';
import Head from 'next/head'
import Styles from "../styles/home/styles.module.css"
import { allIcons } from '../icons';
import avatar from "../components/Layout/images/avatar.png"
import Image from 'next/dist/client/image';
import { Grid, Link, Paper } from '@mui/material';
import { portfolio } from '../portfolio';
import { Masonry } from '@mui/lab';

export default function Home() {
  return (
    <React.Fragment>
        
      <div className='container' >
        <Head>
          <title>Timmy Adubi</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>




          <div className={Styles.hero} style={{margin: "0px"}}>
            <div className={Styles.heroContainer}>
              <div>
                <div>
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                  <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_2kHQhR.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop autoplay></lottie-player>
                </div>
              </div>

              <div className={Styles.heroContent}>
                <div className={Styles.heroContentLeft}>
                  <h1>Timmy is a Lagos-Based Product Designer &amp; Trainer</h1>

                  <p>I am uber proud of the products I've worked on and all the clients I've worked withover the years. Check out some of the 
                    amazing results I have delivered.
                  </p>

                  <span>
                    <button>
                      Let's have a chat
                    </button>

                    <button>
                      Get my resume
                    </button>
                  </span>
                </div>
                
                <div className={Styles.heroContentRight}>
                  <img />
                </div>
              </div>
            </div>


            <div className={Styles.content}>
              <h2>Career Highlights</h2>

              <p className={Styles.runnerText}>I am uber proud of the products I've worked on and all the clients I've worked withover the years. Check out some of the 
                    amazing results I have delivered.
              </p>

              
              <Masonry container columns={3} spacing={5}  >
                  {/* <Grid item xs={2} xl={2} lg={2} md={2} >
                    <div style={{backgroundColor: "black", height: "150px", width: "100%"}}>
                      <p>Hi</p>
                    </div>
                  </Grid>

                  <Grid item xl={2} lg={2} md={2} >
                    <div style={{backgroundColor: "black", height: "150px", width: "100%"}}>
                      <p>Hi</p>
                    </div>
                  </Grid>

                  <Grid item xl={6} lg={6} md={6} >
                    <div style={{backgroundColor: "black", height: "150px", width: "100%"}}>
                      <p>Hi</p>
                    </div>
                  </Grid> */}

                  {
                    portfolio.slice(0, 9).map((item, index ) => 
                    <Grid item xl={6} lg={6} md={6} >
                      <Link href={`/case-study/${index}`}>
                        <div style={{borderColor: item.color}} className={Styles.portfolioItem}>
                          <img src={item.imageURL}/> 

                          <div>
                            <p style={{color: item.color}}>{item.title}</p>
                          </div>
                        </div>
                      </Link>
                    </Grid>)
                  }
                  

                  
              </Masonry>

              <div className={Styles.seeMoreButtonContainer}>
                <Link href="/portfolio">
                  <button>See More</button>
                </Link>
              </div>

              
            </div>

            
          </div>


          <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-width: 100%;
            box-sizing: border-box;
            padding-left: 110px;
            padding-right: 110px;
          }





          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>


      </div>
    




        


      <div className={Styles.callToActionDiv}>
        <div className={Styles.c2aLeft}>
          <div>
            <Image src={avatar} width="70px" height={"70px"} />

            <Image src={avatar} width="70px" height={"70px"} />
          </div>

          <div>
            <Image src={avatar} width="70px" height={"70px"} />
          </div>

          <div>
            <Image src={avatar} width="70px" height={"70px"} />

            <Image src={avatar} width="70px" height={"70px"} />
          </div>

        </div>

        <div className={Styles.c2aRight}>
          <h2>Ready to create something innovative?</h2>

          <p>As you have already gathered, I am pretty much open and ready to work with you either as a consultant, mentor or on
            your software business strategy.
          </p>

          <button>Book a Consultation</button>
        </div>
      </div>
    </React.Fragment>
  )
}
