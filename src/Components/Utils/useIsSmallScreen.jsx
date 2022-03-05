import React from "react"

const checkIsSmallScreen = () =>
  (window?.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth) < 739

export const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(checkIsSmallScreen())

  React.useEffect(() => {
    const handleResize = () => setIsSmallScreen(checkIsSmallScreen())
    window?.addEventListener("resize", handleResize)
    return () => window?.removeEventListener("resize", handleResize)
  }, [])

  return { isSmallScreen: isSmallScreen ?? true }
}
