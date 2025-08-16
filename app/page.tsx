import Image from "next/image";

export default function Home() {
	return (
		<div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<div className="text-center">
				<p>
					This is text available on the webpage
				</p>
			</div>
			<div className="text-left">
				<h2 className="text-2xl">Projects</h2>
				<div id="carroussel">
					<ul>
						<li> Going crazy style </li>
						<li> Impractical python </li>
						<li> Movie Recommendations </li>
						<li> Undisclosed project </li>
					</ul>
				</div>
			</div>
		</div>);
}
