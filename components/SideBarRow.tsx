import Image from 'next/image'

interface Props {
  src?: string
  Icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
  title: string
}

const SideBarRow = ({ src, Icon, title }: Props) => {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
      {src && <Image className="rouned-full" src={src} width={30} height={30} layout="fixed" />}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  )
}

export default SideBarRow
