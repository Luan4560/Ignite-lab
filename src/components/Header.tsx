import classNames from "classnames"
import { X } from "phosphor-react"
import { useState } from "react"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { Logo } from "./Logo"

export const Header = ({setShowSidebar}: any) => {
  const {width} = useWindowDimensions()
  console.log(setShowSidebar)
  return (
    <header className="w-full md:py-5 px-[25px] py-4 flex items-center md:justify-center justify-between bg-gray-700 border-b border-gray-600">
      <Logo />
      
      {width < 768  ? (
        <div className="flex items-center">
          <p className="text-sm text-gray-200 mr-1">Aulas</p>
          <X color="#81D8F7" size={18}
            onClick={setShowSidebar}
          />
        </div>
      ) : ''}
    </header>
  )
}