import Image from "next/image";

export default function Home() {
	return (
		<div className=" text-center">
			<section className="flex text-2xl flex-col justify-center items-center">
				<div className="mt-7 font-extrabold">
					{" "}
					MERN Stack developer
				</div>
				<div className="mt-7">
					{" "}
					I code and design beautifully simple things
				</div>
				<Image className="mt-7" src={""} alt={"My Image"} />
			</section>
			<section className="mt-7 text-2xl relative h-[500px] bg-sky-400 ">
				<div className="flex flex-col justify-start items-center">
					<div className="mt-7 font-extrabold">
						Hi, I am Ashish tomer.. Nice to meet you
					</div>
					<p className="mt-5 text-xl w-2/4">
						I'm a software developer specializing in the
						MERN stack and Next.js with 3 months of
						industry experience. Every day in this
						fast-paced environment has been a valuable
						learning opportunity, where I've honed my
						skills and embraced challenges with
						enthusiasm. <br /> With a good understanding
						of data structures and algorithms, I
						prioritize effective communication and time
						management. I'm passionate about leveraging
						technology to create impactful solutions and
						eager to collaborate on innovative projects
						that drive positive change.
					</p>
				</div>
				<section className="flex absolute top-[68%] w-full justify-around items-center">
					<div className="p-10 bg-white rounded-3xl shadow-lg hover:shadow-xl transition ease-in-out delay-100 hover:scale-y-[1.03] hover:scale-x-[1.03]">
						<Image src={""} alt={""} />
						<div>Front-end Developer</div>
						<div className="border-b text-base border-gray-400 mb-4 mt-6">
							HTML, Pug, slim, CSS, Sass
						</div>
						<div className=" my-4 text-left">Dev Tools</div>
						<div className="flex text-base justify-between items-center">
							<ul className="list-disc">
								<li className="my-3">BitBucket</li>
								<li className="my-3">Boottrap</li>
								<li className="my-3">Bulma</li>
								<li className="my-3">CodeKit</li>
							</ul>
							<ul className="list-disc">
								<li className="my-3">BitBucket</li>
								<li className="my-3">Boottrap</li>
								<li className="my-3">Bulma</li>
								<li className="my-3">CodeKit</li>
							</ul>
						</div>
					</div>
					<div className="p-10 bg-white rounded-3xl shadow-lg hover:shadow-xl transition ease-in-out delay-100 hover:scale-y-[1.03] hover:scale-x-[1.03]">
						<Image src={""} alt={""} />
						<div>Back-end Developer</div>
						<div className="border-b border-gray-400 text-base mb-4 mt-6">
							HTML, Pug, slim, CSS, Sass
						</div>
						<div className=" my-4 text-left">Dev Tools</div>
						<div className="flex text-base justify-between items-center">
							<ul className=" list-disc">
								<li className="my-3">BitBucket</li>
								<li className="my-3">Boottrap</li>
								<li className="my-3">Bulma</li>
								<li className="my-3">CodeKit</li>
							</ul>
							<ul className="list-disc">
								<li className="my-3">BitBucket</li>
								<li className="my-3">Boottrap</li>
								<li className="my-3">Bulma</li>
								<li className="my-3">CodeKit</li>
							</ul>
						</div>
					</div>
				</section>
			</section>
			<div className="font-bold mt-10">My Recent Work</div>
			<div>Here are few past designs projects I've worked on.</div>
			<div className="mt-3 text-sky-500">Want to see more? Email me:</div>
		</div>
	);
}
