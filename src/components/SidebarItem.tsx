'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const SidebarItem = ({ path, name, icon }: SidebarItemI) => {
  const usePath = usePathname()
  return (
    <div>
      <li>
        <Link href={path} className={`
          relative px-4 py-3 flex items-center space-x-4 rounded-xl group
          hover:bg-gradient-to-r hover:from-sky-700 hover:to-cyan-500 hover:text-white
          ${path === usePath && 'text-white bg-gradient-to-r from-sky-700 to-cyan-500'}
        `}>
          {icon}
          <span className="group-hover:text-white-700">{name}</span>
        </Link>
      </li>
    </div>
  )
}

export default SidebarItem