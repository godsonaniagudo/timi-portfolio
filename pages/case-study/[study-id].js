import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { portfolio } from "../../portfolio"
import Styles from "../../styles/case-study/styles.module.css"
import { PortfolioItem } from "../portfolio"
import Head from 'next/head'

const CaseStudy = () => {
    const router = useRouter()
    const [study, setStudy] = useState("")

    useEffect(() => {
        const studyID = window.location.href.split("/")[4]
        setStudy(portfolio[Number(studyID)])
    }, [])

    

    if (Object.entries(study).length === 0) {
        return (
            <div className={Styles.container}>
                <Head>
                    <title>Case Study</title>
                </Head>
                <p>This isn't a valid case study</p>
            </div>
        ) 
    } else {
        return (
            <div className={Styles.container}>
                <Head>
                    <title>{`Timmy Adubi | Case Studies | ${study.title}`}</title>
                </Head>
                <PortfolioItem item={study} type={"case-study"} />
            </div>
        )
    }
}

export default CaseStudy