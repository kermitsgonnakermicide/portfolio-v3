export type Project = { slug: string; title: string; description: string; image: string; imageAlt?: string; imageFit?: 'cover' | 'contain'; link: string; category: string; featured: boolean }

export const projects: Project[] = [
  {
    "title": "SPIDR - Hexapod Locomotion & Perception research",
    "description": "Novel perception, navigation and locomotion pipeline for hexapod robots in unstructured environments, now part of modubotics",
    "image": "/projects/spidr.png",
    "link": "https://github.com/kermitsgonnakermicide/SPIDR",
    "category": "Hardware",
    "slug": "spidr",
    "featured": true,
    "imageAlt": "SPIDR hexapod prototype",
    "imageFit": "contain"
  },
  {
    "title": "ArrhythmiX",
    "description": "A wearable ECG research prototype with wireless acquisition, signal processing and machine-learning analysis.",
    "image": "/projects/arrhythmix-open-device.svg",
    "link": "https://github.com/TTF-fog/ArrythmiX",
    "category": "Hardware",
    "slug": "arrhythmix",
    "featured": true,
    "imageAlt": "Open ArrhythmiX device showing the battery, electronics and electrode connections",
    "imageFit": "contain"
  },
  {
    "title": "Lattice — Modular Keyboard",
    "description": "A 60% mechanical keyboard with magnetically attached modules — a macropad, sliderpad, and LED matrix — all communicating over I2C with pogo pin connectors.",
    "image": "/projects/lattice.png",
    "link": "https://github.com/kermitsgonnakermicide/Lattice",
    "category": "Hardware",
    "slug": "lattice",
    "featured": false,
    "imageAlt": "Lattice keyboard and magnetic macropad CAD render",
    "imageFit": "contain"
  },
  {
    "title": "RoboCup Junior Rescue Line",
    "description": "Robot Inventors Legacy: a Raspberry Pi 5 rescue robot that follows lines, collects victims and sorts them into rescue zones.",
    "image": "/projects/rcj-robot.png",
    "link": "https://github.com/kermitsgonnakermicide/catbot-jet",
    "category": "Hardware",
    "slug": "catbot-jet",
    "featured": true,
    "imageAlt": "Robot Inventors Legacy rescue robot on a wooden table",
    "imageFit": "contain"
  },
  {
    "title": "spooderbot",
    "description": "A multi-legged spider robot with programmable gait patterns and autonomous navigation capabilities.",
    "image": "/projects/spooderbot.png",
    "link": "https://github.com/kermitsgonnakermicide/spooderbot",
    "category": "Hardware",
    "slug": "spooderbot",
    "featured": false,
    "imageAlt": "Spooderbot four-legged robot CAD model",
    "imageFit": "contain"
  },
  {
    "title": "robodog",
    "description": "A quadruped robot dog with articulated joints and walking gait control.",
    "image": "/projects/robodog.png",
    "link": "https://github.com/kermitsgonnakermicide/robodog",
    "category": "Hardware",
    "slug": "robodog",
    "featured": false,
    "imageAlt": "OpenDoggo robot chassis and servo mounts CAD render",
    "imageFit": "contain"
  },
  {
    "title": "segway",
    "description": "A two-wheeled self-balancing robot using PID control for upright stability.",
    "image": "",
    "link": "https://github.com/kermitsgonnakermicide/segway",
    "category": "Hardware",
    "slug": "segway",
    "featured": false
  },
  {
    "title": "3DPrinter",
    "description": "A custom-built 3D printer from scratch.",
    "image": "/projects/3dprinter.png",
    "link": "https://github.com/kermitsgonnakermicide/3DPrinter",
    "category": "Hardware",
    "slug": "3dprinter",
    "featured": false,
    "imageAlt": "Complete custom 3D printer CAD assembly",
    "imageFit": "contain"
  },
  {
    "title": "ModiLang",
    "description": "A custom programming language with its own interpreter, written in Python. MIT Licensed.",
    "image": "",
    "link": "https://github.com/kermitsgonnakermicide/ModiLang",
    "category": "Software",
    "slug": "modilang",
    "featured": false
  },
  {
    "title": "spotifyTUI",
    "description": "A Go terminal audio-player prototype with two local MP3 decks and a Bubble Tea interface.",
    "image": "",
    "link": "https://github.com/kermitsgonnakermicide/spotifyTUI",
    "category": "Software",
    "slug": "spotifytui",
    "featured": false
  },
  {
    "title": "AndyTracker",
    "description": "A fun tracking project built in C++.",
    "image": "/projects/andytracker.png",
    "link": "https://github.com/kermitsgonnakermicide/AndyTracker",
    "category": "Software",
    "slug": "andytracker",
    "featured": false,
    "imageAlt": "AndyTracker motorized tracking gimbal CAD model",
    "imageFit": "contain"
  },
  {
    "title": "usb-2fa-key",
    "description": "A custom USB two-factor authentication security key.",
    "image": "/projects/usb-2fa-key.png",
    "link": "https://github.com/kermitsgonnakermicide/usb-2fa-key",
    "category": "Software",
    "slug": "usb-2fa-key",
    "featured": false,
    "imageAlt": "USB security key PCB rendered from the KiCad design",
    "imageFit": "contain"
  }
]

export const projectGroups = [
  { title: 'Highlights', projects: projects.filter(project => project.featured) },
  { title: 'Hardware', projects: projects.filter(project => project.category === 'Hardware' && !project.featured) },
  { title: 'Software', projects: projects.filter(project => project.category === 'Software' && !project.featured) },
]
