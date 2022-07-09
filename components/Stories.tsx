import StoryCard from "./StoryCard"

const stories = [
  {
    name: "Elon Musk",
    src: "/stories/elon_musk.jpg",
    profile: "/stories/elon_musk_profile.jpg"
  },
  {
    name: "Jeff Bezoz",
    src: "/stories/jeff.webp",
    profile: "/stories/jeff_profile.jpg"
  },
  {
    name: "Mark Zuckerberg",
    src: "/stories/mark_zuckerberg.jpg",
    profile: "/stories/mark_zuckerberg_profile.jpg"
  },
  {
    name: "Bill Gates",
    src: "/stories/bill_gates.jpg",
    profile: "/stories/bill_gates_profile.jpg"
  }
]

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <StoryCard key={index} name={story.name} src={story.src} profile={story.profile}/>
      ))}
    </div>
  )
}

export default Stories

