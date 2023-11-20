import React from 'react'
import hero from "../assets/hero-bg.png";

const sponsors = () => {
  return (
    <>
      <section className="bg-dark">
        <h1 className="text-4xl font-bold text-center text-gold pt-32 pb-4">
          Sponsors
        </h1>
      </section>  

      <div className="flex flex-col bg-gold ">
        

        {/* Current Sponsors */}
        <div className="flex justify-start m-4">
          <div className="h-full p-8 rounded shadow-md w-full bg-dark ">
            <h1 className="text-2xl font-semibold text-gold mb-4">2023-2024 Sponsors</h1>
              <ul className="col-span-3 grid grid-cols-3 gap-x-8 gap-y-8">

                  <li>
                      <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                          <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                              <img src={hero} alt="" className="absolute inset-0 border border-solid border-gold h-full w-full"/>
                          </div>
                          <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                              <a href="/sponsors">
                                  <span className="absolute -inset-2.5 z-10"></span>
                                  <span className="relative">Sponsor #1</span>
                              </a>
                          </h4>
                          <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">TBD</p>
                      </div>
                  </li>  

                  <li>
                      <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                          <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                              <img src={hero} alt="" className="absolute inset-0 border border-solid border-gold h-full w-full"/>
                          </div>
                          <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                              <a href="/sponsors">
                                  <span className="absolute -inset-2.5 z-10"></span>
                                  <span className="relative">Sponsor #2</span>
                              </a>
                          </h4>
                          <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">TBD</p>
                      </div>
                  </li>  

                  <li>
                      <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                          <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                              <img src={hero} alt="" className="absolute inset-0 border border-solid border-gold h-full w-full"/>
                          </div>
                          <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                              <a href="/sponsors">
                                  <span className="absolute -inset-2.5 z-10"></span>
                                  <span className="relative">Sponsor #3</span>
                              </a>
                          </h4>
                          <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">TBD</p>
                      </div>
                  </li>  

              </ul>
          </div>
        </div>

        {/* Sponsor Us */}
        <div className="flex justify-start m-4">
            <div className="h-full p-8 rounded shadow-md w-full bg-dark">
              <h1 className="text-2xl font-semibold text-gold mb-4">Interested in Sponsoring Us?</h1>
              
              <p className="text-gold">
                Email us at&nbsp;
                <a href="mailto:dragonboat@uwaterloo.ca" class="hover:text-blue-500 underline">
                  dragonboat@uwaterloo.ca
                </a>
                &nbsp; to learn more about being a sponsor

              </p>

            </div>
        </div>

        {/* Test */}
        
        
      </div>

    </>
  )
}

export default sponsors;

