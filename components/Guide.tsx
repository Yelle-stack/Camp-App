import Image from 'next/image'

const Guide = () => {
  return (
    <section id='guide' className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <Image src="/camp.svg" alt='' width={50} height={50} />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          We are here for you
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide You to Easy Path</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            With the Hilink app, you’ll never get lost again — even without an internet connection. Our offline maps let you explore freely, whether you’re hiking through valleys or reaching the top of a mountain. Invite your friends and family, and enjoy every adventure in the great outdoors
          </p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image
          src="/boat.png"
          alt='boat'
          width={1440}
          height={580}
          className='h-[380px] w-full object-cover object-center md:h-auto 2xl:rounded-5xl'
        />

        <div className='absolute left-4 top-4 flex gap-3 rounded-3xl border bg-white py-8 pl-5 pr-7 shadow-md md:left-[5%] md:top-8 lg:top-20'>
          <Image
            src="/meter.svg"
            alt=''
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>48 min</p>
              </div>
              <p className='bold-20 mt-2'>Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20'>Start track</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
