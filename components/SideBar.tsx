import { useSession } from 'next-auth/react'
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from '@heroicons/react/outline'
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import SideBarRow from './SideBarRow'

const SideBar = () => {
  const { data: session } = useSession()

  return (
    <div className='p-2 m5-5 max-w-[600px] xl:min-w-[300px]'>
      <SideBarRow src={session?.user?.image || "/default_avatar.png"} title={session?.user?.name || "未知用户"}/>
      <SideBarRow Icon={UsersIcon} title="Friends"/>
      <SideBarRow Icon={UserGroupIcon} title="Groups"/>
      <SideBarRow Icon={ShoppingBagIcon} title="Marketplace"/>
      <SideBarRow Icon={DesktopComputerIcon} title="Watch"/>
      <SideBarRow Icon={CalendarIcon} title="Events"/>
      <SideBarRow Icon={ClockIcon} title="Memories"/>
      <SideBarRow Icon={ChevronDownIcon} title="See More"/>
    </div>
  )
}

export default SideBar