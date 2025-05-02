import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

export const SearchBar = () => {
  const [text, setText] = useState('')
  const fullText = 'cheap cleanser for acne prone skin.'
  const typingSpeed = 100 // milliseconds per character
  const pauseBeforeErasing = 800 // pause when text is complete
  const pauseBeforeRetyping = 800 // pause when text is erased

  useEffect(() => {
    let timeout
    let currentIndex = 0
    let isErasing = false

    const animateText = () => {
      if (!isErasing) {
        // Typing phase
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex))
          currentIndex++
          timeout = setTimeout(animateText, typingSpeed)
        } else {
          // Pause before erasing
          isErasing = true
          timeout = setTimeout(animateText, pauseBeforeErasing)
        }
      } else {
        // Erasing phase
        if (currentIndex > 0) {
          currentIndex--
          setText(fullText.slice(0, currentIndex))
          timeout = setTimeout(animateText, typingSpeed / 3) // Erase faster than typing
        } else {
          // Pause before retyping
          isErasing = false
          timeout = setTimeout(animateText, pauseBeforeRetyping)
        }
      }
    }

    timeout = setTimeout(animateText, pauseBeforeRetyping)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-4 text-[#706E67]">
          {React.createElement(Search, { size: 20 })}
        </div>
        <input
          type="text"
          value={text}
          readOnly
          className="w-full py-3 pl-12 pr-4 text-[#706E67] bg-[#F9F8F4] border border-[#706E67] rounded-full focus:outline-none focus:border-blue-500 shadow-sm"
          placeholder="Search..."
        />
      </div>
    </div>
  )
}

export default SearchBar
