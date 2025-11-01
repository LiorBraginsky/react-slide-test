import { Button } from '@/shared/components/button'
import { Sidebar } from '@/shared/components/sidebar'
import { useSidebar } from '@/shared/components/sidebar/model/useSidebar'
import { ChangeBackground } from '@/features/change-background'

export function Home() {
  const { isOpen, open, close } = useSidebar()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-italian-plate font-black text-6xl mb-4">
          React Slide
        </h1>
        <p className="font-italian-plate font-light text-xl text-muted-foreground mb-8">
          Welcome!
        </p>

        <Button onClick={open} title={'123'}>
          <span className={'font-italian-plate'}>Open Sidebar</span>
        </Button>
      </div>

      <Sidebar isOpen={isOpen} onClose={close} title="Change background">
        <ChangeBackground />
      </Sidebar>
    </div>
  )
}
