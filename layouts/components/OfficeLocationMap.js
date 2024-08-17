import React from 'react'



const iframeStyle = 'w-full rounded-xl mx-1 pt-2 '
const offices = [
    {
        location: 'Chandigarh, India',
        iframeLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6660.284029132876!2d76.75684965292518!3d30.74566583842885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9411b608c9%3A0xf8224ad823ead936!2sSector%2024%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1723890270302!5m2!1sen!2sin'
    },
    {
        location: 'London, UK',
        iframeLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.7078179221417!2d-0.11804763634369801!3d51.33489377712436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875fd9214b3ca15%3A0xf90e783b90c32b8c!2sPurley%20Rise!5e0!3m2!1sen!2sin!4v1723890351366!5m2!1sen!2sin'
    }
]

export default function OfficeLocationMap() {
    return (<div className='w-full '>
        <div className='w-full justify-center flex py-20'>
            <h2 className='-ml-14'>Our offices</h2>
        </div>
        <div className="w-full flex flex-wrap items-center ">
            {offices.map((office) => <div className='w-full lg:w-1/2  p-2 gap-2 space-y-3 '>
                <h3>{office.location}</h3>
                <iframe src={office.iframeLink} width="300" height="350" className={iframeStyle} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>)}
        </div>
    </div>
    )
}


