import TitleCaption from "../../../Hooks/TitleCaption";
import projects1 from "../../../assets/img/projects/12.jpg"
import projects2 from "../../../assets/img/projects/14.jpg"
import projects3 from "../../../assets/img/projects/15.jpg"


const Projects = () => {
    const btnPrime ={
        backgroundColor: "#212428", // Fix the property name and add a semicolon
        border: "none",
        boxShadow: "4px 0px 10px rgba(240, 239, 239, 0.1)",
        color: "#F9004D",
    }

    return (
        <div id="projects" className='border-b-2 border-[#191c20]'>
      
            <TitleCaption subTitle={'Projects'} mainTitle={'My Projects'}></TitleCaption>
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                <div className="card w-96 bg-[#1E2125] text-[#f1f0f0] shadow-xl hover:bg-gradient-to-r from-[#1E2125] to-[#141416] hover:-translate-y-3  hover:shadow-xl duration-300">
                    <figure className="px-10 pt-10">
                        <img src={projects1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Hotel Management System</h2>
                        <p>You can easily find your desire room & can booking. </p>
                        <div className="card-actions">
                            <button className="btn-prime px-6 py-3 rounded-md"><a href="https://github.com/habibur-01/Assignment-11">Details</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#1E2125] text-[#f1f0f0] shadow-xl hover:bg-gradient-to-r from-[#1E2125] to-[#141416] hover:-translate-y-3  hover:shadow-xl duration-300">
                    <figure className="px-10 pt-10">
                        <img src={projects2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Brand Shop </h2>
                        <p>You can find world famous brands clothes all in one.</p>
                        <div className="card-actions">
                            <button className="btn-prime px-6 py-3 rounded-md"><a href="https://github.com/habibur-01/Brand-Shop">Details</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#1E2125] text-[#f1f0f0] shadow-xl hover:bg-gradient-to-r from-[#1E2125] to-[#141416] hover:-translate-y-3  hover:shadow-xl duration-300">
                    <figure className="px-10 pt-10">
                        <img src={projects3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Employee Management System</h2>
                        <p>You can easily manage your manpower over your company.</p>
                        <div className="card-actions">
                            <button className="btn-prime px-6 py-3 rounded-md"><a href="https://github.com/habibur-01/Employee_mangament">Details</a></button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Projects;