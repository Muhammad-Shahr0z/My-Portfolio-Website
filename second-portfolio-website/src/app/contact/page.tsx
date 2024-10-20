import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className=" text-white text-center">
      <div>
        <h2 className="text-4xl font-semibold mb-8 text-[#0a6335]">Contact Me</h2>
        
        <div className="space-y-6">
          <p>
            <span className="font-bold">Phone:</span> 
            <a href="tel:03003666930" className="hover:underline"> 03003666930</a>
          </p>

          <p>
            <span className="font-bold">Email:</span> 
            <a href="mailto:SHAHROXYT@GMAIL.COM" className="hover:underline"> Shahroxyt@gmail.com</a>
          </p>

          <p>
            <span className="font-bold">Location:</span>  
             Karachi, Pakistan
          </p>

          <div className="flex justify-center space-x-6 mt-8 bg-[#0A6335] w-fit mx-auto py-2 px-4 rounded-lg">
            {/* Facebook Link */}
            <Link href="https://www.facebook.com/muhammad.shahroz.58" target="_blank">
              <FaFacebookF className="text-2xl hover:text-blue-500" />
            </Link>

            {/* LinkedIn Link */}
            <Link href="https://www.linkedin.com/in/muhammad-shahroz-a35b68292/" target="_blank">
              <FaLinkedinIn className="text-2xl hover:text-blue-700" />
            </Link>

            {/* GitHub Link */}
            <Link href="https://github.com/Muhammad-Shahr0z" target="_blank">
              <FaGithub className="text-2xl hover:text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
