import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import Contact from "./Contact"

const contacts = [
  {src: '/widgets/jeff.jpg', name: 'Jeff Bezoz'},
  {src: '/widgets/elon.jpg', name: 'Elon Musk'},
  {src: '/widgets/bill.jpg', name: 'Bill Gates'},
  {src: '/widgets/mark.jpg', name: 'Mark Zuckerberg'},
  {src: '/widgets/harry.webp', name: 'Harry Potter'},
  {src: '/widgets/queen.webp', name: 'The Queen'},
  {src: '/widgets/james.jpg', name: 'James Bond'},
]

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6"/>
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {
        contacts && contacts.map((contact, index) => (
          <Contact key={index} src={contact.src} name={contact.name}/>
        ))
      }
    </div>
  )
}

export default Widgets