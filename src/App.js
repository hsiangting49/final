import {useState, useEffect} from 'react';
import {supabase} from './supabaseClient';
import IMG_8822 from './IMG_8822.JPG';
import './App.css';


function Projectdata() {
  const [myProjects, setMyProjects] = useState([]);
  useEffect(() =>{
    async function getprojects(){
      let { data: projects, error } = await supabase
        .from('projects')
        .select('*')
      setMyProjects(projects);
    }

    getprojects();
  }, []);
  
  const handleButtonClick = (url) => {
    window.location.href = url;
  };
  
  return(
    <>
      <div className='m-12'><h1 className='font-serif text-center text-5xl '>My project</h1></div>
      <div className='h-80 flex justify-center'>
        
        {myProjects.map(p =>(
            <div key={p.id} className='w-80 rounded-xl shadow-lg  m-8 flex flex-col justify-between hover:scale-110 hover:border-4 hover:border-slate-200'>
              <div > 
                  <div className='text-center text-2xl font-medium m-4'>{p.projectname}</div>
                  <div className='m-4 '>{p.body}</div>
              </div>
              <div className="flex justify-center ">
                <button className='text-sm w-24 h-10 bg-white rounded-lg shadow-md m-4' onClick={() => handleButtonClick(p.url)}>Learn more</button>
              </div>
            </div>
        ))
        }
      </div>         
    </>
  );
}

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data:contacts, error } = await supabase
        .from('contacts')
        .insert([formData]);
  
      if (error) {
        console.error('Error inserting into database:', error.message);
        // Handle error
      } else {
        alert("Form submitted successfully")
        // Handle success
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

      

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='content-center mb-16'>
        <h1 className='font-serif text-5xl font-medium text-center'>Let's Connect!</h1>
      </div>
      <div className="m-16 md:col-span-1">
        <form className='bg-white/80 backdrop-blur-md shadow-md rounded-lg p-4 md:p-6 my-4 md:my-0' onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input className='bg-white/80 w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <input className='bg-white/80 w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="md:col-span-2">
              <textarea className='bg-white/80 w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className='bg-blue-950 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
  
};



function App() {
  return (
    <div className="">
      <nav className='fixed w-full drop-shadow-sm  flex bg-white/80 backdrop-blur-md h-20 justify-end items-center '>
        <ul className="flex w-500 mx-auto">
          <li className="mx-12"><a href="#about">About Me</a></li>
          <li className="mx-12"><a href="#projects">My projects</a></li>
          <li className="mx-12"><a href="#contact">Let's Connect!</a></li>
        </ul>
      </nav>

      <section id="about" className='h-svh grid grid-cols-3'>
        <div className='col-span-2 bg-orange-100 place-content-center'>
          <div className=' w-4/7 tracking-widest px-12'>
            <h1 className='font-serif font-bold text-5xl m-12 mb-20 text-left'>Hi, I'm Hsiang-Ting, Lin!</h1>
            <p className=" font-serif font-light text-xl m-12 text-left">I’m a master's student at Michigan State University and pursuing my career as a UI/UX designer.
Love to explore newfangled ideas and embrace opinions from diverse perspectives. I coordinate with the company to realize its fabulous mission by crafting greater products through experience design.</p>
          </div>
        </div>
        <div className='bg-sky-950 text-stone-200 text-5xl content-center mt-20' >
          <img src={IMG_8822} alt="Description"  width="600" height="400"/>
        </div>
      </section>

      <section id="projects" className='p-8 bg-white'>
        <Projectdata/>
      </section>
      
      <section id="contact" className="bg-orange-100">        
        <ContactForm/>
      </section>

      <footer>
        <div >by Alicia</div>
      </footer>
     
    </div>
  );
}

export default App;
