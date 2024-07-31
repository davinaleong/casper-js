"use client"

import images from "@/images"
import { getRandomElement } from "@/lib/helpers"

const image: any = getRandomElement(images)

export default function Home() {
  return (
    <main className="flow">
      {image}

      <p className="text-center text-lg">
        Refresh the page to get a new dog photo.
      </p>
    </main>
  )
}
