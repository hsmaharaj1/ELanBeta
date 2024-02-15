import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import WorkshopCard from "./WorkshopCard";
import MMWS from '../assets/workshops/poster copy-2.png'
import ws1 from '../assets/workshops/Workshops1.png'
import ws2 from '../assets/workshops/Workshops2.png'
import ws3 from '../assets/workshops/Workshops3.png'
import ws4 from '../assets/workshops/Workshops4.png'

const Workshops = () => {
  return (
    <>
      <div className="w-screen bg-[#FFF5E4]">
        <Navbar home={false} />
        <section className="w-screen h-auto px-8 pt-24 md:m-0">
          {/* <Link to="/">
            <AiOutlineArrowLeft
              size={60}
              color={'#874356'}
              className="w-6 h-6 ml-2 md:w-14 md:h-12 sm:ml-1 md:ml-8 lg:ml-4"
            />
          </Link> */}
          <h1 className="font-Moul text-[#850E35] text-4xl md:text-5xl lg:text-6xl p-6 mb-6 md:ml-4 overflow-hidden">
            About Our Workshops
          </h1>
          <div
            className="text-base font-bold leading-snug sm:p-2 md:p-8 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-Prompt sm:mx-4 md:mx-6 lg:mx-10 xl:mx-16"
            style={{
              marginLeft: "2rem",
              marginRight: "2rem",
              "@media (max-width: 450px)": { margin: "1rem" },
            }}
          >
            Workshops are an essential part of our fest. They are intended for
            hands-on experiential learning. Our workshops are designed and
            planned in such a way that they improve students&apos; critical thinking
            skills.<br/><br/>
            Join Us at IIT Hyderabad's Elan & ηVision Workshop in Collaboration with Swecha<br/>

            📅 Date: 24th & 25th February (Saturday & Sunday)<br/>

            ⏰ Duration: 10:00 AM - 4:00 PM<br/>

            Accomodation Available(Only available for this workshop, register asap as we are closing soon)<br/>
          </div>
          
          <div className="h-auto text-3xl p-4 mb-6 overflow-hidden text-[#850E35] font-bold flex flex-col items-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkjtRYd6cvhtW7nw7nzAtKrRpbTYEO1gMzzU9fu9Om0Kteqw/viewform?usp=sharing" target="_blank">
            <Button style={{ backgroundColor: "#874356", width: "fit-content", borderRadius: "4px", fontSize: "1.6rem" }} ripple="light" className="rounded-full text-lg md:text-base px-4 md:px-3 py-2 md:py-1">ACCOMODATIONS</Button>
          </a>
            {/* <span className="inline-block overflow-hidden text-center">NO UPCOMING WORKSHOPS</span>
            <span className="inline-block overflow-hidden text-center">Stay tuned for further updates :)</span> */}
            <div className="flex flex-row justify-evenly gap-10 flex-wrap">
              <WorkshopCard
                title={"Market Mastery Workshop Series"}
                description={
                  "This workshop covers all aspects essential for a strong foundation in stock trading, making it ideal for beginners.  Learn from experienced professionals in the field who will share practical insights and valuable tips. Whether you aspire to build long-term wealth or generate additional income, this workshop empowers you to take control of your financial future through informed stock trading. "
                }
                img={MMWS}
                timefrom={"24th Feb"}
                timeto={"25th Feb"}
                mode={"online"}
                registration={
                  "https://unstop.com/workshops-webinars/market-mastery-workshop-series-elan-ivision-2024-iit-hyderabad-882942"
                }
              />
              <WorkshopCard
                title={"Cloud Native Computing"}
                description={
                  "Container management with Docker and Kubernetes."
                }
                img={ws2}
                timefrom={"24th Feb"}
                timeto={"25th Feb"}
                mode={"OFFLINE"}
                registration={
                  "https://unstop.com/p/cloud-native-computing-elan-ivision-2024-iit-hyderabad-889353"
                }
              />
              <WorkshopCard
                title={"Generative AI powered Apps"}
                description={
                  "Build apps for the era of GenAI"
                }
                img={ws1}
                timefrom={"24th Feb"}
                timeto={"25th Feb"}
                mode={"OFFLINE"}
                registration={
                  "https://unstop.com/p/generative-ai-powered-apps-elan-ivision-2024-iit-hyderabad-888623"
                }
              />
              <WorkshopCard
                title={"Digital Detectives"}
                description={
                  "Leveraging threat intelligence for cyber security"
                }
                img={ws4}
                timefrom={"24th Feb"}
                timeto={"25th Feb"}
                mode={"OFFLINE"}
                registration={
                  "https://unstop.com/p/digital-detectives-leveraging-threat-intelligence-for-cyber-security-elan-ivision-2024-iit-hyderabad-889384"
                }
              />
              <WorkshopCard
                title={"Full Stack App Development"}
                description={
                  "Level up your stack with React and Next.js"
                }
                img={ws3}
                timefrom={"24th Feb"}
                timeto={"25th Feb"}
                mode={"OFFLINE"}
                registration={
                  "https://unstop.com/p/full-stack-app-development-elan-ivision-2024-iit-hyderabad-889373"
                }
              />
            </div>

          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Workshops;
