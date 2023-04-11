import { HiBeaker } from "react-icons/hi2";
import { Link } from "react-router-dom";

const AuthLayout = ({ title = "", children }) => {
    const style = {
        // backgroundImage : "linear-gradient(rgb(255, 255, 255  ,.1), rgb(215, 215, 215,.4)) ,url('/images/img_login_register_page.jpg')",
        backgroundImage : "url('/images/img_login_register_page.jpg')",
        boxShadow: 'inset 0px -200px 200px 0px #000000cc',
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative"
    }
    return (
        <div  className="flex text-gray-800 p-4 md:py-8 md:px-6 lg:p-0 ">
            <div className="flex flex-col-reverse lg:flex-row w-screen lg:min-h-screen border shadow-sm rounded-lg overflow-hidden lg:border-none lg:shadow-none lg:rounded-none lg:overflow-auto">
                <div style={ style }  className="flex flex-col justify-between text-white lg:min-h-screen w-full lg:w-7/12 xl:w-3/5 bg-[#111827]">
                    <img className="w-8/12 h-auto"  src="" alt="" />

                   <div> <div className="space-y-8 p-5 font-Julee_cursive ">
                        <Link to="/" style={{ width: "fit-content" }} className="flex items-center space-x-3">
                            {/* <HiBeaker className="w-9 h-9 md:w-12 md:h-12 text-indigo-600" /> */}
                            <img src="/images/logo.png" alt=""  className="w-9 h-9 md:w-12 md:h-12 text-indigo-600" />
                            <div>
                                <p className="inline text-xl md:text-2xl uppercase font-bold leading-[0.5rem]">
                                GigSource<span className="font-[300] text-indigo-600"> | MAR</span>
                                </p>
                                <div className="flex items-center space-x-0.5 leading-[0.5rem]">
                                    <span className="text-[0.62rem] font-bold text-indigo-600 uppercase leading-[0.5rem]">
                                    Free work
                                    </span>
                                    <hr className="w-5 border-sky-600" />
                                </div>
                            </div>
                        </Link>

                        <div className="space-y-4 text-1xl font-Julee_cursive">
                            <h1 className="text-2xl lg:text-4xl">{title}</h1>

                            <p className="font-medium text-2xs">
                                The platform that connects businesses with talented freelancers
                                within the kingdom. Our user-friendly and secure platform offers a range of freelance services 
                                to help businesses find the right professionals for their projects. Join GigSource today 
                                and benefit from the services of talented freelancers in Morocco!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center -space-x-3">
                                {[1, 2, 3, 4].map(item => (
                                    <img
                                        key={item}
                                        className="h-7 w-8 md:h-10 md:w-10 bg-gray-800 border border-white rounded-full object-cover object-center"
                                        src={`/images/auth-${item}.jpeg`}
                                        alt=""
                                    />
                                ))}
                            </div>

                            <p className="font-Satisfy text-md">
                                More than 2k people joined us, it's your turn
                            </p>
                        </div>
                    </div></div>
                </div>
                {/* style={{ backgroundColor : "#e6e6fd" }} */}
                <div  className="flex flex-col justify-center lg:min-h-screen p-6 md:p-10 lg:p-8 xl:p-10 w-full lg:w-5/12 xl:w-2/5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
