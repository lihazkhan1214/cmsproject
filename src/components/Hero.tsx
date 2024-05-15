
function Hero() {
  return (
    <div className="flex flex-col  md:h-[550px]  w-full padding-x py-10 justify-center items-center gap-8">

        <h1 className="hero__title md:w-[800px] text-[#000000]">Your startup's
design department</h1>

<p className="hero__para">Subscription to a guild of world-class designers, ready
to embed on your team 
today
.</p>
<button className='bg-[#000000] transform hover:-translate-y-1 transition duration-400 text-[14px] flex justify-center hover:text-[#000000] hover:bg-[#FB651E] hover:border-[#FB651E] items-center font-semibold border-[1px] border-[#000000] rounded-[50px] w-[168px] text-[#FFF] h-[50px]'>
          Hire Designer
        </button>

        <button className='bg-[#FFF] text-[14px] transform hover:-translate-y-1 transition duration-400 flex justify-center gap-2 items-center font-semibold border-[1px] border-[#FB651E] rounded-[8px] w-[150px] text-[#000000] h-[50px]'>
            <span className="bg-[#FB651E] p-1 rounded-sm">Y</span>
         Y Combinator
        </button>





      
    </div>
  )
}

export default Hero
