export type ProjectSize = "1x1" | "2x1" | "1x2" | "2x2"

export interface Project {
    id: string; // slug
    title: string;
    description: string;
    tags: string[];
    image: string; // path of image
    link: string; // page with more info
    size: ProjectSize;
}

export const PROJECTS: Project[] = [
    {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "1x2",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "1x1",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "2x2",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "2x1",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "2x1",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "1x2",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "1x2",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "1x1",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "2x2",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "1x1",
  },
  {
    id: "robot-arm",
    title: "6-DOF Robot Arm",
    description: "Inverse kinematics engine written in C++.",
    tags: ["Robotics", "C++", "ROS2"],
    image: "/images/arm.jpg",
    link: "/projects/robot-arm",
    size: "1x1",
  }
]