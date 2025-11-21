import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 Abdikadir. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:abdikadermd143@gmail.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">abdikadermd143@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdikadir-mohd-tahir-abdirahman-31138424b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/abdikadirhadji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={18} />
              <span>Mogadishu, Somalia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

