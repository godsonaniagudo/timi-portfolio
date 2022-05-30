import Styles from "../styles/about/styles.module.css"
import Head from 'next/head'
import avatar from "../components/Layout/images/avatar.png"
import Image from 'next/image'

const About = () => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>Timmy Adubi | About</title>
            </Head>

            <div>
                <h1>About Me</h1>

                <Image src={avatar}  />
            </div>
        </div>
    )
}

export default About