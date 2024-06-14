import React from 'react'
import Image from 'next/image'

export default function Img(props) {
  return (

        // eslint-disable-next-line @next/next/no-img-element
        <Image src={props.src} alt={props.alt} className={props.className} />
  )
}
