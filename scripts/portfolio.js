const apps = [
	{
		name: "Bitcoin Cash Register",
		image: "bitcoin-cash-register.png",
		appStoreLink:
			"https://apps.apple.com/us/app/bitcoin-cash-register-bch/id1460652887",
		appStoreImages: [
			"bitcoin-cash-register-1.png",
			"bitcoin-cash-register-2.png",
		],
		features: ["Blockchain", "BIP70", "Test-Driven Development"],
		description:
			"This simple Point of Sale allows you to accept Bitcoin Cash (BCH) payments at any retail location. All it requires is an address linked to your wallet to start receiving Bitcoin Cash (BCH) payments.",
	},
	{
		name: "Metoro VPN",
		image: "metoro.png",
		appStoreLink: "https://apps.apple.com/us/app/metoro-vpn/id1495349422?ls=1",
		appStoreImages: ["metoro-1.png", "metoro-2.png"],
		features: ["VPN", "OpenVPN", "IKEv2"],
		description:
			"It is the best proxy VPN client for WiFi hotspot security and privacy protection. It is a free and unlimited VPN. Metoro VPN - It brings a high VPN speed and encrypted VPN connection to your iPhone.",
	},
	{
		name: "ESAR",
		image: "esar.png",
		appStoreLink:
			"https://apps.apple.com/us/app/esar-%D8%A7%D8%B3%D8%AA%D8%A7%D8%AC%D8%B1-%D8%A8%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%8A%D8%B3%D8%A7%D8%B1/id1393026934",
		appStoreImages: ["esar-1.jpg", "esar-2.jpg"],
		features: ["GPS", "Google Maps", "Push Notifications"],
		description:
			"What AirBNB is for accommodations - ESAR is for cars. Renting Cars has never been so easy.",
	},
	{
		name: "Insite by Investa",
		image: "insite.png",
		appStoreLink:
			"https://apps.apple.com/us/app/insite-by-investa/id1478744000",
		appStoreImages: ["insite-1.png", "insite-2.png"],
		features: ["Bluetooth / Beacons", "Push Notifications", "Core Animation"],
		description:
			"The Insite app by Investa provides a seamless, intuitive and enjoyable mobile experience that incorporates the latest in emerging building technologies. Insite allows occupants to navigate their workplace, view end of trip facilities or a meeting room, RSVP to Events and connect with our 5-star concierge services.",
	},
	{
		name: "Flask for Axon",
		image: "flask.png",
		appStoreLink: "https://apps.apple.com/us/app/flask-for-axon/id1160464791",
		appStoreImages: ["flask-1.png", "flask-2.png"],
		features: ["ResearchKit", "HealthKit"],
		description:
			"The Axon SmartStudy by Medable system allows a researcher to build a study, create a mobile application associated with it and deploy to the Apple app store to start collecting data in less than 2 weeks. This application serves as a test bed for the various features and functions of the Axon SmartStudy system. A researcher can configure their study, tasks, and steps and visualize them in this app. Researchers can also use Axon SmartStudy to access Health data that is collected by your mobile device.",
	},
	{
		name: "Milo Pets",
		image: "milo.png",
		appStoreLink: "https://apps.apple.com/us/app/id1447288821",
		appStoreImages: ["milo-1.png", "milo-2.png"],
		features: ["Chat", "Push Notifications", "Web Sockets"],
		description:
			"Milo is a wellness membership dedicated to keeping your pet healthy. Members make simple monthly payments and receive best-in-class preventative care designed by your vet’s doctors and modeled after AAHA recommended guidelines.",
	},
	{
		name: "Trainerize",
		image: "trainerize.png",
		appStoreLink:
			"https://apps.apple.com/us/app/fitness-app-by-trainerize/id516851502",
		appStoreImages: ["trainerize-1.png", "trainerize-2.png"],
		features: ["React Native", "RxJS", "Native Modules"],
		description:
			"Trainerize is an online personal training platform that empowers fitness professionals and studios to better connect to their clients when training them online or in-person.",
	},
	{
		name: "LogTen Pro",
		image: "logten-pro.png",
		appStoreLink: "https://apps.apple.com/us/app/logten-pro/id837274884",
		appStoreImages: ["logten-pro-1.png", "logten-pro-2.png"],
		features: ["macOS/iOS", "React", "Parse", "Core Data"],
		description:
			"LogTen Pro is the most advanced pilot logbook for iOS, used by over 100,000 pilots world wide to track flight time, currency, endorsements, duty, rest, BFRs and more.",
	},
	{
		name: "Human Dx",
		image: "humandx.png",
		appStoreLink: "https://apps.apple.com/us/app/human-dx/id1032495132",
		appStoreImages: ["humandx-1.jpg", "humandx-2.jpg"],
		features: [
			"React Native Chat",
			"Natural Language Processing",
			"Machine Learning",
		],
		description:
			"Human Dx helps you develop your clinical reasoning with fast and fun clinical cases. Use our peer-reviewed cases to test your skills in less than five minutes each day, while learning from detailed teaching points and input from top medical professionals. Join a global community committed to learning and improving their clinical practice.",
	},
	{
		name: "Oviva",
		image: "oviva.png",
		appStoreLink: "https://apps.apple.com/us/app/oviva/id899484812",
		appStoreImages: ["oviva-1.png", "oviva-2.png"],
		features: ["Bluetooth", "Core Data"],
		description:
			"This is an app for Oviva patients only, which you can access with your patient credentials once you are referred to Oviva by your physician.",
	},
	{
		name: "Instamic",
		image: "instamic.png",
		appStoreLink: "https://apps.apple.com/us/app/instamic-remote/id1141162465",
		appStoreImages: ["instamic-1.png", "instamic-2.png"],
		features: ["Bluetooth", "Voice Recording", "Low-level protocols", "OPX"],
		description:
			"Control your Instamic remotely to capture the sound you love! Instamic Remote transforms your iPhone, iPad or iPod Touch into a suitable remote control for your Instamic.",
	},
	{
		name: "SAFE",
		image: "safe.png",
		appStoreLink: "https://apps.apple.com/us/app/safe-app/id1154398105",
		appStoreImages: ["safe-1.png", "safe-2.png"],
		features: ["HealthKit", "Push Notifications"],
		description:
			"SAFE App lets you privately show your verified STD status on your phone, and confirm the status of your partners. It’s also the easiest and least expensive way to get tested for STDs.",
	},
];

