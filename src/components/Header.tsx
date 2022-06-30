import useWindowDimensions from "../hooks/useWindowDimensions"

import { X as CloseIcon, List as IconList } from "phosphor-react"
import { Logo } from "./Logo"

interface HeaderProps {
  handleClick: () => void;
  showSideBar: boolean;
}

export const Header = ({ handleClick, showSideBar }: HeaderProps) => {
  const { width } = useWindowDimensions()

  return (
    <header className="w-full md:py-5 px-[25px] py-4 flex items-center md:justify-center justify-between bg-gray-700 border-b border-gray-600">
      <Logo />
      
      {width < 768  ? (
        <div className="flex items-center">
          <p className="text-sm text-gray-200 mr-1">Aulas</p>

          {showSideBar ? (
            <CloseIcon 
              color="#81D8F7" 
              size={18}
              onClick={handleClick}
              className="hover: cursor-pointer"
            />
          ) : (
            <IconList 
              color="#81D8F7" 
              size={18}
              onClick={handleClick}
              className="hover: cursor-pointer "
            />
          )}
        </div>
      ) : ''}
    </header>
  )
}