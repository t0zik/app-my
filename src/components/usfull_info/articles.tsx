'use client'
import { Disclosure } from "@headlessui/react";

export default function Articles() {
    const videos = [
        {title:'Apartment renovation in Batumi',text:'Construction stores, furniture and home accessories stores, prices, assortment, advice from the developer.',url:'https://www.youtube.com/watch?v=CQuioblJkVA'},
        {title:'The best beaches of Batumi',text:'Overview of beaches in Batumi and beyond, infrastructure, our advice.',url:'https://www.youtube.com/watch?v=A5D8NuKEPJc'},
        {title:'To Batumi by car',text:'Insurance for foreign numbers, how to rearrange numbers, fines, parking.',url:'https://www.youtube.com/watch?v=Qr7jfxsPj64'},
        {title:'Real estate in Batumi outside the city',text:'Profitability of suburban real estate, why they buy an apartment or a house outside the city, advantages.',url:'https://www.youtube.com/watch?v=lRdcHAz644Q'},
    ]

  return (
    <div className="w-[80%] mx-auto">
        <h2 className="text-[22px] mb-2">What's new?</h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 w-[90%] mx-auto ">                  
            <li className="mb-5 ms-4">
                <div className="absolute w-3 h-3  bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">24.04.2023</time>
                <h3 className="text-lg font-semibold">10 reasons to invest in Georgia: in real estate</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Foreign investments in Georgia in 2022 increased by almost 80%. Investors from Europe, USA, Turkey, Great Britain, and China are investing in the energy, financial, transport, and of course, real estate in Georgia. </p>
                
                <Disclosure>
                    <Disclosure.Button className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more</Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 flex flex-col gap-[25px]">
                        <p>What are the advantages of those who decided to buy an apartment in Georgia? And what is buying housing in Georgia profitable? Let's name 10 reasons.</p>
                        <ol className="flex flex-col gap-2">
                            <li>1.Obtaining a residence permit when purchasing real estate from $100,000</li>
                            <li>2.Visa-free regime with Georgia
for citizens of more than 100 countries: including Russia, Kazakhstan, Armenia, Israel, Belarus, Ukraine, Turkey.</li>
                            <li>3.No real estate tax in Georgia.</li>
                            <li>4.Year-round tourism.</li>
                            <li>5.Quick payback of the investment
compared to other European countries due to the ratio of the cost of rent (high) to the cost of apartments (relatively low).</li>
                            <li>6.Comfortable climate.</li>
                            <li>7.The country's security: Georgia ranks third in the world according to Numbeo research.</li>
                            <li>8.Absence of corruption.</li>
                            <li>9.The Georgian real estate market is still the most dynamically developing in the post-Soviet market space And the factors we mentioned attract more and more every year investors who want to invest profitably in Georgia.</li>
                            <li>10.Why you should choose housing in Batumi and why we are confident in the profitability of our projects.</li>
                        </ol>
                    </Disclosure.Panel>
                </Disclosure>
            </li>
            <li className="mb-5 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">20.05.2022</time>
                <h3 className="text-lg font-semibold">Income from real estate Batumi Investment</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">When choosing profitable real estate in Batumi, it is necessary to evaluate its investment attractiveness. How quickly will you pay back your investment in an apartment or townhouse in Batumi? What will be the income? We are confident in the profitability of our facilities and that's why.</p>
                <Disclosure>
                    <Disclosure.Button className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more</Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 flex flex-col gap-[25px]">
                        <h3 className="first-letter:bg-[#f2c231]">Price-quality ratio</h3>
                        <p>The earlier you buy Batumi Investment profitable real estate, the greater the benefit for you, since the price per square meter is the lowest in the early stages of construction. In addition, we offer buyers an internal installment plan and a down payment of only 30%.</p>
                        <p>There are no risks, because there are no long-term construction projects behind the company, we adhere to the European quality of construction, and also select materials based on the climatic features of Batumi, which is not done by every developer in Georgia. Moisture-resistant materials for the facade, ventilated foundation, German windows - your profitable property will be profitable for many years.</p>
                        <h3 className="first-letter:bg-[#f2c231]">Location and infrastructure</h3>
                        <p>One of the important factors in the profitability of real estate in Batumi is location. Batumi Investment selects locations for objects so that rest or permanent residence in them is as comfortable as possible for both families with children and young people.</p>
                        <p>Lemon Garden Apartments are located in an ecologically clean area of Batumi, a quiet but rapidly developing part of the city. Very soon the price of apartments in this part of Batumi will be many times higher.</p>
                        <p>Townhouses are located next to the cleanest beaches of Batumi, surrounded by greenery. This is an ideal place for those who appreciate nature, but do not want to be cut off from the vibrant life of Batumi.</p>
                        <p>All our facilities are within walking distance from the sea. We think through the infrastructure inside the objects: spas, restaurants, gyms, barbecue areas, a swimming pool and a sauna attract future tenants, providing you with a stable income from real estate in Batumi.</p>
                        <h3 className="first-letter:bg-[#f2c231]">Service</h3>
                        <p>Our clients can manage their income-generating properties remotely using a mobile application with a user-friendly interface. Renting out your apartment will be easy and fun. You will be able to track income and contact the management company for help if necessary.</p>
                    </Disclosure.Panel>
                </Disclosure>
            </li>
        </ol>
        <h2 className="text-[22px] mb-2">What see?</h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 w-[90%] mx-auto mb-10">
            {videos.map((video) =>(
            <li key={1} className="mb-10 ms-4">
            <div className="absolute w-3 h-3  bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{video.text} </p>
            <button  className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">See more</button>
        </li>
            ))}                 

        </ol>

    </div>
  )
}
