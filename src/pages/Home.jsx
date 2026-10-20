import React from 'react'

const Home = () => {
  return (
    <div>
     <section className="w-[90%] lg:w-380 m-auto lg:my-0 my-10 flex items-start justify-between relative">
        <img className="absolute left-0 top-0 " src="../../public/bg.png" alt="" />
        <img className="absolute lg:right-20 lg:top-0 bottom-0 right-5 lg:w-[50%]" src="../../public/s2.png" alt="" />
        <div className="lg:max-w-330 w-[90%] m-auto lg:py-10  flex lg:flex-row flex-col items-center lg:text-start text-center justify-between relative">
            <div className="flex items-center lg:items-start flex-col lg:gap-15 gap-10 text-white ">
                <h1 className="lg:text-7xl text-2xl font-bold ">Transforming Data <br /> <br /> into  <t className="bg-[#0A84FF] p-1 rounded-md"> Decisions</t></h1>
                <p className="lg:text-2xl">Leverage the power of machine learning and AI to unlock <br /> insights and drive business growth</p>
                <div className="flex items-center gap-3">
                    <img src="../../public/s1.png" alt="" />
                    <p>Over <b>100+</b> clients have worked with us</p>
                </div>
            </div>
           <div className="lg:w-[45%] ">
             <img className=" w-full" src="../../public/robot.png" alt="" />
           </div>
        </div>
    </section>
    <section className="lg:max-w-330 w-[90%] m-auto">
        <img className="w-full" src="../../public/Companies.png" alt="" />
    </section>
 <section className="w-full lg:w-380 m-auto relative">
        <img className="absolute top-0 left-0" src="../../public/s6.png" alt="" />
          <img className="absolute bottom-0 right-0" src="../../public/s6.png" alt="" />
       <div className="lg:max-w-330 w-[90%] m-auto flex flex-col lg:mt-60 my-10 pb-20 items-center text-center lg:gap-15 gap-10 text-white relative ">
       <h1 className="lg:text-4xl ">Our Ultimate Set of Services for Your <br /> Ideas Implementation</h1>
       <div className="w-full flex lg:flex-row flex-col gap-y-10 items-start justify-between">
        <div className="lg:w-[32%] h-[75vh] w-full flex items-center flex-col text-center gap-15 lg:p-10 p-5 bg-[#141414] rounded-[10%]">
            <img src="../../public/s3.png" alt="" />
            <h1 className="text-2xl"><b>Predictive Analytics</b></h1>
            <p>Forecast trends and make data-driven <br />
                 decisions with our advanced ML <br />
                  models.</p>
        </div>
          <div className="lg:w-[32%] h-[75vh] w-full flex items-center flex-col text-center gap-15 lg:p-10 p-5 bg-[#141414] rounded-[10%]">
            <img src="../../public/s4.png" alt="" />
            <h1 className="text-2xl"><b>AI Consulting</b></h1>
            <p>Expert guidance on implementing AI <br />
                 solutions for your business needs. 
                  models.</p>
        </div>
          <div className="lg:w-[32%] h-[75vh] w-full flex items-center flex-col text-center gap-15 lg:p-10 p-5 bg-[#141414] rounded-[10%]">
            <img src="../../public/s5.png" alt="" />
            <h1 className="text-2xl"><b>Data Engineering</b></h1>
            <p>Forecast trends and make data-driven <br />
                 decisions with our advanced ML <br />
                  models.</p>
        </div>
       </div>
    </div>
 </section>
 <section className="lg:max-w-280 w-[90%] m-auto lg:my-20 my-10 flex flex-col items-center gap-15 text-white " >
    <h1 className="text-2xl ">Frequently Asked Questions</h1>
    <div className="w-full flex flex-col gap-7">
        <div className="w-full p-10 flex items-start lg:flex-row flex-col gap-10 bg-[#1E1E1E] rounded-2xl">
            <div className="p-5 rounded-md border-b-0 text-[#0A84FF] text-2xl bg-linear-to-b from-[#242424] to-[#1F1F1F] border border-[darkgrey]"><h1>01</h1></div>
            <div className="flex w-[90%] flex-col items-start gap-6 text-3xl">
                <div className="w-full flex items-center justify-between text-[#0A84FF]">
                     <h1 className="lg:text-[28px] text-[15px]">What services does Catalyst Analytics provide?</h1>
                     <i className="fa-solid fa-x"></i>
                </div>
                <h1 className="lg:text-[28px] text-[10px] text-[#E6E6E6]">Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</h1>
            </div>
        </div>
        <div className="w-full lg:p-10 p-5 flex lg:flex-row flex-col justify-between items-center gap-10 bg-[#141414] rounded-2xl">
  <div className="flex items-center gap-10">
             <div className="p-5 rounded-md border-b-0  text-2xl bg-linear-to-b from-[#242424] to-[#1F1F1F] border border-[darkgrey]"><h1>02</h1></div>
         <h1 className="lg:text-2xl text-[12px]">Lorem Ipsum is simply dummy text of the printing </h1>
  </div>
         <i className="fa-solid fa-plus text-2xl lg:flex! hidden!"></i>
        </div>
            <div className="w-full lg:p-10 p-5 flex lg:flex-row flex-col justify-between items-center gap-10 bg-[#141414] rounded-2xl">
  <div className="flex items-center gap-10">
             <div className="p-5 rounded-md border-b-0  text-2xl bg-linear-to-b from-[#242424] to-[#1F1F1F] border border-[darkgrey]"><h1>03</h1></div>
         <h1 className="lg:text-2xl text-[12px]">Lorem Ipsum is simply dummy text of the printing </h1>
  </div>
         <i className="fa-solid fa-plus text-2xl lg:flex! hidden!"></i>
        </div>
            <div className="w-full lg:p-10 p-5 flex lg:flex-row flex-col justify-between items-center gap-10 bg-[#141414] rounded-2xl">
  <div className="flex items-center gap-10">
             <div className="p-5 rounded-md border-b-0  text-2xl bg-linear-to-b from-[#242424] to-[#1F1F1F] border border-[darkgrey]"><h1>04</h1></div>
         <h1 className="lg:text-2xl text-[12px]">Lorem Ipsum is simply dummy text of the printing </h1>
  </div>
         <i className="fa-solid fa-plus text-2xl lg:flex! hidden!"></i>
        </div>
            <div className="w-full lg:p-10 p-5 flex lg:flex-row flex-col justify-between items-center gap-10 bg-[#141414] rounded-2xl">
  <div className="flex items-center gap-10">
             <div className="p-5 rounded-md border-b-0  text-2xl bg-linear-to-b from-[#242424] to-[#1F1F1F] border border-[darkgrey]"><h1>05</h1></div>
         <h1 className="lg:text-2xl text-[12px]">Lorem Ipsum is simply dummy text of the printing </h1>
  </div>
         <i className="fa-solid fa-plus text-2xl lg:flex! hidden!"></i>
        </div>
    </div>
 </section>
 <footer className="w-full lg:w-380 m-auto border-t-2 border-white lg:mt-30 mt-10">
  <div className="lg:max-w-330 w-[90%] m-auto lg:py-20 py-10 flex flex-col items-center gap-15">
    <div className="w-full flex items-center lg:flex-row flex-col justify-between gap-y-5">
        <img src="../../public/Logo.png" alt="" />
        <nav className="flex items-center gap-7 text-white flex-wrap justify-start ">
            <p> Home</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>About Us</p>
            <p>Careers</p>
        </nav>
        <div className="flex items-center gap-4 border p-5 border-b-0 rounded-2xl border-[darkgrey]">
            <div className="border border-[darkgrey] border-b-0 p-5 rounded-2xl text-3xl bg-linear-to-b from-[#1F1F1F] to-black text-[#0A84FF]"><i className="fa-brands fa-facebook"></i> </div>
                        <div className="border border-[darkgrey] border-b-0 p-5 rounded-2xl text-3xl bg-linear-to-b from-[#1F1F1F] to-black text-[#0A84FF]"><i className="fa-brands fa-twitter"></i> </div>
            <div className="border border-[darkgrey] border-b-0 p-5 rounded-2xl text-3xl bg-linear-to-b from-[#1F1F1F] to-black text-[#0A84FF]"><i className="fa-brands fa-linkedin"></i> </div>
        </div>
    </div>
    <div className="w-full flex items-center justify-between lg:flex-row flex-col gap-y-5 text-white">
        <div className="flex items-start gap-y-3 lg:items-center gap-5 lg:flex-row flex-col">
            <h1><i className="fa-regular fa-envelope text-2xl text-[#0A84FF]"></i> contact@catalystanalytics.io</h1>
            <h1><i className="fa-solid fa-phone text-2xl text-[#0A84FF]"></i> +1 (469) 712-4672</h1>
            <h1 className="flex"><i className="fa-solid fa-location-dot text-2xl text-[#0A84FF]"></i> 5511 Parkcrest Dr, Suite 103, Austin, TX <t className="lg:flex hidden">78731</t></h1>
        </div>
        <div className="flex items-center gap-4">
            <h1>Privacy Policy</h1>
            <h1>Terms of Service</h1>
        </div>
    </div>
    <h1 className="text-[darkgrey]">© 2025 Catalyst Analytics. All rights reserved.</h1>
  </div>
 </footer>
    </div>
  )
}

export default Home
