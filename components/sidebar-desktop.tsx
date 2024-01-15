import { Sidebar } from '@/components/sidebar'

import { ChatHistory } from '@/components/chat-history'

export async function SidebarDesktop() {

  // TO-DO: Get user ID from Stytch here
  // if (!session?.user?.id) {
  //   return null
  // }

  const session = {
    user: {
      id: '1'
    }
  };

  return (
    <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      {/* @ts-ignore */}
      <ChatHistory userId={session.user.id} />
    </Sidebar>
  )
}
