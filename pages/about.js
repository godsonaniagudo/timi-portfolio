import Styles from "../styles/about/styles.module.css"
import Head from 'next/head'
import avatar from "../components/Layout/images/avatar.png"
import Image from 'next/image'
import { aboutSocialIcons } from "../icons"
import { testimonials } from "../testimonials"

const About = () => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>Timmy Adubi | About</title>
            </Head>

            <header className={Styles.header}>
                        <h1>About<br />Me</h1>

                        <Image src={avatar}  />
            </header>

            <div className={Styles.aboutSection}>
                <div className={Styles.aboutLeft}>
                    

                    <div className={Styles.divider}>

                    </div>

                    <div className={Styles.actionButtonsContainer}>
                        <button>Let's Have a chat</button>

                        <button>Get My Resume</button>
                    </div>
                    
                    <div className={Styles.socialIconsContainer}>
                        {
                            aboutSocialIcons.map((item, index) => {
                                return <div>
                                        {
                                            item.icon
                                        }
                                    </div>
                            })
                        }
                    </div>
                </div>

                <div className={Styles.aboutRight}>
        	        <h2>Why Timmy?</h2>

                    <p>Look at it this way: that feeling you get when you get a gift and it's exactly what you've always wanted? That's 
                        the kind of experience I aim to deliver with each work I put out. Imagine that feeling every time you use an app to drive
                        value to yourself or your users. That's my mission - to bring ease of use and delight to everyone's lives.
                    </p>

                    <p>
                        Timmy Adubi is a Designer, Artist &amps; Entrepereneur.

                        First and foremost, a human with an eye for details, he primarily works on graphics designs and creative design strategies.
                    </p>

                    <p>In the past, he worked in tech as a design director and designer for companies like Asseco Nigeria, the Nigerian Civil Aviation
                        Authority and NGCareers.com. He's an alumnus of Walden University, Minnesota where he graduated with a distinction.
                    </p>

                    <p>Outside of work, he enjoys eating a good meal, making good music and training aspiring UXers in Lagos, Nigeria.</p>
                </div>
            </div>

            <div className={Styles.testimonialsSection}>
                <h2>
                    Testimonials
                </h2>

                <div className={Styles.testimonialsContainer}>
                    {
                        testimonials.map((item, index) => <div className={Styles.testimonial}>
                            <div className={Styles.testimonialHeader}>
                                <div style={{borderColor : `${item.color}`}} className={Styles.testimonialAvatar}></div>

                                <div className={Styles.testimonialWriter}>
                                    <h3>{item.name}</h3>

                                    <span>
                                        <p>{item.position}</p>
                                        <p>{item.location}</p>
                                    </span>
                                </div>
                            </div>

                            <p className={Styles.testimonialText}>{item.testmonial}</p>
                        </div>)
                    }
                </div>
            </div>
            
        </div>
    )
}

export default About