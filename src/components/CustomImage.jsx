
import Image from 'next/image';
import React from 'react';

function CustomImage({alt, ...props}) {
    const [src, setSrc] = React.useState(props.src);
    return (
      <Image
        {...props}
        src={src}
        alt={alt}
        onError={() => setSrc('/img/notImg.jpg')}
        placeholder="blur"
        blurDataURL='/img/notImg.jpg'
      />
    );
  }

  export default CustomImage