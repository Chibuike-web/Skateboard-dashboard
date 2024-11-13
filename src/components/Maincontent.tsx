import { CheckIcon1, CheckIcon2, CheckIcon3 } from "./icon";
import Thomas from "../assets/Thomas.png";
import Tony from "../assets/Tony.png";
import AndyCover from "../assets/AndyWilliam.png";
import AndyProfile from "../assets/AndyWilliamProfile.png";
import JohnyCover from "../assets/JohnyWise.png";
import JohnyProfile from "../assets/JohnWiseProfile.png";
import BudiCover from "../assets/BudiHakim.png";
import BudiProfile from "../assets/BudiHakimProfile.png";
import WijayaCover from "../assets/WijayaAbadi.png";
import WijayaProfile from "../assets/WijayaAbadiProfile.png";
import "./styles.css";
import { hexToRgba } from "./Data";

export default function Maincontent() {
  return (
    <div className="flex w-full flex-col gap-[64px] p-14">
      <DiscoverSection />
      <MostWatched />
    </div>
  );
}

const DiscoverSection = () => {
  return (
    <div>
      <h1 className="mb-7 text-[40px] font-semibold leading-[1em]">Discover</h1>
      <div className="flex h-[366px] flex-row space-x-6">
        <div className="content-one w-full max-w-[725px] rounded-3xl bg-[#0DAABC] p-10">
          <h1 className="w-full max-w-[231px] text-[30px] font-semibold leading-[1.2] tracking-[0.3px]">
            How to do Basic Jumping and how to landing safely
          </h1>
          <div className="flex items-center gap-4 pt-[30px]">
            <figure className="relative">
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-white">
                <img src={Thomas} alt="ThomasImage" />
              </span>
              <span className="absolute bottom-0 right-0">
                <CheckIcon1 />
              </span>
            </figure>
            <div>
              <h3 className="text-[15px] font-medium">Thomas Hope</h3>
              <p className="text-[12px] tracking-[0.5px] opacity-80">
                53K views • 2 weeks ago
              </p>
            </div>
          </div>
        </div>

        <div className="content-two w-full max-w-[352px] rounded-3xl bg-[#242730] p-10">
          <h1 className="w-full max-w-[231px] text-[30px] font-semibold leading-[1.2] tracking-[0.3px]">
            Skateboard Tips You need to know
          </h1>
          <div className="pt-[20px]">
            <h3 className="text-[15px] font-medium">Tony Andrew</h3>
            <p className="text-[12px] tracking-[0.5px] opacity-80">
              53K views • 2 weeks
            </p>
          </div>
          <figure className="relative w-fit pt-[20px]">
            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-white">
              <img src={Tony} alt="ThomasImage" />
            </span>
            <span className="absolute bottom-0 right-0">
              <CheckIcon2 />
            </span>
          </figure>
        </div>
      </div>
    </div>
  );
};

type CardData = {
  readTime: number;
  coverImage: string;
  profileImage: string;
  name: string;
  icon: JSX.Element;
  content: string;
  views: number;
  duration: number;
};

const data: CardData[] = [
  {
    readTime: 7,
    coverImage: AndyCover,
    profileImage: AndyProfile,
    name: "Andy William",
    icon: <CheckIcon3 />,
    content: "Basic how to ride your skateboard comfortly",
    views: 53,
    duration: 2,
  },
  {
    readTime: 7,
    coverImage: JohnyCover,
    profileImage: JohnyProfile,
    name: "Budi Hakim",
    icon: <CheckIcon3 />,
    content: "Tips to playing skateboard on the ramp",
    views: 53,
    duration: 2,
  },
  {
    readTime: 7,
    coverImage: BudiCover,
    profileImage: BudiProfile,
    name: "Johny Wise",
    icon: <CheckIcon3 />,
    content: "Basic how to ride your skateboard comfortly",
    views: 53,
    duration: 2,
  },
  {
    readTime: 7,
    coverImage: WijayaCover,
    profileImage: WijayaProfile,
    name: "Andy William",
    icon: <CheckIcon3 />,
    content: "Basic how to ride your skateboard comfortly",
    views: 53,
    duration: 2,
  },
];

const MostWatched = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-7 text-[28px] font-medium leading-[28px]">
        Most Watched
      </h2>
      <div className="flex gap-5">
        {data.map((datum, index) => (
          <CardComponent
            index={index}
            readTime={datum.readTime}
            coverImage={datum.coverImage}
            profileImage={datum.profileImage}
            name={datum.name}
            icon={datum.icon}
            content={datum.content}
            views={datum.views}
            duration={datum.duration}
          />
        ))}
      </div>
    </div>
  );
};

type CardProps = {
  index: number;
  readTime: number;
  coverImage: string;
  profileImage: string;
  name: string;
  icon: JSX.Element;
  content: string;
  views: number;
  duration: number;
};

const CardComponent = ({
  index,
  readTime,
  coverImage,
  profileImage,
  name,
  icon,
  content,
  views,
  duration,
}: CardProps) => {
  return (
    <article className="overflow-hidden rounded-[20px] bg-[#242730]">
      {/* Cover Image Section */}
      <header className="relative">
        <figure>
          <img src={coverImage} alt={`Cover for ${content}`} />
        </figure>
        <time
          dateTime={`${readTime} minutes`}
          className="absolute right-[10px] top-[10px] flex h-[20px] w-[46px] items-center justify-center rounded-[7px] text-[10px] font-medium tracking-[0.5px]"
          style={{ backgroundColor: hexToRgba("242730", 0.5) }}
        >
          {readTime} min
        </time>
      </header>

      {/* Profile and Content Section */}
      <section className="relative flex flex-col p-5">
        <div className="absolute right-[20px]">
          <figure className="profile relative mt-[-50px] w-max">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-white">
              <img src={profileImage} alt={`${name}'s profile`} />
            </div>
            <span className="icon absolute bottom-0 right-0">{icon}</span>
          </figure>
        </div>
        <div className="mb-[12px] flex items-center gap-2">
          <h2 className="text-[13px] leading-[13px] tracking-[0.5px] text-[#B7B9D2]">
            {name}
          </h2>
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: index == 1 || index == 2 ? "#FF7551" : "#22B07D",
            }}
            aria-label="Online"
          ></span>
        </div>
        <p className="font-medium leading-[26px] tracking-[0.3px]">{content}</p>{" "}
        {/* Views and Duration Section */}
        <footer>
          <p className="mt-4 text-[12px] leading-[12px] tracking-[0.5px] text-[#808191]">
            {views}k views <span aria-hidden="true">•</span> {duration} weeks
            ago
          </p>
        </footer>
      </section>
    </article>
  );
};
