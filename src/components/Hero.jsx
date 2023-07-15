import { logo } from "../assets";
import { FaGithub } from 'react-icons/fa';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
  type='button'
  onClick={() =>
    window.open("https://github.com/Puma1982", "_blank")
  }
  className='black_btn'
>
<FaGithub size={30} />
</button>

      </nav>

      <h1 className='head_text'>
      Enhancing Article Summaries with <br className='max-md:hidden' />
        <span className='orange_gradient '>ADVANCED AI GPT</span>
      </h1>
      <h2 className='desc'>
      Enhance your reading experience with Summize, an open-source article summarizer 
      designed to transform long articles into concise and easily understandable summaries.
       With Summize, you can save time and effortlessly grasp the main points and 
       key information of any lengthy article.
      </h2>
    </header>
  );
};

export default Hero;

