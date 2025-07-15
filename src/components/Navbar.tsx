import ProfileImage from "../assets/Profile Image.png";

export default function Navbar() {
	return (
		<nav className="flex w-full gap-x-6 items-center justify-between px-6 lg:px-14 pt-[38px]">
			<form action="search" className="relative w-full max-w-[625px]">
				<input
					type="search"
					name="search"
					id="search-input"
					className="h-[40px] w-full rounded-[10px] bg-white bg-opacity-10 px-4 py-2 text-[12px] tracking-[0.5px] text-[#808191] placeholder:text-[#808191]"
					placeholder="Search"
				/>
				<span className="absolute right-4 top-1/2 z-[1000px] -translate-y-1/2 text-[#808191]">
					<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
						/>
					</svg>
				</span>
			</form>
			<div className="flex sm:w-full max-w-[176px] items-center space-x-2">
				<div className="hidden sm:flex w-full items-center space-x-2">
					{/* profile image */}
					<figure className="h-8 w-8">
						<img src={ProfileImage} alt="profile image" />
					</figure>
					<p>Thomas</p>
					<figure>
						<svg width="20" height="20" viewBox="0 0 20 20">
							<path
								opacity="0.5"
								d="M10 13.094L15.008 8.086 13.831 6.907 10 10.74 6.17 6.907 4.992 8.085 10 13.094Z"
								fill="#808191"
							/>
						</svg>
					</figure>
				</div>

				{/* Notification icon */}
				<div className="notification inline-grid grid-cols-1">
					<figure className="col-start-1 row-start-1">
						<svg width="20" height="20" viewBox="0 0 20 20">
							<path
								d="M15.5893 7.33027C15.5893 8.37688 15.8659 8.99376 16.4747 9.70465C16.936 10.2284 17.0834 10.9007 17.0834 11.63C17.0834 12.3585 16.8441 13.0501 16.3645 13.6116C15.7367 14.2847 14.8514 14.7144 13.9478 14.7891C12.6384 14.9008 11.3281 14.9948 10.0005 14.9948C8.67203 14.9948 7.36262 14.9385 6.05321 14.7891C5.14879 14.7144 4.26343 14.2847 3.63647 13.6116C3.15693 13.0501 2.91675 12.3585 2.91675 11.63C2.91675 10.9007 3.065 10.2284 3.52549 9.70465C4.15328 8.99376 4.41168 8.37688 4.41168 7.33027V6.97524C4.41168 5.57361 4.76119 4.65709 5.48091 3.75988C6.55097 2.4514 8.26621 1.66666 9.96323 1.66666H10.0378C11.7712 1.66666 13.542 2.48917 14.5938 3.85388C15.2762 4.73263 15.5893 5.61054 15.5893 6.97524V7.33027ZM7.56146 16.7174C7.56146 16.2977 7.94658 16.1055 8.30272 16.0233C8.71931 15.9351 11.2578 15.9351 11.6744 16.0233C12.0305 16.1055 12.4156 16.2977 12.4156 16.7174C12.3949 17.1169 12.1606 17.4711 11.8367 17.696C11.4168 18.0233 10.924 18.2306 10.4089 18.3053C10.124 18.3423 9.84403 18.3431 9.56906 18.3053C9.05308 18.2306 8.56029 18.0233 8.14122 17.6952C7.81655 17.4711 7.58217 17.1169 7.56146 16.7174Z"
								fill="#808191"
							/>
						</svg>
					</figure>

					{/* Red dot */}
					<figure className="col-start-1 row-start-1 justify-self-end">
						<svg width="10" height="9" viewBox="0 0 10 9">
							<circle cx="5" cy="4.778" r="3.6" fill="#EC5252" stroke="#1E2127" strokeWidth="1.2" />
						</svg>
					</figure>
				</div>
			</div>
		</nav>
	);
}
