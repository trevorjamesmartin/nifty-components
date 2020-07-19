import React, { useEffect, useState, useRef } from 'react'
/**
 * render image or spinner
 *
 * *optionally include a "customspinner" in props.
 *
 *
 * @param {Object} props component props
 * @renders {*} Image or Spinner
 * @example <ImageSpinner src="/image.png" alt="desription" customspinner={<CustomSpinner />} />
 */
function ImageSpinner(props) {
  const imageRef = useRef()
  const { customspinner, ...rest } = props
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (loaded) {
      Object.keys(rest).forEach((key) => {
        // load img props (className, styles, etc...)
        imageRef.current[key] = rest[key]
      })
      return // image already loaded.
    }
    // eslint-disable-next-line no-undef
    const newImage = new Image() // create a new <img />
    newImage.onload = () => {
      if (newImage.complete && newImage.naturalWidth > 0) {
        // loading complete, image contains at least 1 pixel.
        imageRef.current = newImage // point reference to loaded image
        setLoaded(true) // toggle state
      }
    }
    newImage.alt = 'preview image' // accessibility
    Object.keys(rest).forEach((key) => {
      newImage[key] = rest[key]
    })
  }, [loaded, rest])
  return !loaded ? (
    customspinner || <h2>Loading...</h2>
  ) : (
    <img {...rest} ref={imageRef.current} />
  )
}
export default ImageSpinner
