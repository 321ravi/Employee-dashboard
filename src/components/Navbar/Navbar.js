
import Layer from '../images/Layer 1.png';
import koders from '../images/logo.png'
import './Navbar.css';

function Home() {
  
 
// formatting for Date,Time
  const formatDate = (date) => {
             const options = { year: 'numeric',
                               month: 'long', 
                               day: 'numeric', 
                               hour: '2-digit', 
                               minute: '2-digit'
                            
                            };

    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="home">
       <h1><img src={koders} alt='koders' className='koders'/>ODERS</h1>
        <div className='first'>
        
         <img src={Layer} alt="Logo" className="logo" />
         <h2>Employees Activity Dashboard</h2>
        </div>
        <div className='second'>
        <p>{formatDate(new Date())}</p>
        </div>
      
    </div>
  );
}

export default Home;