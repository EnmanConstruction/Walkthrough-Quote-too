import { useState } from 'react';

const defaultRoom = {
  type: '',
  length: '',
  width: '',
  electrical: {
    outlets: '',
    switches: '',
    switchType: [],
    smokeDetector: false,
    gfcis: '',
    lightFixtures: ''
  },
  doors: {
    type: '',
    hinges: false,
    doorStops: false,
    knobType: '',
    knobColor: ''
  },
  plumbing: {
    tub: false,
    tubDirection: '',
    tubSize: '',
    showerRod: false,
    toilet: false,
    sink: false,
    plumbingNotes: ''
  },
  cabinets: {
    roomLocation: '',
    lowers: '',
    uppers: '',
    gableEnds: '',
    plumbingLocation: '',
    electricalLocation: '',
    countertopType: ''
  },
  notes: '',
  photo: null
};

export default function Step2() {
  const [rooms, setRooms] = useState([defaultRoom]);

  const addRoom = () => {
    setRooms([...rooms, defaultRoom]);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📍 Step 2: Room-by-Room Data</h1>
      {rooms.map((room, index) => (
        <div key={index} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Room {index + 1}</h2>
          <div>
            <label>Room Type: </label>
            <select>
              <option>Bathroom</option>
              <option>Kitchen</option>
              <option>Bedroom</option>
              <option>Common Area</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      ))}
      <button
        onClick={addRoom}
        style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: 'white', borderRadius: '4px' }}
      >
        + Add Another Room
      </button>
    </div>
  );
}
