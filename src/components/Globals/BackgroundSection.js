import React from "react"
import BackgroundImage from "gatsby-background-image"

// I changed the classes in BackgroundImage

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      {/* <div className="title-gradient rounded px-4 pt-1 display-4">
        <h1 className="title text-uppercase text-center display-5">{title}</h1>
      </div> */}
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
