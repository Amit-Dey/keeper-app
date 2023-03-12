import React from "react"

export default function Footer() {
    var currentDate = new Date()
    var year = currentDate.getFullYear()
    return <footer>
        <p>Copyright ©️ {year}</p>
    </footer>
}