import Image from "next/image";
import React from "react";
function customImage({ src, altText,  }) {
  const loadImg = (src) => {
    return src;
  };
  return <Image 
   alt={altText}
   blurDataURL=""
   src={hfh} placeholder="blur" loader={loadImg} />;
}

export default customImage;