document.addEventListener("DOMContentLoaded", function () {
	fillApps();
});

function fillApps() {
	const features = document.querySelector("#apps");

	features.innerHTML = "";

	for (let i = 0; i < apps.length; i++) {
		const app = apps[i];

		// div
		const divElement = document.createElement("div");
		divElement.className = "col-md-6 col-lg-2";

		// a
		const anchor = document.createElement("a");
		anchor.className = "portfolio-item d-block mx-auto popup-with-move-anim";
		anchor.href = "#details-lightbox";
		anchor.addEventListener("click", () => {
			fillAppDetails(apps[i]);
		});

		// img
		const image = document.createElement("img");
		image.className = "img-fluid img-thumbnail round-xlarge";
		image.src = `images/portfolio/${app.image}`;
		image.alt == app.name;

		anchor.appendChild(image);
		divElement.appendChild(anchor);

		features.appendChild(divElement);
	}

	$(".popup-with-move-anim").magnificPopup({
		type: "inline",
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: "auto",
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: "my-mfp-slide-bottom",
	});
}

function fillAppDetails(app) {
	const appStoreImages = document.querySelector("#app-store-images");
	appStoreImages.innerHTML = "";

	for (let image of app.appStoreImages) {
		const img = document.createElement("img");
		img.src = `images/portfolio/details/${image}`;
		img.alt = app.name;
		img.className = "img-fluid border";
		appStoreImages.appendChild(img);
	}

	const appTitle = document.querySelector("#app-title");
	appTitle.textContent = app.name;

	const appDescription = document.querySelector("#app-description");
	appDescription.textContent = app.description;

	const ul = document.querySelector("#app-features");
	ul.innerHTML = "";

	const appStoreButton = document.querySelector("#app-app-store-button");
	appStoreButton.href = app.appStoreLink;

	for (let feature of app.features) {
		const li = document.createElement("li");
		li.className = "media";

		const i = document.createElement("i");
		i.className = "far fa-check-square";

		const div = document.createElement("div");
		div.className = "media-body";
		div.textContent = feature;

		li.appendChild(i);
		li.appendChild(div);
		ul.appendChild(li);
	}
}
