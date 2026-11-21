const apps = [
  {
    name: "Mingle Sport",
    image: "mingle.png",
    appStoreLink: "https://apps.apple.com/us/app/mingle-sport-team-manager/id1583591186",
    appStoreImages: ["mingle-1.png", "mingle-2.png", "mingle-3.png"],
    features: ["SwiftUI", "TCA", "Kotlin Multiplatform", "Mixpanel"],
    description: "Mingle Sport runs your football team in one place: availability, schedule, line-ups and match day. Trusted by 15,000+ teams and 300,000+ players, parents and coaches from all over the world."
  },
  {
    name: "Chess.com",
    image: "chess.com.png",
    appStoreLink: "https://apps.apple.com/bm/app/chess-play-learn-online/id329218549?platform=iphone",
    appStoreImages: ["chess.com-1.png", "chess.com-2.png", "chess.com-3.png"],
    features: ["SwiftUI", "Combine", "UIKit", "Test-Driven Development"],
    description: "Play chess online with over 150 million players from around the world! Chess, ajedrez, xadrez, satranç, شطرنج, scacchi, schach, șah, šachy, şahmat… no matter the language, no matter the name, it's known as the best strategy game in the world. Enjoy free unlimited 3d chess games and improve your chess rating with 500,000+ tactics puzzles, interactive lessons and videos, and over 100 powerful computer opponents. Unlock your inner chess master today!\""
  },
  {
    name: "Speechify",
    image: "speechify.png",
    appStoreLink: "https://apps.apple.com/us/app/speechify-text-to-speech-audio/id1209815023",
    appStoreImages: ["speechify-1.png", "speechify-2.png", "speechify-3.png"],
    features: ["SwiftUI", "Combine", "AVFoundation", "OCR", "Test-Driven Development"],
    description: 'Text to speech from Speechify lets you listen to docs, articles, PDFs, email, and various other formats — anything you read. With 20M+ users, it is the top rated TTS app in the AppStore. Our users have listened to over 250 billion words with Speechify."'
  },
  {
    name: "Reddit",
    image: "reddit.png",
    appStoreLink: "https://apps.apple.com/us/app/reddit/id1064216828",
    appStoreImages: ["reddit-1.png", "reddit-2.png", "reddit-3.png"],
    features: ["UIKit", "AVFoundation", "Social Network"],
    description: "Reddit is the place where people come together to have the most authentic and interesting conversations on the internet—Where gaming communities, nostalgic internet forums, bloggers, meme-makers, and fandoms mingle alongside video streamers, support groups, news junkies, armchair experts, seasoned professionals, and artists and creators of all types."
  },
  {
    name: "Flightradar24",
    image: "flightradar24.png",
    appStoreLink: "https://apps.apple.com/us/app/flightradar24-flight-tracker/id382233851",
    appStoreImages: ["flightradar24-1.png", "flightradar24-2.png", "flightradar24-3.png"],
    features: ["UIKit", "Combine", "Test-Driven Development"],
    description: "The world's best flight tracker app - #1 Travel app in over 150 countries."
  },
  {
    name: "Lottery.com",
    image: "lottery.png",
    appStoreLink: "https://apps.apple.com/us/app/lottery-com-play-the-lottery/id835415006",
    appStoreImages: ["lottery-1.png", "lottery-2.png", "lottery-3.png"],
    features: ["SwiftUI", "Combine", "Test-Driven Development"],
    description: 'Lottery.com is the first-ever, safe and secure, mobile lottery platform that lets you play official U.S. lottery games right from your phone."'
  },
  {
    name: "Trust Wallet",
    image: "trust-wallet.png",
    appStoreLink: "https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409",
    appStoreImages: ["trust-wallet-1.png", "trust-wallet-2.png", "trust-wallet-3.png"],
    features: ["Swift", "Multi-chain wallet", "Web3 / dApps", "Security"],
    description: "Trust Wallet is a self-custody crypto wallet used by more than 200 million people. It supports 100+ blockchains, with send and receive, swaps, staking, NFTs and access to Web3 apps."
  },
  {
    name: "Bitcoin.com Wallet",
    image: "bitcoin-com-wallet.png",
    appStoreLink: "https://apps.apple.com/us/app/bitcoin-com-crypto-wallet/id1252903728",
    appStoreImages: ["bitcoin-com-wallet-1.png", "bitcoin-com-wallet-2.png", "bitcoin-com-wallet-3.png"],
    features: ["Swift", "Self-custody wallet", "Payments"],
    description: "The Bitcoin.com Wallet is a self-custody, multi-chain crypto wallet. Send, receive, swap and hold Bitcoin, Bitcoin Cash, Ethereum and other major cryptocurrencies, with full control of your keys."
  },
  {
    name: "Truecaller",
    image: "truecaller.png",
    appStoreLink: "https://apps.apple.com/us/app/truecaller-premium-caller-id/id448142450",
    appStoreImages: ["truecaller-1.png", "truecaller-2.png", "truecaller-3.png"],
    features: ["Swift", "Caller ID", "Spam protection"],
    description: "Truecaller identifies and blocks spam calls and lets you look up unknown numbers. It is trusted by more than 500 million users worldwide."
  },
  {
    name: "Barstool Sports",
    image: "barstool-sports.png",
    appStoreLink: "https://apps.apple.com/us/app/barstool-sports/id456805313",
    appStoreImages: ["barstool-sports-1.png", "barstool-sports-2.png", "barstool-sports-3.png"],
    features: ["Swift", "Live video", "Podcasts"],
    description: "The official Barstool Sports app: live video, podcasts and blogs about sports and pop culture from one of the biggest sports media brands in the US."
  },
  {
    name: "TWINT",
    image: "twint.png",
    appStoreLink: "https://apps.apple.com/us/app/prepaid-twint-other-banks/id1001116392",
    appStoreImages: ["twint-1.png", "twint-2.png", "twint-3.png"],
    features: ["Swift", "Mobile payments", "UI testing"],
    description: "TWINT is Switzerland's digital cash. Send and request money, pay in shops and online, pay for parking and buy vouchers, all from your phone."
  },
  {
    name: "Clockify",
    image: "clockify.png",
    appStoreLink: "https://apps.apple.com/us/app/clockify-time-tracker/id1304431926",
    appStoreImages: ["clockify-1.png", "clockify-2.png", "clockify-3.png"],
    features: ["Swift", "Time tracking", "Timesheets"],
    description: "Clockify is a time tracker and timesheet app used by individuals, teams and businesses to track work hours, projects and billable time."
  },
  {
    name: "Driver",
    image: "driver.png",
    appStoreLink: "https://apps.apple.com/us/app/driver-dash-cam-trip-log/id1415557883",
    appStoreImages: ["driver-1.png", "driver-2.png", "driver-3.png"],
    features: ["Swift", "AVFoundation", "Cloud sync"],
    description: "Driver turns your phone into a dual-camera dash cam. It records trips automatically, backs them up to the cloud and lets you share a link when you need proof."
  },
  {
    name: "Aly Go",
    image: "aly.png",
    appStoreLink: "https://apps.apple.com/us/app/id1543230654",
    appStoreImages: ["aly-1.png", "aly-2.png", "aly-3.png"],
    features: ["UIKit", "Realm", "Test-Driven Development"],
    description: "Internal Alyvant application designed for pharmaceutical sales representatives, used to deliver useful and easy-to-consume physician information to the sales agents, facilitating productive call planning and physician visits."
  },
  {
    name: "My Kokoon",
    image: "kokoon.png",
    appStoreLink: "https://apps.apple.com/is/app/mykokoon/id1533992618",
    appStoreImages: ["kokoon-1.png", "kokoon-2.png", "kokoon-3.png"],
    features: ["Bluetooth", "Combine", "Test-Driven Development"],
    description: "MyKokoon is a digital therapeutic solution for sleep, powered by Kokoon’s biometric sleep headphones. We focus on creating a unique, superior bedtime experience for our members to help them escape from the stresses of every day."
  },
  {
    name: "Lolly",
    image: "lolly.png",
    appStoreLink: "https://apps.apple.com/us/app/lolly-dating/id1525109653",
    appStoreImages: ["lolly-1.png", "lolly-2.png", "lolly-3.png"],
    features: ["Firebase", "Image Filtering", "Test-Driven Development"],
    description: 'Lolly is a feed-based social dating experience where users find meaningful matches through short-form video content. Lolly transforms the connections between people by replacing generic dating apps with an immersive video feed experience. Discovery on Lolly is defined by the personality of content that users create and consume, not by curated pictures or a rank of “user attractiveness."'
  },
  {
    name: "Sellou",
    image: "sellou.png",
    appStoreLink: "https://apps.apple.com/us/app/sellou/id1548126433",
    appStoreImages: ["sellou-1.png", "sellou-2.png", "sellou-3.png"],
    features: ["SwiftUI", "Combine", "Test-Driven Development"],
    description: "The Sellou app connects photography with selling. Build an audience, become an influencer, and sell to your fan base."
  },
  {
    name: "Pludo",
    image: "pludo.png",
    appStoreLink: "https://apps.apple.com/us/app/pludo-social-voice-messages/id1542827622",
    appStoreImages: ["pludo-1.png", "pludo-2.png", "pludo-3.png"],
    features: ["SwiftUI", "Audio Chat", "Test-Driven Development", "Socket IO"],
    description: "Pludo is a social audio platform that lets you create and discover Spaces dedicated to certain topics, personalities and communities. Create and manage spaces for a community or audience."
  },
  {
    name: "Level Home",
    image: "level-home.png",
    appStoreLink: "https://apps.apple.com/us/app/level-home/id1490027518",
    appStoreImages: ["level-home-1.png", "level-home-2.png"],
    features: ["Bluetooth", "Test-Driven Development"],
    description: "Level is creating the next generation of smart locks with the Level Bolt and Level Touch. Level Bolt is the world’s first invisible smart lock that installs inside your door to make your current lock smart."
  },
  {
    name: "Skippit",
    image: "skippit.png",
    appStoreLink: "https://apps.apple.com/us/app/skippit/id1475092571",
    appStoreImages: ["skippit-1.png", "skippit-2.png"],
    features: ["Twillio", "Image Filtering", "Test-Driven Development"],
    description: "Skippit is a new type of first date that uses video calling to replace the expensive Ubers, awkward first drinks, and cat-fishing that’s common in most dating apps."
  },
  {
    name: "Celsius",
    image: "celsius.png",
    appStoreLink: "https://apps.apple.com/us/app/celsius-network-crypto-wallet/id1387885523",
    appStoreImages: ["celsius-1.png", "celsius-2.png"],
    features: ["React Native", "Onfido SDK", "Test-Driven Development"],
    description: "Calling all HODLers! Would you like to earn interest using 26 different crypto currencies in one crypto wallet? Then Celsius Network Wallet is the perfect crypto app for you! Stay on top of community events & cryptocurrency news, while you deposit and earn interest rewards (up to 11% APY) on CEL, BTC, ETH, and other crypto. Automatically qualify for a 1% APR dollar loan using your crypto as collateral! And the best part - Never pay any fees!"
  },
  {
    name: "Bitcoin Cash Register",
    image: "bitcoin-cash-register.png",
    appStoreLink: "https://apps.apple.com/us/app/bitcoin-cash-register-bch/id1460652887",
    appStoreImages: ["bitcoin-cash-register-1.png", "bitcoin-cash-register-2.png"],
    features: ["Blockchain", "BIP70", "Test-Driven Development"],
    description: "This simple Point of Sale allows you to accept Bitcoin Cash (BCH) payments at any retail location. All it requires is an address linked to your wallet to start receiving Bitcoin Cash (BCH) payments."
  },
  {
    name: "Metoro VPN",
    image: "metoro.png",
    appStoreLink: "https://apps.apple.com/us/app/metoro-vpn/id1495349422?ls=1",
    appStoreImages: ["metoro-1.png", "metoro-2.png"],
    features: ["VPN", "OpenVPN", "IKEv2"],
    description: "It is the best proxy VPN client for WiFi hotspot security and privacy protection. It is a free and unlimited VPN. Metoro VPN - It brings a high VPN speed and encrypted VPN connection to your iPhone."
  },
  {
    name: "ESAR",
    image: "esar.png",
    appStoreLink: "https://apps.apple.com/us/app/esar-%D8%A7%D8%B3%D8%AA%D8%A7%D8%AC%D8%B1-%D8%A8%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%8A%D8%B3%D8%A7%D8%B1/id1393026934",
    appStoreImages: ["esar-1.jpg", "esar-2.jpg"],
    features: ["GPS", "Google Maps", "Push Notifications"],
    description: "What AirBNB is for accommodations - ESAR is for cars. Renting Cars has never been so easy."
  },
  {
    name: "Insite by Investa",
    image: "insite.png",
    appStoreLink: "https://apps.apple.com/us/app/insite-by-investa/id1478744000",
    appStoreImages: ["insite-1.png", "insite-2.png"],
    features: ["Bluetooth / Beacons", "Push Notifications", "Core Animation"],
    description: "The Insite app by Investa provides a seamless, intuitive and enjoyable mobile experience that incorporates the latest in emerging building technologies. Insite allows occupants to navigate their workplace, view end of trip facilities or a meeting room, RSVP to Events and connect with our 5-star concierge services."
  },
  {
    name: "Flask for Axon",
    image: "flask.png",
    appStoreLink: "https://apps.apple.com/us/app/flask-for-axon/id1160464791",
    appStoreImages: ["flask-1.png", "flask-2.png"],
    features: ["ResearchKit", "HealthKit"],
    description: "The Axon SmartStudy by Medable system allows a researcher to build a study, create a mobile application associated with it and deploy to the Apple app store to start collecting data in less than 2 weeks. This application serves as a test bed for the various features and functions of the Axon SmartStudy system. A researcher can configure their study, tasks, and steps and visualize them in this app. Researchers can also use Axon SmartStudy to access Health data that is collected by your mobile device."
  },
  {
    name: "Milo Pets",
    image: "milo.png",
    appStoreLink: "https://apps.apple.com/us/app/id1447288821",
    appStoreImages: ["milo-1.png", "milo-2.png"],
    features: ["Chat", "Push Notifications", "Web Sockets"],
    description: "Milo is a wellness membership dedicated to keeping your pet healthy. Members make simple monthly payments and receive best-in-class preventative care designed by your vet’s doctors and modeled after AAHA recommended guidelines."
  },
  {
    name: "Trainerize",
    image: "trainerize.png",
    appStoreLink: "https://apps.apple.com/us/app/fitness-app-by-trainerize/id516851502",
    appStoreImages: ["trainerize-1.png", "trainerize-2.png"],
    features: ["React Native", "RxJS", "Native Modules"],
    description: "Trainerize is an online personal training platform that empowers fitness professionals and studios to better connect to their clients when training them online or in-person."
  },
  {
    name: "LogTen Pro",
    image: "logten-pro.png",
    appStoreLink: "https://apps.apple.com/us/app/logten-pro/id837274884",
    appStoreImages: ["logten-pro-1.png", "logten-pro-2.png"],
    features: ["macOS/iOS", "React", "Parse", "Core Data"],
    description: "LogTen Pro is the most advanced pilot logbook for iOS, used by over 100,000 pilots world wide to track flight time, currency, endorsements, duty, rest, BFRs and more."
  },
  {
    name: "Human Dx",
    image: "humandx.png",
    appStoreLink: "https://apps.apple.com/us/app/human-dx/id1032495132",
    appStoreImages: ["humandx-1.jpg", "humandx-2.jpg"],
    features: ["React Native Chat", "Natural Language Processing", "Machine Learning"],
    description: "Human Dx helps you develop your clinical reasoning with fast and fun clinical cases. Use our peer-reviewed cases to test your skills in less than five minutes each day, while learning from detailed teaching points and input from top medical professionals. Join a global community committed to learning and improving their clinical practice."
  },
  {
    name: "Oviva",
    image: "oviva.png",
    appStoreLink: "https://apps.apple.com/us/app/oviva/id899484812",
    appStoreImages: ["oviva-1.png", "oviva-2.png"],
    features: ["Bluetooth", "Core Data"],
    description: "This is an app for Oviva patients only, which you can access with your patient credentials once you are referred to Oviva by your physician."
  },
  {
    name: "Instamic",
    image: "instamic.png",
    appStoreLink: "https://apps.apple.com/us/app/instamic-remote/id1141162465",
    appStoreImages: ["instamic-1.png", "instamic-2.png"],
    features: ["Bluetooth", "Voice Recording", "Low-level protocols", "OPX"],
    description: "Control your Instamic remotely to capture the sound you love! Instamic Remote transforms your iPhone, iPad or iPod Touch into a suitable remote control for your Instamic."
  },
  {
    name: "SAFE",
    image: "safe.png",
    appStoreLink: "https://apps.apple.com/us/app/safe-app/id1154398105",
    appStoreImages: ["safe-1.png", "safe-2.png"],
    features: ["HealthKit", "Push Notifications"],
    description: "SAFE App lets you privately show your verified STD status on your phone, and confirm the status of your partners. It’s also the easiest and least expensive way to get tested for STDs."
  }
]

