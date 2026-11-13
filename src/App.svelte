<script lang="ts">
  import Header from './lib/Header.svelte'
  import Hero from './lib/Hero.svelte'
  import ProjectSection from './lib/ProjectSection.svelte'
  import Footer from './lib/Footer.svelte'

  const bio = `Student and robotics enthusiast at Shiv Nadar School, Gurgaon. I build hardware, write firmware, and occasionally make things that move. Atomic Fellow at the Lodha Genius Programme, Ashoka University.`;

  const highlightProjects = [
    {
      title: "SPIDR — Hexapod Navigation System",
      description: "Novel perception, navigation and locomotion pipeline for hexapod robots in unstructured environments, now part of modubotics",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/SPIDR",
      link: "https://github.com/kermitsgonnakermicide/SPIDR"
    },
    {
      title: "ArrhythmiX",
      description: "A wearable ECG monitor coupled with a multi-modal ML pipeline for real time analysis and cardiac event predicition",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/hate-cbse",
      link: "https://github.com/kermitsgonnakermicide/hate-cbse"
    },
    {
      title: "Lattice — Modular Keyboard",
      description: "A 60% mechanical keyboard with magnetically attached modules — a macropad, sliderpad, and LED matrix — all communicating over I2C with pogo pin connectors.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/Lattice",
      link: "https://github.com/kermitsgonnakermicide/Lattice"
    }
  ];

  const competitiveProjects = [
    {
      title: "RoboCup Junior Rescue Line",
      description: "over 2022-2026, international rescue robotics competition",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/catbot-jet",
      link: "https://github.com/kermitsgonnakermicide/catbot-jet"
    },
    {
      title: "SPIDR — Hexapod Navigation System",
      description: "Autonomous hexapod navigation using DepthAI for cave exploration, foothold testing, and real-time path planning with sensor fusion.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/SPIDR",
      link: "https://github.com/kermitsgonnakermicide/SPIDR"
    },
    {
      title: "spooderbot",
      description: "A multi-legged spider robot with programmable gait patterns and autonomous navigation capabilities.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/spooderbot",
      link: "https://github.com/kermitsgonnakermicide/spooderbot"
    }
  ];

  const hardwareProjects = [
    {
      title: "Arr-V2",
      description: "Second generation of the ArrhythmiX wearable heart monitor, building on the original design with improved PCB layout and firmware.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/Arr-V2",
      link: "https://github.com/kermitsgonnakermicide/Arr-V2"
    },
    {
      title: "robodog",
      description: "A quadruped robot dog with articulated joints and walking gait control.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/robodog",
      link: "https://github.com/kermitsgonnakermicide/robodog"
    },
    {
      title: "hexapodv2",
      description: "Second iteration of a hexapod robot with improved kinematics and servo control.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/hexapodv2",
      link: "https://github.com/kermitsgonnakermicide/hexapodv2"
    },
    {
      title: "segway",
      description: "A two-wheeled self-balancing robot using PID control for upright stability.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/segway",
      link: "https://github.com/kermitsgonnakermicide/segway"
    },
    {
      title: "3DPrinter",
      description: "A custom-built 3D printer from scratch.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/3DPrinter",
      link: "https://github.com/kermitsgonnakermicide/3DPrinter"
    },
    {
      title: "devboard-v2",
      description: "Second attempt at a custom development board withRP2350.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/devboard-v2",
      link: "https://github.com/kermitsgonnakermicide/devboard-v2"
    }
  ];

  const softwareProjects = [
    {
      title: "ModiLang",
      description: "A custom programming language with its own interpreter, written in Python. MIT Licensed.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/ModiLang",
      link: "https://github.com/kermitsgonnakermicide/ModiLang"
    },
    {
      title: "spotifyTUI",
      description: "A terminal-based Spotify client written in Go.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/spotifyTUI",
      link: "https://github.com/kermitsgonnakermicide/spotifyTUI"
    },
    {
      title: "AndyTracker",
      description: "A fun tracking project built in C++.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/AndyTracker",
      link: "https://github.com/kermitsgonnakermicide/AndyTracker"
    },
    {
      title: "usb-2fa-key",
      description: "A custom USB two-factor authentication security key.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/usb-2fa-key",
      link: "https://github.com/kermitsgonnakermicide/usb-2fa-key"
    },
    {
      title: "startupsim",
      description: "A startup simulator built with JavaScript.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/startupsim",
      link: "https://github.com/kermitsgonnakermicide/startupsim"
    },
    {
      title: "accelPlot",
      description: "Plots MPU6050 accelerometer data on a matplotlib graph in real-time. MIT Licensed.",
      image: "https://opengraph.githubassets.com/1/kermitsgonnakermicide/accelPlot",
      link: "https://github.com/kermitsgonnakermicide/accelPlot"
    }
  ];
</script>

<Header />

<main>
  <Hero bio={bio} />
  <ProjectSection title="Highlights" sectionKey="highlights" projects={highlightProjects} />
  <ProjectSection title="Competitive Robotics" sectionKey="competitive" projects={competitiveProjects} />
  <ProjectSection title="Hardware" sectionKey="hardware" projects={hardwareProjects} />
  <ProjectSection title="Software" sectionKey="software" projects={softwareProjects} />
</main>

<Footer />

<style>
  main {
    width: 100%;
  }
</style>
