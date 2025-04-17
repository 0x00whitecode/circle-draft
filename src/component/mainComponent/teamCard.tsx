
const tagsData = [
  {
    label: ['REAL', 'FLAMES'],
    bgColor: 'bg-sky-300',
    textColor: 'text-white',
    icon: (
      <div className="ml-2 w-4 h-4 bg-black rounded-full" title="Circle"></div>
    ),
  },
  {
    label: ['waffle'],
    bgColor: 'bg-red-300',
    textColor: 'text-white',
    icon: (
      <div className="ml-2 w-4 h-4 text-purple-500" title="@">
        @
      </div>
    ),
  },
  {
    label: ['Mau King'],
    bgColor: 'bg-lime-300',
    textColor: 'text-white',
    icon: (
      <div className="ml-2 w-4 h-4 text-blue-500" title="Twitter">
        🐦
      </div>
    ),
  },
  {
    label: ['Kwara', 'Falcons'],
    bgColor: 'bg-gray-300',
    textColor: 'text-black',
    customIcon: (
      <div className="ml-2 w-6 h-6 relative" title="Custom Icon">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full bg-orange-500"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full rounded-full bg-white"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}
        />
      </div>
    ),
  },
  {
    label: ['Cyber', 'Wolf'],
    bgColor: 'bg-indigo-400',
    textColor: 'text-white',
    icon: (
      <div className="ml-2 text-lg" title="Wolf">
        🐺
      </div>
    ),
  },
  {
    label: ['Zenith'],
    bgColor: 'bg-emerald-400',
    textColor: 'text-black',
    icon: (
      <div className="ml-2 text-base" title="Zen">
        🧘
      </div>
    ),
  },
  {
    label: ['Nova', 'Core'],
    bgColor: 'bg-yellow-300',
    textColor: 'text-black',
    icon: (
      <div className="ml-2 text-base" title="Sun">
        ☀️
      </div>
    ),
  },
  {
    label: ['ByteFleet'],
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
    icon: (
      <div className="ml-2 w-4 h-4 bg-white rounded-sm" title="Chip"></div>
    ),
  },
  {
    label: ['Echo', 'Prime'],
    bgColor: 'bg-fuchsia-500',
    textColor: 'text-white',
    icon: (
      <div className="ml-2 text-sm" title="Sound">
        🎵
      </div>
    ),
  },
  {
    label: ['Thunder', 'Squad'],
    bgColor: 'bg-orange-400',
    textColor: 'text-black',
    customIcon: (
      <div className="ml-2 w-5 h-5 relative" title="Thunder Bolt">
        <div
          className="absolute inset-0 bg-yellow-300"
          style={{
            clipPath: 'polygon(40% 0%, 60% 0%, 50% 50%, 70% 50%, 30% 100%, 45% 55%, 25% 55%)',
          }}
        />
      </div>
    ),
  },
];


const teamCard = () => {
  return (
  <div className="flex flex-nowrap gap-4 justify-start items-center py-6 px-5 overflow-x-scroll w-full scrollbar-hide scroll-smooth">
  {tagsData.map((tag, index) => (
    <div
      key={index}
      onClick={() => alert(`You clicked on ${tag.label.join(' ')}`)}
      className={`${tag.bgColor} flex items-center justify-center px-8 rounded-md py-4 shrink-0 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg`}
    >
      {tag.label.map((text, i) => (
        <span
          key={i}
          className={`${tag.textColor} font-bold text-sm ${i !== 0 ? 'ml-1' : ''}`}
        >
          {text}
        </span>
      ))}
      {tag.icon || tag.customIcon}
    </div>
  ))}
</div>


  );
};

export default teamCard;
