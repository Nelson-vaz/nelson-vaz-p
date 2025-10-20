import { CgPerformance } from "react-icons/cg";
import { FaTools } from "react-icons/fa";
import { FaCodeBranch, FaMicrochip } from "react-icons/fa6";
import {
  SiCplusplus,
  SiGit,
  SiLinux,
  SiPython,
  SiPytorch,
  SiRaspberrypi,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const expertise = [
  {
    id: 1,
    title: "Embedded Firmware Development",
    icons: [SiCplusplus, SiPython, FaMicrochip],
    description:
      "I specialize in developing low-level firmware for microcontrollers using C++, and Python. My focus is on optimizing memory usage, interrupt handling, and real-time performance for reliable embedded systems.",
  },
  {
    id: 2,
    title: "IoT Systems & Hardware Integration",
    icons: [SiRaspberrypi, FaTools],
    description:
      "I design and integrate IoT solutions using platforms like Raspberry Pi and ESP-based boards. With MQTT protocols, I build secure and connected systems that bridge devices to the cloud.",
  },
  {
    id: 3,
    title: "Machine Learning",
    icons: [SiPython, SiTensorflow, SiPytorch],
    description:
      "I work on deploying lightweight ML models for predictive and intelligent decision-making on embedded devices using TensorFlow Lite and PyTorch.",
  },
  {
    id: 4,
    title: "System Performance & Optimization",
    icons: [CgPerformance, SiLinux],
    description:
      "I enhance system efficiency through optimized code, embedded debugging, and cross-compilation. Skilled in embedded Linux, Docker environments, and build optimization for resource-constrained systems.",
  },
  {
    id: 5,
    title: "Tools & Version Control",
    icons: [SiGit, TbBrandVscode, FaCodeBranch],
    description:
      "Proficient with Git for version control, VS Code and platform-specific IDEs for firmware development, and AWS for IoT deployment pipelines.",
  },
];

export default expertise;
