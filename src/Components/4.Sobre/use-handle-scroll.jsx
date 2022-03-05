import React from "react"

export const useHandleScroll = (setIsScrolled) => {
  const handleScroll = () => {
    const section = document
      .getElementById("extrator")
      .getBoundingClientRect().y
    setIsScrolled(section < 400)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}
