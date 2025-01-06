import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function CTF() {
  const [competitions, setCompetitions] = useState([
    { name: 'BambiCTF #11 (2024)', place: '52/53', CTFPoints: 3338 },
    { name: 'Hackers N\' Hops (2024)', place: '38/339',  CTFPoints: 570 },
    { name: 'SpookyCTF 2024', place: '85/831', CTFPoints: 3913 },
    { name: 'DEADFACE CTF 2024', place: '188/1213', CTFPoints: 1713 },
    { name: 'SpringForwardCTF 2024', place: '35/446', CTFPoints: 4119 },
    { name: 'JerseyCTF IV 2024', place: '40/520', CTFPoints: 7133 }
  ]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
      <button 
        onClick={toggleExpand} 
        className="w-full text-center p-4 text-primary text-3xl hover:bg-primary transition font-bold flex justify-center items-center"> 
        CTF Competition Stats 
        <span className="ml-2">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      
      {isExpanded && (
        
        <div className="space-y-4 mt-4">
          <div className="text-center mb-4 text-xl">
            <a 
              href="https://ctftime.org/team/287044" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary underline hover:text-primary-dark">
              My CTF Team
            </a>
          </div>
          {competitions.map((comp, index) => (
            <div key={index} className="p-4 bg-background rounded-lg shadow">
              <h3 className="text-xl font-semibold">{comp.name}</h3>
              <p className="text-muted-foreground">Place: <span className="text-primary">{comp.place}</span></p>
              <p className="text-muted-foreground">CTF Points: <span className="text-primary">{comp.CTFPoints}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
