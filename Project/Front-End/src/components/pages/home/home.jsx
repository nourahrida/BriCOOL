
const Home = () => {
    return (
        <>
         <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" ></img>
            <span className="self-center hidden sm:block text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
       
        <div className="flex items-center md:order-2">
        <div>
            <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
      
        </div>
        {/* <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="data:image/png;base64,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" alt="user photo"></img>
        </button> */}
            
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            
          </ul>
        </div>
        </div>
      </nav>

  
<section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>


<div id="gallery" className="relative w-full" data-carousel="slide">
  
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
        </div>
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
        </div>
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
        </div>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

        </>
       
    );
} 

export default Home;