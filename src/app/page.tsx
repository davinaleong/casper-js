"use client"

import images from "@/images"
import { getRandomElement } from "@/lib/helpers"

const image: any = getRandomElement(images)

/**
 * TODO:
 * 1. Use useState to store image
 * 2. On button click, change image
 * 3. Display image
 */

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