document.addEventListener("DOMContentLoaded", function () {
  fillApps()
})

function fillApps() {
  const features = document.querySelector("#apps")

  features.innerHTML = ""

  for (let i = 0; i < apps.length; i++) {
    const app = apps[i]

    // div
    const divElement = document.createElement("div")
    divElement.className = "col-md-6 col-lg-2"

    // a
    const anchor = document.createElement("a")
    anchor.className = "portfolio-item d-block mx-auto popup-with-move-anim"
    anchor.href = "#details-lightbox"
    anchor.addEventListener("click", () => {
      fillAppDetails(apps[i])
    })

    // img
    const image = document.createElement("img")
    image.className = "img-fluid img-thumbnail round-xlarge"
    image.src = `images/portfolio/${app.image}`
    image.alt == app.name

    anchor.appendChild(image)
    divElement.appendChild(anchor)

    features.appendChild(divElement)
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
    mainClass: "my-mfp-slide-bottom"
  })
}

function fillAppDetails(app) {
  const appStoreImages = document.querySelector("#app-store-images")
  appStoreImages.innerHTML = ""

  for (let image of app.appStoreImages) {
    const img = document.createElement("img")
    img.src = `images/portfolio/details/${image}`
    img.alt = app.name
    img.className = "img-fluid border"
    appStoreImages.appendChild(img)
  }

  const appTitle = document.querySelector("#app-title")
  appTitle.textContent = app.name

  const appDescription = document.querySelector("#app-description")
  appDescription.textContent = app.description

  const ul = document.querySelector("#app-features")
  ul.innerHTML = ""

  const appStoreButton = document.querySelector("#app-app-store-button")
  appStoreButton.href = app.appStoreLink

  for (let feature of app.features) {
    const li = document.createElement("li")
    li.className = "media"

    const i = document.createElement("i")
    i.className = "far fa-check-square"

    const div = document.createElement("div")
    div.className = "media-body"
    div.textContent = feature

    li.appendChild(i)
    li.appendChild(div)
    ul.appendChild(li)
  }
}
