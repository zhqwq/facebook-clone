import Image from "next/image"

interface Props {
  name: string
  src: string
  profile: string
}

const StoryCard = ({name, src, profile}: Props) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer p-3 transition duration-200 transofrm ease-in hover:scale-105">
      <Image 
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
      />
    </div>
  )
}

export default StoryCard