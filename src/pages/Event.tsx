import { useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"


export const Event = ({showSideBar}: any) => {
  const { slug } = useParams<{slug: string}>()
  console.log(showSideBar)
  return (
    <div className="flex flex-col min-h-screen">
      <Header  setShowSidebar={showSideBar}/>
      <main className="flex flex-1">
        {/* Criar um componente de backup caso não exista a aula */}
        { slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1"/>
        }
        <Sidebar />
      </main>
    </div>
  )
}