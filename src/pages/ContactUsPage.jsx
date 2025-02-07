import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
const ContactUsPage = () => {
  return (
    <div>
      {/* hero section */}
      <section className=" w-full h-screen flex justify-start items-center text-white bg-center bg-cover bg-no-repeat bg-[url(./assets/images/ContactUsHero.png)]">
        <div className=" relative px-10 w-[40%]">
          <h2 className="text-5xl font-bold tracking-widest leading-16">
            Stay <span className="text-primary">Connected</span> With Us
          </h2>
          <div className=" absolute w-28 h-1 bg-primary bottom-6 left-[260px]"></div>
        </div>
      </section>
      {/* card section */}
      <section className="flex flex-wrap justify-center w-[90%] mx-auto text-white bg-[#0B0A72]/25 backdrop-blur-lg rounded-[20px] py-10 gap-10 px-10">
        <div className="flex flex-col items-center gap-y-5 bg-[#002244] p-5 rounded-2xl flex-1 min-w-[200px] min-h-[250px]">
          <MdCall className="text-5xl" />
          <p className="font-bold text-3xl">Phone</p>
          <div>
            <p>+91-958-957-2990</p>
            <p>+91-963-008-8808</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-5 bg-[#002244] p-5 rounded-2xl flex-1 min-w-[200px] min-h-[250px]">
          <FaLocationDot className="text-5xl" />
          <p className="font-bold text-3xl">Address</p>
          <div>
            <p>Lig square,Indore,</p>
            <p>[M.P.]India</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-5 bg-[#002244] p-5 rounded-2xl flex-1 min-w-[200px] min-h-[250px]">
          <MdEmail className="text-5xl" />
          <p className="text-3xl font-bold">E-mail</p>
          <p>Itsunicorntech@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-y-5 bg-[#002244] p-5 rounded-2xl flex-1 min-w-[200px] min-h-[250px]">
          <BsPeopleFill className="text-5xl" />
          <p className="text-3xl font-bold">Follow us</p>
          <div className="flex gap-2 items-center text-4xl text-primary">
            <FaFacebook />
            <FaXTwitter />
            <FaLinkedin />
            <IoLogoWhatsapp />
            <RiInstagramFill />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
