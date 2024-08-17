import Image from 'next/image'
import React from 'react'

export default function OurProducts({ ourProducts }) {
    return (
        <div className="max-w-screen-xl w-full m-auto mb-28">
            <div className="w-full flex justify-center py-16">
                <h2>{ourProducts.title}</h2>
            </div>
            <div className="flex gap-4  flex-wrap justify-between   px-4">
                {Array.from({ length: 6 }).map((product, id) => <div key={id} className='hover:scale-105 duration-300'>
                    <h4 className='py-4 font-extralight'>Product {id + 1}</h4>

                    <Image
                        src={`/images/im${id + 1}.webp`}
                        alt="product image"

                        // className="rounded-xl grow w-1/2 h-80  xl:max-w-[400px]"
                        width={400}
                        height={406}
                    />
                </div>
                    // {/* <p className="pt-2">{product.designation}</p> */ }
                    // {/* <div className="flex items-end gap-3"> */ }
                    // {/* <h3>{product.name},</h3> */ }
                    // {/* <span>{product.location}</span> */ }
                    // {/* </div> */ }
                    // {/* </div>)} */ }
                    // {/* {JSON.stringify(ourProducts)} */ }
                    // {/* </div> */ }
                    // // </div>

                )
                }
            </div>
        </div>
    )
}