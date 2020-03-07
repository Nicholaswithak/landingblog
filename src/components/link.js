gatsby new gatsby-starter-profile-site https://github.com/Mr404Found/gatsby-starter-profile-siteimport React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <Link
    cover bg="#FF8A00"
      className="nav-link"
      to={to}
      activeStyle={{
        color: "white",
      }}
      style={{
        color: "grey",
      }}
    >
      {children}
    </Link>
  )
}
