import React from 'react';
import { Clock } from 'lucide-react';
import logo from '../../assets/images/logo.png'; // Assurez-vous que le logo est dans ce chemin

const Header = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-white shadow py-2 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-12 w-auto" // Ajustez la taille selon vos besoins
          />
          <div className="text-2xl font-bold">Système d&apos;Attendance</div>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <Clock className="w-6 h-6" />
          <span>{time.toLocaleDateString()} - {time.toLocaleTimeString()}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;