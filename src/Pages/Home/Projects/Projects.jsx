import TitleCaption from "../../../Hooks/TitleCaption";
import projects1 from "../../../assets/img/projects/12.jpg"
import projects2 from "../../../assets/img/projects/14.jpg"
import projects3 from "../../../assets/img/projects/15.jpg"


const Projects = () => {
    return (
        <div>
            <TitleCaption subTitle={'Projects'} mainTitle={'My Projects'}></TitleCaption>
            <div className="mt-14 grid lg:grid-cols-3 gap-10">
                <div className="card w-96 bg-[#1E2125] text-[#f1f0f0] shadow-xl hover:bg-gradient-to-r from-[#1E2125] to-[#141416] hover:-translate-y-3  hover:shadow-xl duration-300">
                    <figure className="px-10 pt-10">
                        <img src={projects1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Hotel Management System</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;