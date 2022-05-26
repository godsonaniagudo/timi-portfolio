import Head from 'next/head'
import Image from 'next/dist/client/image';
import { allIcons } from '../icons'
import Styles from "../styles/portfolio/styles.module.css"
import avatar from "../components/Layout/images/avatar.png"
import { portfolio } from '../portfolio';
import { Masonry } from '@mui/lab';
import { Grid } from '@mui/material';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>Timmy Adubi | Designs</title>
            </Head>
            <header>
                <div className={Styles.headerLeft}>
                    <div>
                        <h1>Design</h1>

                        <Image src={avatar} width="70" height={"70"}/> 
                    </div>

                    <h1>Portfolio</h1>
                </div>

                <div className={Styles.headerRight}>
                    <p>Take a look at some of the interesting experiences that I have created in products.</p>
                </div>
            </header>

            <div>
                <div className={Styles.portfolioItem1} style={{display: "flex"}}>
                    <div>
                        <img src={portfolio[0].imageURL} />
                    </div>

                    <div>
                        <h2>{portfolio[0].title}</h2>

                        <table>
                            <tbody>
                                <tr>
                                    <td>Role</td>
                                    <td>{portfolio[0].role}</td>
                                </tr>

                                <tr>
                                    <td>Platform</td>
                                    <td>{portfolio[0].platform}</td>
                                </tr>

                                <tr>
                                    <td>Year</td>
                                    <td>{portfolio[0].year}</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>{portfolio[0].description}</p>

                        <Link href={`/case-study/0`}><button style={Styles.visitProjectButton}>View Case Study</button></Link>
                    </div>
                </div>


                <div>
                    <Masonry container columns={2} spacing={10}>
                        {
                            portfolio.slice(1).map((item, index) => {
                                return <PortfolioItem item={item} studyID={index + 1} />
                            })
                        }
                    </Masonry>
                </div>
            </div>
        </div>
    )
}

export const PortfolioItem = ({item, type, studyID}) => {
    return (
        <Grid item xl={6} lg={6} md={6} >
            <div className={Styles.portfolioItem1} style={type == "case-study" ? {display: "block"} : item.displayType === "mobile" ? {display: "flex"} : {display: "block"}}>
                {
                    type !== "case-study" && <div style={item.displayType === "mobile" ? {width: "100%", paddingRight: "50px"} : {width: "100%"}}>
                    <img src={item.imageURL} />
                </div>
                }

                <div style={{width: "100%"}}>
                                            <h2>{item.title}</h2>

                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Role</td>
                                                        <td>{item.role}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Platform</td>
                                                        <td>{item.platform}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Year</td>
                                                        <td>{item.year}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <p>{item.description}</p>

                                            {
                                                type === "case-study" && <Link href={`#`}><button>Visit Project</button></Link>
                                            }

                                            {
                                                type !== "case-study" && <Link href={`/case-study/${studyID}`}><button style={Styles.visitProjectButton}>View Case Study</button></Link>
                                            }

                                            
                    </div>
                </div>
        </Grid>
    )
}

export default Portfolio