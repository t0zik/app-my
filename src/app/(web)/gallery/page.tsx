import IMAGES from '@/../public/images/index'
import Image from 'next/image'
import Title from '@/components/title'
import Description from '@/components/description'
import Header from '@/components/header'
export default function page()
{
    const title = "Gallery"

    const description = 
    {
        text1:"Forbes magazine named Batumi one of the best cities for investment. However, it is also the most beautiful resort on the Black Sea coast. We have collected photos of Batumi for you: the best beaches, the old city, the sights of Batumi, the sunsets of the Black Sea resort, bird's-eye views.",
        text2:"We love this city and we are ready to make you fall in love with it."
    }


    return (
        <div >
            <Header />
            <Title title={title}/>
            <Description text1={description.text1} text2={description.text2}/>
          <div className="mx-auto max-w-2xl px-4    lg:max-w-7xl  text-center">
            <div className="mt-6 mb-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2">
              {IMAGES.map((image) => (
                <div key={1}  className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:w-96  lg:h-80">
                    <Image
                      src= {image.imgSrc}
                      alt={'gallery img'}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
}