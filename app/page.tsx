'use client';
import Lanyard from "./components/Lanyard/Lanyard";
import CircularText from "./components/CircularText/CircularText";
import Iridescence from "./components/Iridescence/Iridescence";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import React, { useState, useEffect } from 'react';
import SplitText from "./components/SplitText/SplitText";
import RotatingText from "./components/RotatingText/RotatingText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import RollingGallery from "./components/RollingGallery/RollingGallery";
import Masonry from "./components/Masonry/Masonry";
import Carousel from "./components/Carousel/Carousel";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";



const cards = [
  {
    href: "https://instagram.com/cheerstorara",
    Icon: FaInstagram,
    title: "Instagram",
    subtitle: "@cheerstorara",
  },
  {
    href: "https://twitter.com/cheerstoara",
    Icon: FaTwitter,
    title: "Twitter",
    subtitle: "@cheerstoara",
  },
  {
    href: "https://www.linkedin.com/in/zalira-kepindo-107177287/",
    Icon: FaLinkedin,
    title: "LinkedIn",
    subtitle: "Zalira Kepindo",
  },
  {
    href: "https://wa.me/+628895892173",
    Icon: FaWhatsapp,
    title: "WhatsApp",
    subtitle: "+628895892173",
  },
];

const SectionTitle = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={`text-3xl font-sans font-bold mb-4 ${className}`}>{children}</h2>
);

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
    {skill}
  </span>
);

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const data = [
  { id: 1, image: 'assets/sertifikat/5.jpg'},
  { id: 2, image: 'assets/sertifikat/6.jpg'},
  { id: 3, image: 'assets/sertifikat/9.jpg'},
  { id: 4, image: 'assets/sertifikat/22.jpg'},
];

const carouselItems = [
  {
    imgSrc: '/images/project1.jpg',
    link: 'https://contoh-proyek-1.com',
    alt: 'Proyek 1'
  },
  {
    imgSrc: '/images/project2.jpg',
    link: 'https://contoh-proyek-2.com',
    alt: 'Proyek 2'
  },
];

