import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Global Climate Summit Addresses Urgent Climate Action",
    paragraph:
      "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Jane Smith",
      image: "/images/blog/author-03.png",
      designation: "Environment",
    },
    tags: ["Environment"],
    publishDate: "October 10, 2023",
  },
  {
    id: 2,
    title: "A Decisive Victory for Progressive Policies",
    paragraph:
      "Historic election results show overwhelming support for progressive policies and climate action initiatives across major cities.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "John Doe",
      image: "/images/blog/author-02.png",
      designation: "Political Analyst",
    },
    tags: ["Politics"],
    publishDate: "September 15, 2023",
  },
  {
    id: 3,
    title: "Tech Giants Unveil Cutting-Edge AI Innovations",
    paragraph:
      "Leading technology companies showcase revolutionary artificial intelligence breakthroughs that promise to transform industries.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Sarah Johnson",
      image: "/images/blog/author-03.png",
      designation: "Tech Reporter",
    },
    tags: ["Technology"],
    publishDate: "November 5, 2023",
  },
  {
    id: 4,
    title: "COVID-19 Variants: What You Need to Know",
    paragraph:
      "Health experts provide comprehensive analysis of emerging COVID-19 variants and their impact on public health strategies.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Dr. Michael Chen",
      image: "/images/blog/author-02.png",
      designation: "Medical Director",
    },
    tags: ["Health"],
    publishDate: "August 22, 2023",
  },
  {
    id: 5,
    title: "Mars Exploration: Unveiling Alien Landscapes",
    paragraph:
      "Latest Mars rover discoveries reveal fascinating geological formations and potential signs of ancient water systems.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Emily Rodriguez",
      image: "/images/blog/author-03.png",
      designation: "Space Scientist",
    },
    tags: ["Space"],
    publishDate: "July 18, 2023",
  },
  {
    id: 6,
    title: "Revolutionary Investment Strategies for 2024",
    paragraph:
      "Financial experts share innovative approaches to portfolio management in an evolving economic landscape.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "David Williams",
      image: "/images/blog/author-02.png",
      designation: "Financial Advisor",
    },
    tags: ["Finance"],
    publishDate: "December 1, 2023",
  },
  {
    id: 7,
    title: "Redefining Silence: Mental Health Awareness",
    paragraph:
      "Breaking down stigmas and promoting open conversations about mental health in the workplace and society.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Lisa Anderson",
      image: "/images/blog/author-03.png",
      designation: "Psychologist",
    },
    tags: ["Health"],
    publishDate: "June 12, 2023",
  },
  {
    id: 8,
    title: "Quantum Computing: The Future is Here",
    paragraph:
      "Exploring the revolutionary potential of quantum computers and their applications in solving complex problems.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Robert Taylor",
      image: "/images/blog/author-02.png",
      designation: "Quantum Physicist",
    },
    tags: ["Technology"],
    publishDate: "May 8, 2023",
  },
  {
    id: 9,
    title: "Sustainable Fashion: Eco-Friendly Trends",
    paragraph:
      "Fashion industry leaders embrace sustainability with innovative materials and ethical production practices.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Maria Garcia",
      image: "/images/blog/author-03.png",
      designation: "Fashion Designer",
    },
    tags: ["Lifestyle"],
    publishDate: "April 25, 2023",
  },
  {
    id: 10,
    title: "Blockchain Revolution in Financial Services",
    paragraph:
      "Decentralized finance transforms traditional banking with transparent and secure blockchain technology.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "James Wilson",
      image: "/images/blog/author-02.png",
      designation: "Blockchain Expert",
    },
    tags: ["Finance"],
    publishDate: "March 17, 2023",
  },
  {
    id: 11,
    title: "Artificial Intelligence in Healthcare",
    paragraph:
      "AI-powered diagnostic tools revolutionize medical care with unprecedented accuracy and efficiency.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Dr. Amanda Lee",
      image: "/images/blog/author-03.png",
      designation: "Medical AI Specialist",
    },
    tags: ["Health"],
    publishDate: "February 10, 2023",
  },
  {
    id: 12,
    title: "Electric Vehicles: Driving Towards Sustainability",
    paragraph:
      "Automotive industry accelerates transition to electric vehicles with innovative battery technology and infrastructure.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Thomas Brown",
      image: "/images/blog/author-02.png",
      designation: "Auto Industry Analyst",
    },
    tags: ["Technology"],
    publishDate: "January 20, 2023",
  },
  {
    id: 13,
    title: "Remote Work: The New Normal",
    paragraph:
      "Companies embrace hybrid work models as remote collaboration tools reshape professional landscapes.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Jennifer Martinez",
      image: "/images/blog/author-03.png",
      designation: "HR Consultant",
    },
    tags: ["Business"],
    publishDate: "December 15, 2022",
  },
  {
    id: 14,
    title: "Space Tourism: Beyond Earth&apos;s Boundaries",
    paragraph:
      "Commercial space travel becomes reality as private companies launch civilian missions to orbit.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Christopher Davis",
      image: "/images/blog/author-02.png",
      designation: "Space Industry Reporter",
    },
    tags: ["Space"],
    publishDate: "November 28, 2022",
  },
  {
    id: 15,
    title: "Cybersecurity in the Digital Age",
    paragraph:
      "Protecting digital assets becomes paramount as cyber threats evolve in sophistication and scale.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Patricia Miller",
      image: "/images/blog/author-03.png",
      designation: "Security Expert",
    },
    tags: ["Technology"],
    publishDate: "October 5, 2022",
  },
  {
    id: 16,
    title: "Renewable Energy: Powering the Future",
    paragraph:
      "Solar and wind energy innovations drive global transition towards sustainable power generation.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Richard Wilson",
      image: "/images/blog/author-02.png",
      designation: "Energy Analyst",
    },
    tags: ["Environment"],
    publishDate: "September 12, 2022",
  },
  {
    id: 17,
    title: "Gene Editing: Medical Breakthrough",
    paragraph:
      "CRISPR technology opens new frontiers in treating genetic diseases and advancing personalized medicine.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Dr. Susan Thompson",
      image: "/images/blog/author-03.png",
      designation: "Geneticist",
    },
    tags: ["Health"],
    publishDate: "August 8, 2022",
  },
  {
    id: 18,
    title: "Metaverse: Digital Reality Unfolds",
    paragraph:
      "Virtual worlds merge with reality as metaverse platforms transform social interaction and commerce.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Kevin Anderson",
      image: "/images/blog/author-02.png",
      designation: "VR Developer",
    },
    tags: ["Technology"],
    publishDate: "July 22, 2022",
  },
  {
    id: 19,
    title: "Sustainable Agriculture: Feeding the Planet",
    paragraph:
      "Innovative farming techniques and technology ensure food security while minimizing environmental impact.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Margaret Clark",
      image: "/images/blog/author-03.png",
      designation: "Agricultural Scientist",
    },
    tags: ["Environment"],
    publishDate: "June 18, 2022",
  },
  {
    id: 20,
    title: "5G Networks: Connecting the World",
    paragraph:
      "Next-generation wireless technology enables unprecedented connectivity and IoT applications worldwide.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Daniel Harris",
      image: "/images/blog/author-02.png",
      designation: "Telecom Engineer",
    },
    tags: ["Technology"],
    publishDate: "May 30, 2022",
  },
  {
    id: 21,
    title: "Ocean Conservation: Protecting Marine Life",
    paragraph:
      "Global initiatives combat ocean pollution and protect endangered marine ecosystems for future generations.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Laura Martinez",
      image: "/images/blog/author-03.png",
      designation: "Marine Biologist",
    },
    tags: ["Environment"],
    publishDate: "April 14, 2022",
  },
  {
    id: 22,
    title: "Autonomous Vehicles: Self-Driving Future",
    paragraph:
      "AI-powered vehicles promise safer roads and efficient transportation as autonomous technology advances.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Steven White",
      image: "/images/blog/author-02.png",
      designation: "Automotive Engineer",
    },
    tags: ["Technology"],
    publishDate: "March 5, 2022",
  },
];
export default blogData;
