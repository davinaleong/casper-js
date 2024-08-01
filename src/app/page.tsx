"use client"
import { useState } from "react"
import images from "@/images"
import { getRandomElement } from "@/lib/helpers"

const thisImage: any = getRandomElement(images)

export default function Home() {
  const [image, setImage] = useState(thisImage)

  const buttonClickHandler = () => {
    const thisImage: any = getRandomElement(images)
    setImage(thisImage)
  }

  return (
    <main className="flow">
      {image}

      <div className="text-center">
        <button
          className="btn font-heading"
          type="button"
          onClick={buttonClickHandler}
        >
          Get another Dog photo
        </button>
      </div>

      <p className="text-center text-lg">
        Refresh the page to get a new dog photo.
      </p>
    </main>
  )
}
