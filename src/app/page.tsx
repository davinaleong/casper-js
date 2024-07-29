"use client"

import { CldImage } from "next-cloudinary"

export default function Home() {
  return (
    <main className="flow">
      <CldImage
        className="block mx-auto rounded-sm shadow-lg"
        src="0086_r9pfpq" // Use this sample image or upload your own via the Media Explorer
        width="501" // Transform the image: auto-crop to square aspect_ratio
        height="668"
        alt="Photo of Casper"
        crop={{
          type: "auto",
          source: true,
        }}
      />

      <div className="text-center mt-4">
        <button type="button" className="btn">
          Get a new Dog Picture
        </button>
      </div>
    </main>
  )
}
