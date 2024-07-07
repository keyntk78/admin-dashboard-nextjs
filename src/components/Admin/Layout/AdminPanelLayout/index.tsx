"use client"

import { cn } from '@/lib/utils'
import { Sidebar } from '../Sidebar'
import { useStore } from '@/hook/useStore'
import { useSidebarToggle } from '@/hook/useSidebarToggleStore'
import { Footer } from '../Footer'

export default function AdminPanelLayout({
  children
}: {
  children: React.ReactNode
}) {
    const sidebar = useStore(useSidebarToggle, (state) => state)

    if (!sidebar) return null

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          'min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300',
          sidebar?.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72'
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          'transition-[margin-left] ease-in-out duration-300',
          sidebar?.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72'
        )}
      >
        <Footer />
      </footer>
    </>
  )
}

