"use client"

import { CldImage } from "next-cloudinary"

export default function Home() {
  return (
    <main className="flow">
      <CldImage
        className="mx-auto rounded-sm shadow-md"
        src="0085_jscw28"
        width="667"
        height="501"
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
