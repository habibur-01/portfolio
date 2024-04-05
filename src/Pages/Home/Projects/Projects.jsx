import TitleCaption from "../../../Hooks/TitleCaption";
import projects1 from "../../../assets/img/projects/15.jpg"
import projects2 from "../../../assets/img/projects/13.jpg"
import projects3 from "../../../assets/img/authentication1.png"


const Projects = () => {
    const btnPrime = {
        backgroundColor: "#212428", // Fix the property name and add a semicolon
        border: "none",
        boxShadow: "4px 0px 10px rgba(240, 239, 239, 0.1)",
        color: "#F9004D",
    }

    return (
        <div id="projects" className='border-b-2 border-[#191c20] '>

            <TitleCaption subTitle={'Projects'} mainTitle={'My Projects'}></TitleCaption>
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                <div className="card w-96 bg-[#1E2125] text-[#f1f0f0] shadow-xl hover:bg-gradient-to-r from-[#1E2125] to-[#141416] hover:-translate-y-3  hover:shadow-xl duration-300">
                    <figure className="px-10 pt-10">
                        <img src={projects1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-justify">TaskZen</h2>
                        <p>You can easily add your upcoming task. Which is make your time management more efficient.Also it send you notification about your todays work. </p>
                        <div className="card-actions space-x-2">
                            <button className="btn-prime px-6 py-3 rounded-md"><a href="https://github.com/habibur-01/Task-Management-Client-">Details</a></button>
                            <button className="btn-prime px-6 py-3 rounded-md"><a href="https://taskmanagement-7403c.web.app/">Live</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#1E2125] text-[#f1f0f0] shadow-xl hover:bg-gradient-to-r from-[#1E2125] to-[#141416] hover:-translate-y-3  hover:shadow-xl duration-300">
                    <figure className="px-10 pt-10">
                        <img src={projects2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Contest_Hunter </h2>
                        <p>ContestHub website refer to an online platform dedicated to hosting various types of contests. It can arrange various type ofcontest.</p>
                        <div className="card-actions space-x-2">
                            <button className="btn-prime px-6 py-3 rounded-md"><a href="https://github.com/habibur-01/CustomHub_Client">Details</a></button>
                            <button className="btn-prime px-6 py-3 rounded-md"><a href="https://contesthub-5c493.web.app/">Live</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#1E2125] text-[#f1f0f0] shadow-xl hover:bg-gradient-to-r from-[#1E2125] to-[#141416] hover:-translate-y-3  hover:shadow-xl duration-300">
                    <figure className="px-10 pt-10">
                        <img src={projects3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Food-Cart</h2>
                        <p>Food-Cart refers to an online platform dedicated to showcasing and possibly selling food items that are prepared and served from a restuarent.</p>
                        <div className="card-actions space-x-2">
                            <button className="btn-prime px-6 py-3 rounded-md"><a href="https://github.com/habibur-01/bistro_boss_client">Details</a></button>
                            <button className="btn-prime px-6 py-3 rounded-md"><a href="https://bistro-boss-b68c7.web.app/">Live</a></button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;