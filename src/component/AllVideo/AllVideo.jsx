import React from 'react'
import { PropertGalleryData } from '../../data/Data'
import GalleryCard from '../../helper/GalleryCard/GalleryCard'

import './AllVideo.css'


const AllVideo = () => {
  return (
    <section>
        <div className="container allVideo__container">
            {
                PropertGalleryData && PropertGalleryData?.map((curElem) =>{
                    const {id, type} = curElem;
                    if(type === "video"){
                        return(
                            <GalleryCard key={id} {...curElem} />
                        )
                    }
                })
            }
        </div>
    </section>
  )
}

export default AllVideo