import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040404] text-white flex flex-col relative">
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-800 relative z-10">
        <div className="flex items-center gap-2">
          <Image src="https://ext.same-assets.com/1398508920/2678601516.svg" alt="Dahling Dreams Logo" width={40} height={40} className="h-10" />
          <span className="font-bold text-xl">Dahling Dreams</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/faq" className="text-gray-300 hover:text-[#6799c6]">FAQ</Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-[#6799c6]">Dashboard</Link>
          <Link href="/library" className="text-gray-300 hover:text-[#6799c6]">Library</Link>
          <Link href="/subscription" className="text-gray-300 hover:text-[#6799c6]">Plans</Link>
          <Link href="/login" className="text-gray-300 hover:text-[#6799c6]">Sign In</Link>
          <Link href="/signup" className="bg-transparent border-2 border-[#6799c6] text-[#6799c6] hover:bg-[#6799c6] hover:text-white font-bold py-2 px-6 rounded-lg transition-all text-sm">Get Started</Link>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center text-center max-w-3xl">
          <div className="shimmer w-full h-full absolute top-0 left-0 pointer-events-none"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className="heading-gradient">Where Stories</span></h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8"><span className="heading-gradient">Meet Imagination</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mb-12">Opening the world of imagination to children across different cultures and languages.</p>

          <div className="flex flex-col md:flex-row items-center gap-8 my-12">
            <div className="w-full md:w-1/2">
              <Image src="https://ext.same-assets.com/239165245/3668259102.webp" alt="Purple and blue flowers" width={300} height={300} className="w-full max-w-xs mx-auto md:max-w-full shape-animation" style={{ maxHeight: '300px', objectFit: 'contain' }} />
            </div>
            <div className="w-full md:w-1/2 bg-black/30 backdrop-blur-md p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6">Coming Soon!</h3>
              <p className="text-lg text-gray-300 mb-8">DAHLING DREAMS is currently under maintenance. We're building a storybook app that transcends language barriers, connecting children worldwide through captivating stories in multiple languages.</p>
              <p className="text-md text-gray-400 mb-8">Be the first to know when we launch. Sign up to receive updates and early access.</p>
              <form className="flex flex-col gap-4">
                <div>
                  <input type="email" placeholder="Your email address" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6799c6]" />
                </div>
                <button type="submit" className="bg-[#6799c6] text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">Notify Me</button>
              </form>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="heading-gradient">Nurture Imagination</span></h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="heading-gradient">Let Stories Blossom</span></h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-gray-800 hover:border-[#6799c6] transition-colors">
              <h4 className="text-lg font-semibold mb-3">Multilingual Stories</h4>
              <p className="text-gray-400">Stories come alive in multiple languages including English, Spanish, French, Mandarin, Arabic, and more through full internationalization support.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-gray-800 hover:border-[#6799c6] transition-colors">
              <h4 className="text-lg font-semibold mb-3">Interactive Adventures</h4>
              <p className="text-gray-400">Immersive storybook experiences with animated characters, interactive elements, and engaging narratives that respond to touch and sound for deeper engagement.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-gray-800 hover:border-[#6799c6] transition-colors">
              <h4 className="text-lg font-semibold mb-3">Cultural Connection</h4>
              <p className="text-gray-400">Children connect with diverse cultures through authentic stories rich with heritage, customs, and shared human experiences.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 px-6 border-t border-gray-800 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dahling Dreams</h3>
              <p className="text-gray-400">Bringing multilingual storybooks to children around the world, creating connections through the power of storytelling.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="mailto:contact@dahlingdreams.com" className="hover:text-[#6799c6]">contact@dahlingdreams.com</a></li>
                <li>South Florida</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/privacy" className="hover:text-[#6799c6]">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#6799c6]">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-[#6799c6]">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Site Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/" className="hover:text-[#6799c6]">Home</Link></li>
                <li><Link href="/faq" className="hover:text-[#6799c6]">FAQ</Link></li>
                <li><a href="mailto:contact@dahlingdreams.com" className="text-gray-400 hover:text-[#6799c6]">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 Dahling Dreams. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