const skills = [
  {
    title: "Front-End Developer",
    items: ["HTML",
     "CSS",
    "JavaScript",
    "Framework",
    "Version Control",
    ],
  },
  {
    title: "UI/UX Designer",
    items: [
      "Design Tools",
      "User Research",
      "Prototyping",
      "Wireframing",
      "Responsive Design",
    ],
  },
  {
    title: "Data Analyst",
    items: [
      "Promramming Languages",
      "Data Visualization",
      "Analysis",
      "Data Manipulation",
      "Statistics",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Creative thinking",
      "Problem solving",
      "Attention to detail",
      "Team collaboration",
      "User-centered mindset",
    ],
  },
];


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll state untuk navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
  
    window.addEventListener('scroll', handleScroll);
  
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    
    <div className="scroll-smooth relative ">
       {/* Iridescence Background */}
       <div className="fixed inset-0 -z-10">
        <Iridescence color={[1, 1, 1]} mouseReact={false} amplitude={0.1} speed={1.0} />
      </div>

      <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white py-4 rounded-full transition-all duration-1000 ${isScrolled ? 'px-40' : 'px-80'}`}>
{/* Left Email Icon */}
<a
  href="mailto:kepindozalira24@email.com"
  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-600 transition duration-300 hover:scale-110"
  aria-label="Email"
>
  <FaEnvelope size={18} />
</a>

{/* Right GitHub Icon */}
<a
  href="https://github.com/cheerstorara"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-600 transition duration-300 hover:scale-110"
  aria-label="GitHub"
>
  <FaGithub size={20} />
</a>


  {/* Navigation List */}
  <ul className="flex gap-8 text-gray-800 font-semibold text-sm">
    {[
      { href: "#beranda", label: "Beranda" },
      { href: "#skill", label: "Skill" },
      { href: "#pencapaian", label: "Pencapaian" },
      { href: "#proyek", label: "Proyek" },
      { href: "#kontak", label: "Kontak" },
    ].map(({ href, label }) => (
      <li key={href}>
        <a
          href={href}
          className="relative group transition duration-300 ease-in-out"
        >
          <span className="group-hover:text-pink-500 transition duration-300">
            {label}
          </span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    ))}
  </ul>
</nav>


     

      {/* Beranda */}
      <section id="beranda" className="relative -mt-10 px-6 py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-black">
              <SplitText
                text="Hello!"
                className="inline-block"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing={(t) => 1 - Math.pow(1 - t, 3)}
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <br />
              I'm Zalira Kepindo
            </h1>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl md:text-2xl font-sans font-bold text-black mb-2">I'm Ready for</h2>
                <RotatingText
                  texts={[
                    'Front-End Developer',
                    'UI/UX Designer',
                    'Data Analyst'
                  ]}
                  mainClassName="px-4 py-1 bg-[#F28DD0] text-black text-base md:text-lg rounded-2xl font-bold inline-flex"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </div>
            <p className="text-lg font-sans text-black">
            Saya adalah mahasiswa Program Studi Sistem Informasi yang memiliki ketertarikan kuat di bidang teknologi dan desain digital. Berpengalaman dalam mengembangkan antarmuka web menggunakan Next.js dan Tailwind CSS, serta aktif mengeksplorasi desain UI/UX. Saya juga memiliki dasar analisis data menggunakan Excel, SQL, dan Python, serta mampu memvisualisasikan data.
            </p>
            <div className="w-full overflow-hidden my-2">
              <ScrollVelocity
                texts={['Kolaborasi Disiplin Solusi', 'Fleksibilitas Kreativitas Akurasi']}
                velocity={50}
                className="text-black/70 text-[50%] font-semibold whitespace-nowrap leading-tight"
              />
            </div>
            <a
              href="https://drive.google.com/file/d/1CTdBMzZs0kjeMWiZUV9HghF-tRo56H0G/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-1 rounded-3xl text-black font-sans font-bold text-white"
              style={{ backgroundColor: '#000000' }}
            >
              My Resume
            </a>
          </div>
          <div className="flex justify-center md:justify-end relative min-h-[300px]">
            <Lanyard position={[0, 0, 12]} gravity={[0, -45, 0]} />
            <div className="absolute top-[36%] right-20 transform -translate-y-[50%] translate-x-1 z-10 font-sans">
              <div className="relative w-[130px] h-[130px]">
                <CircularText
                  text="LET'S*TALK*WITH*ME*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="w-full h-full custom-class"
                />
                <a
                  href="#kontak"
                  className="absolute inset-[23px] rounded-full bg-black flex items-center justify-center text-white text-sm font-semibold hover:bg-gray-900 transition"
                >
                  →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

 

      {/* Skill */}
<section id="skill" className="px-6 py-24 mt-10">
  <div className="w-full max-w-4xl mx-auto bg-white/70 rounded-2xl p-6">
    <SectionTitle className="text-black text-center">Skill</SectionTitle>

    <div className="h-[180px] w-full">
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>

    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-gray-50 text-black font-sans rounded-xl p-6 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <h3 className="text-base font-bold mb-3 text-black">
              {skill.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-pink-400 px-2 py-1 rounded-md text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
    </section>



{/* Pencapaian */}
<section id="pencapaian" className="px-6 py-40">
  <div className="w-full max-w-6xl mx-auto bg-white/70 rounded-2xl p-6">
    <SectionTitle className="text-black font-sans text-center">Pencapaian</SectionTitle>

    <motion.p
      className="text-center font-sans text-black max-w-3xl mx-auto mt-4 mb-10 text-base"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      Saya telah secara aktif mengikuti berbagai short class dan seminar yang relevan dengan bidang keilmuan dan kompetensi saya, khususnya di ranah Sistem Informasi dan pengembangan teknologi digital. Melalui kegiatan ini, saya berhasil memperoleh sertifikat kompetensi dari beberapa lembaga dan institusi terpercaya.
    </motion.p>

    <div style={{ minHeight: '200px', position: 'relative' }}>
      <Masonry data={data} enableClick={false} />
    </div>

    <div className="text-center mt-8">
      <Link href="/pencapaian">
        <span className="inline-block px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition">
          Lihat Semua Pencapaian
        </span>
      </Link>
    </div>
  </div>
</section>


      {/* Proyek Saya */}
      <section id="proyek" className="px-6 py-40">
  <div className="w-full max-w-6xl mx-auto bg-white/70 rounded-2xl p-4">
    <div className="max-w-6xl mx-auto">
      <SectionTitle className="text-black text-center">Proyek Saya</SectionTitle>
      <motion.div
        style={{ height: '450px', position: 'relative' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Carousel />
      </motion.div>
    </div>
  </div>
</section>


{/* Kontak */}
<section id="kontak" className="min-h-screen flex items-center justify-center px-6 py-16 text-black font-sans">
  <div className="max-w-6xl w-full mx-auto space-y-12">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center"
    >
      <motion.h2
        className="text-4xl font-bold font-sans mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Hubungi Saya
      </motion.h2>
    </motion.div>

    {/* Konten Utama: Form + Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      {/* Form Kontak */}
      <form
        action="https://formspree.io/f/mldnenzg"
        method="POST"
        className="space-y-6 bg-white p-8 rounded-xl shadow-lg text-black"
      >
        <div>
          <label htmlFor="name" className="block font-semibold mb-2">Nama Lengkap</label>
          <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded" />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold mb-2">Pesan</label>
          <textarea id="message" name="message" rows={5} required className="w-full p-3 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition">Kirim Pesan</button>
      </form>

      {/* Spotlight Cards Vertikal */}
      <div className="flex flex-col space-y-4">
        {/* Tambahan paragraf pindahan */}
        <motion.p
          className="text-lg font-sans text-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Saya terbuka untuk kolaborasi, proyek freelance, atau sekadar berbincang seputar desain dan teknologi. Hubungi saya melalui salah satu platform berikut atau kirimkan pesan langsung!
        </motion.p>

        {cards.map(({ href, Icon, title, subtitle }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <SpotlightCard
              className="rounded-xl p-[1px] transition hover:shadow-[0_0_50px_#ec4899]/90"
              spotlightColor="rgba(255, 105, 180, 0.6)"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white p-4 flex items-center gap-3"
              >
                <Icon className="w-6 h-6 text-pink-500 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-black font-sans font-semibold">{title}</h3>
                  <p className="text-sm font-sans text-black">{subtitle}</p>
                </div>
              </a>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>



{/* Footer */}
<footer className="bg-white border-t border-gray-200 py-8 px-6 mt-10">
  <div className="max-w-6xl mx-auto text-center space-y-4">
    <p className="text-gray-800 text-lg font-semibold font-sans italic">
      “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
    </p>
    
    <div className="flex justify-center space-x-6 text-gray-600">
  <a
    href="https://instagram.com/cheerstorara"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 hover:scale-110 transition transform"
  >
    <FaInstagram size={20} />
  </a>
  <a
    href="https://twitter.com/cheerstoara"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 hover:scale-110 transition transform"
  >
    <FaTwitter size={20} />
  </a>
  <a
    href="https://www.linkedin.com/in/zalira-kepindo-107177287/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 hover:scale-110 transition transform"
  >
    <FaLinkedin size={20} />
  </a>
  <a
    href="https://wa.me/+628895892173"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 hover:scale-110 transition transform"
  >
    <FaWhatsapp size={20} />
  </a>
</div>
    <p className="text-sm text-gray-500 font-sans">
      &copy; {new Date().getFullYear()} Zalira Kepindo.
    </p>
  </div>
</footer>


    </div>
  );
}
