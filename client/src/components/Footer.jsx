// YELLOW AND LIGHTBLUE
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-snow relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* 1: Life @ NIT Srinagar */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-1.5 h-8 bg-yellow rounded-full"></span>
            <h3 className="text-xl font-bold text-lightblue tracking-wide">Life @ NIT Srinagar</h3>
          </div>
          <p className="text-sm text-snow/90 leading-relaxed border-l-2 border-lightblue/30 pl-4 max-w-sm">
            Discover the vibrant spirit of NIT Srinagar — where academic excellence meets rich culture and community. From campus events to student resources, Life @ NIT Srinagar is your guide to thriving both inside and outside the classroom.
          </p>
        </div>

        {/* 2: Connect with Us */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-lightblue flex items-center gap-4">
            <span className="w-1.5 h-8 bg-yellow rounded-full"></span>Connect with Us
          </h3>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              {[ 
                { icon: FaFacebook, href: 'https://www.facebook.com/nitsriofficial', label: 'Facebook' },
                { icon: FaTwitter, href: 'https://x.com/nitsriofficial', label: 'Twitter' },
                { icon: FaInstagram, href: 'https://www.instagram.com/nitsriofficial', label: 'Instagram' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/school/nitsriofficial/?originalSubdomain=in', label: 'LinkedIn' }
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                  aria-label={`Visit us on ${label}`}
                >
                  <div className="w-12 h-12 rounded-full bg-lightblue/10 flex items-center justify-center hover:bg-teal/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-yellow/10">
                    <Icon className="text-yellow text-xl" />
                  </div>
                  <span className="text-xs text-snow/70 group-hover:text-snow transition-colors">{label}</span>
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-lightblue/10">
              <a 
                href="https://nitsri.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-snow/80 hover:text-snow transition-colors"
              >
                <FaGlobe className="text-yellow" />
                <span>Visit Official Website</span>
              </a>
            </div>
          </div>
        </div>

                {/* 3: Contact Us */}
                <div className="space-y-6">
          <h3 className="text-xl font-semibold text-lightblue flex items-center gap-4">
            <span className="w-1.5 h-8 bg-yellow rounded-full"></span>Contact Us
          </h3>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 group">
              <FaMapMarkerAlt className="text-yellow text-lg group-hover:scale-110 transition-transform" />
              <span className="text-sm text-snow/90 group-hover:text-snow transition-colors">NIT Srinagar, Hazratbal, J&K - 190006</span>
            </li>
            <li className="flex items-center gap-4 group">
              <FaPhone className="text-yellow text-lg group-hover:scale-110 transition-transform" />
              <span className="text-sm text-snow/90 group-hover:text-snow transition-colors">0194-242-2032</span>
            </li>
            <li className="flex items-center gap-4 group">
              <FaEnvelope className="text-yellow text-lg group-hover:scale-110 transition-transform" />
              <span className="text-sm text-snow/90 group-hover:text-snow transition-colors">info@nitsri.ac.in</span>
            </li>
          </ul>
        </div>

      </div>

      

      {/* Bottom Legal Bar */}
      <div className="border-t border-lightblue/20 py-6 text-center">
        <p className="text-sm text-snow/80">
          &copy; {new Date().getFullYear()} Life @ NIT Srinagar. All rights reserved. Built by Gaash Web Team  
        </p>
      </div>
    </footer>
  );
};

export default Footer;


// // LIGHTBLUE AND TEAL
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaGlobe,
// } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-snow relative overflow-hidden">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative">
//         {/* 1: Life @ NIT Srinagar */}
//         <div className="space-y-6">
//           <div className="flex items-center gap-4 mb-4">
//             <span className="w-1.5 h-8 bg-lightblue rounded-full"></span>
//             <h3 className="text-xl font-bold text-teal tracking-wide">Life @ NIT Srinagar</h3>
//           </div>
//           <p className="text-sm text-snow/90 leading-relaxed border-l-2 border-teal/30 pl-4 max-w-sm">
//             Discover the vibrant spirit of NIT Srinagar — where academic excellence meets rich culture and community. From campus events to student resources, Life @ NIT Srinagar is your guide to thriving both inside and outside the classroom.
//           </p>
//         </div>

//         {/* 2: Connect with Us */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-semibold text-teal flex items-center gap-4">
//             <span className="w-1.5 h-8 bg-lightblue rounded-full"></span>Connect with Us
//           </h3>
//           <div className="space-y-6">
//             <div className="flex flex-wrap gap-4">
//               {[ 
//                 { icon: FaFacebook, href: 'https://www.facebook.com/nitsriofficial', label: 'Facebook' },
//                 { icon: FaTwitter, href: 'https://x.com/nitsriofficial', label: 'Twitter' },
//                 { icon: FaInstagram, href: 'https://www.instagram.com/nitsriofficial', label: 'Instagram' },
//                 { icon: FaLinkedin, href: 'https://www.linkedin.com/school/nitsriofficial/?originalSubdomain=in', label: 'LinkedIn' }
//               ].map(({ icon: Icon, href, label }, i) => (
//                 <a
//                   key={i}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex flex-col items-center gap-2 group"
//                   aria-label={`Visit us on ${label}`}
//                 >
//                   <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center hover:bg-lightblue/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-lightblue/10">
//                     <Icon className="text-lightblue text-xl" />
//                   </div>
//                   <span className="text-xs text-snow/70 group-hover:text-snow transition-colors">{label}</span>
//                 </a>
//               ))}
//             </div>
//             <div className="pt-4 border-t border-teal/10">
//               <a 
//                 href="https://nitsri.ac.in" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 text-sm text-snow/80 hover:text-snow transition-colors"
//               >
//                 <FaGlobe className="text-lightblue" />
//                 <span>Visit Official Website</span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* 3: Contact Us */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-semibold text-teal flex items-center gap-4">
//             <span className="w-1.5 h-8 bg-lightblue rounded-full"></span>Contact Us
//           </h3>
//           <ul className="space-y-5">
//             <li className="flex items-center gap-4 group">
//               <FaMapMarkerAlt className="text-lightblue text-lg group-hover:scale-110 transition-transform" />
//               <span className="text-sm text-snow/90 group-hover:text-snow transition-colors">NIT Srinagar, Hazratbal, J&K - 190006</span>
//             </li>
//             <li className="flex items-center gap-4 group">
//               <FaPhone className="text-lightblue text-lg group-hover:scale-110 transition-transform" />
//               <span className="text-sm text-snow/90 group-hover:text-snow transition-colors">0194-242-2032</span>
//             </li>
//             <li className="flex items-center gap-4 group">
//               <FaEnvelope className="text-lightblue text-lg group-hover:scale-110 transition-transform" />
//               <span className="text-sm text-snow/90 group-hover:text-snow transition-colors">info@nitsri.ac.in</span>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* Bottom Legal Bar */}
//       <div className="border-t border-teal/20 py-6 text-center">
//         <p className="text-sm text-snow/80">
//           &copy; {new Date().getFullYear()} Life @ NIT Srinagar. All rights reserved. Built by Gaash Web Team  
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;