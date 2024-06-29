import TitleCaption from "../../../Hooks/TitleCaption";
import about from "../../../assets/img/P3.jpg";

const About = () => {
  const btnPrime = {
    backgroundColor: "#212428", // Fix the property name and add a semicolon
    border: "none",
    boxShadow: "4px 0px 10px rgba(240, 239, 239, 0.1)",
    color: "#F9004D",
  };
  return (
    <div
      id="about"
      className="text-[#f1f0f0]  border-b-2 border-[#191c20] flex flex-col justify-center items-center lg:block"
    >
      <TitleCaption
        subTitle={"About"}
        mainTitle={"Know About Me"}
      ></TitleCaption>

      <div className="">
        <div className="lg:flex mt-14  lg:justify-around gap-12 mb-24 ">
          <div className="flex justify-center">
            <div className="card ml-2 lg:ml-0 w-[400px] md:w-[500px] h-[620] bg-[#25282e] rounded-md shadow-xl">
              <div className="w-full py-8">
                <figure>
                  <img src={about} alt="user image" className="rounded-md" />
                </figure>
              </div>
            </div>
          </div>
          <div className="flex items-center ml-4 lg:ml-0">
            <div className="w-[65%] md:mt-4 lg:mt-0 mx-auto lg:text-left">
              <h1 className="text-4xl font-semibold ">About Me</h1>
              <hr />
              <p className="mt-6">
                I am Habibur Rahman Zihad. I am recently completed my graduation from Daffodil
                International University with a degree B.Sc in CSE and maintained a CGPA of 3.57.
              </p>
              <br />
              <p>
                I am also a Mern Stack Developer. My experties are HTML, CSS,
                Javascript, React, Tailwind, Node, ExpressJs & MongoDB. I am also known with Firebase
                authintication. Well Known with Express.js and MongoDB for Back-End.
                Now I am most prefarable with Tailwind and React.js.Also
                comfortable to do responsive any website.
              </p>

              <button
                className="px-6 py-3 rounded-md mt-8 hover:-translate-y-2"
                style={btnPrime}
              >
                <a
                  href="https://drive.google.com/file/d/1qYO3i5wGyqnYfKTC0M9Zso4pl19QKkmx/view?usp=sharing"
                  download="Habibur_Rahman_Zihad_CV"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
