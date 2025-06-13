import Masonry from "../components/Masonry/Masonry";
import Iridescence from "../components/Iridescence/Iridescence";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const data = [
  { id: 1, image: '/assets/sertifikat/5.jpg' },
  { id: 2, image: '/assets/sertifikat/6.jpg' },
  { id: 3, image: '/assets/sertifikat/9.jpg' },
  { id: 4, image: '/assets/sertifikat/22.jpg' },
  { id: 5, image: '/assets/sertifikat/23.jpg' },
  { id: 6, image: '/assets/sertifikat/13.JPG' },
  { id: 7, image: '/assets/sertifikat/14.JPG' },
  { id: 8, image: '/assets/sertifikat/15.JPG' },
  { id: 9, image: '/assets/sertifikat/16.JPG' },
  { id: 10, image: '/assets/sertifikat/17.JPG' },
  { id: 11, image: '/assets/sertifikat/18.JPG' },
  { id: 12, image: '/assets/sertifikat/10.JPG' },
  { id: 13, image: '/assets/sertifikat/11.JPG' },
  { id: 14, image: '/assets/sertifikat/20.PNG' },
  { id: 15, image: '/assets/sertifikat/2.JPG' },
  { id: 16, image: '/assets/sertifikat/1.JPG' },
  { id: 17, image: '/assets/sertifikat/3.JPG' },
  { id: 18, image: '/assets/sertifikat/4.JPG' },
  { id: 19, image: '/assets/sertifikat/7.JPG' },
  { id: 20, image: '/assets/sertifikat/8.JPG' },
  { id: 21, image: '/assets/sertifikat/12.JPG' },
  { id: 22, image: '/assets/sertifikat/19.JPG' },
  { id: 23, image: '/assets/sertifikat/21.JPG' },
  { id: 24, image: '/assets/sertifikat/24.PNG' },
];

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

export default function AllPencapaianPage() {
  return (
<div className="scroll-smooth relative">
  {/* Iridescence Background */}
  <div className="fixed inset-0 -z-10">
    <Iridescence color={[1, 1, 1]} mouseReact={false} amplitude={0.1} speed={1.0} />
  </div>
  
    <div className="scroll-smooth relative">
  

      {/* Semua Pencapaian */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl bg-white/70 rounded-2xl p-6">
          <h2 className="text-black text-center text-2xl font-bold mb-8">Semua Pencapaian</h2>
          <div style={{ minHeight: '600px', position: 'relative' }}>
            <Masonry data={data} />
          </div>
          {/* Tombol kembali */}
          <div className="max-w-6xl text-center mx-auto px-6 pt-8">
        <a
          href="/#pencapaian"
          className="inline-block px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition"
        >
          Kembali ke Halaman Pencapaian
        </a>
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
    </div>
  );
}
