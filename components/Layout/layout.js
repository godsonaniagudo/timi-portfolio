import Image from 'next/image'
import Link from 'next/link'
import { allIcons, socialIcons } from '../../icons'
import Styles from "./styles/styles.module.css"
import avatar from "./images/avatar.png"
import { useRouter } from 'next/router'

const Layout = ({children}) => {
    const router = useRouter()

    console.log({router});
    return (
        <div>
            <header className={Styles.header}>
                <div className={Styles.topInfo}>
                    <Link href={"#"}>
                        <p>Complete UX/UI Bootcamp - Signup for mentorship</p>
                    </Link>
                </div>

                <nav className={Styles.nav}>

                    <div className={Styles.navLeft}>
                        <Link href="/">
                            {
                                allIcons.mainLogo
                            }
                        </Link>

                        <div>
                            <Link href={"#"}>About Me</Link>

                            <Link href={"#"}>Design</Link>

                            <Link href={"#"}>Tutoring</Link>
                        </div>
                    </div>

                    <div className={Styles.navRight}>
                        {
                        socialIcons.map((item, index) => <Link href={"#"}>
                            <div>
                                {
                                item.icon
                                }
                            </div>
                        </Link>)
                        }
                    </div>

                </nav>
            </header>

            <main className={Styles.main}>
                {
                    children
                }
            </main>

            <footer className={router.pathname !== '/' ? Styles.footerLight : Styles.footerDark}>
                <div>
                    <Image src={avatar} width="39" height="39" />

                    <p>Copyright Adubi Oluwarotimi of DeeBo!! LLC 2021 - 2022 </p>
                </div>

                <Link href={"mailto:timmy.adubi@gmail.com"}>
                    timmy.adubi@gmail.com
                </Link>
            </footer>

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
    )
}

export default Layout