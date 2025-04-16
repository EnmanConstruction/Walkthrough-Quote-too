// File: /pages/walkthrough/step-2.js
import { useState } from 'react';

const defaultRoom = {
  label: '',
  type: 'Bathroom',
  length: '',
  width: '',
  photo: null,
  notes: '',
  electrical: {
    outlets: '',
    switches: '',
    switchType: '',
    smokeDetector: false,
    gfci: '',
    lightFixtures: '',
  },
  doors: {
    type: '',
    hinges: false,
    doorStops: false,
    knobType: '',
    knobColor: '',
  },
  plumbing: {
    tub: false,
    tubDirection: '',
    tubSize: '',
    showerRod: false,
    toilet: false,
    sink: false,
    shutOffs: false,
    absFittings: false,
    copperPipe: false,
    fittings: '',
    absPipe: '',
    pTrap: false,
    pTrapCleanout: false,
    plumbingNotes: '',
  },
  cabinets: {
    roomLocation: '',
    lowers: '',
    uppers: '',
    gableEnds: '',
    plumbingLocation: '',
    electricalLocation: '',
    countertopType: '',
  },
  drywall: {
    deleteIntercom: false,
    headerBiPass: false,
    buildoutBiPass: false,
    headerKitchen: false,
    ceilingType: '',
    insulationVB: false,
    moldResistant: false,
    patches: false,
    backing: false,
  },
  painting: {
    ceiling: false,
    walls: false,
    baseAndCase: false,
    cabinets: false,
    sealerRequired: false,
  },
  tile: {
    tubTile: false,
    backsplashTile: false,
    tileEdge: '',
    tileColor: '',
    tileEdgeColor: '',
    tileEdgeSize: '',
    grout: '',
    groutSealer: false,
    tileNotes: '',
  }
};

export default function Step2() {
  const [rooms, setRooms] = useState([JSON.parse(JSON.stringify(defaultRoom))]);
  const [totalSqFt, setTotalSqFt] = useState('');

  const addRoom = () => {
    setRooms([...rooms, JSON.parse(JSON.stringify(defaultRoom))]);
  };

  const removeRoom = (indexToRemove) => {
    const updated = rooms.filter((_, i) => i !== indexToRemove);
    setRooms(updated);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📍 Step 2: Room-by-Room Walkthrough</h1>

      <label><strong>Total Project Square Footage:</strong></label>
      <input
        type="number"
        placeholder="e.g., 1200"
        value={totalSqFt}
        onChange={(e) => setTotalSqFt(e.target.value)}
        style={{ marginBottom: '1rem', width: '100%' }}
      />

      {rooms.map((room, index) => (
        <div key={index} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>{room.label || `Room ${index + 1}`}</h2>

          <label>Room Label:</label>
          <input
            type="text"
            value={room.label}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].label = e.target.value;
              setRooms(updated);
            }}
          /><br />

          <label>Room Type:</label>
          <select
            value={room.type}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].type = e.target.value;
              setRooms(updated);
            }}
          >
            <option>Bathroom</option>
            <option>Kitchen</option>
            <option>Bedroom</option>
            <option>Living Room</option>
            <option>Common Area</option>
            <option>Other</option>
          </select><br />

          <label>Dimensions (L x W in ft):</label>
          <input
            type="text"
            placeholder="Length"
            value={room.length}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].length = e.target.value;
              setRooms(updated);
            }}
          />
          {' x '}
          <input
            type="text"
            placeholder="Width"
            value={room.width}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].width = e.target.value;
              setRooms(updated);
            }}
          /><br />

          <label>Upload Photo:</label>
          <input
            type="file"
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].photo = e.target.files[0];
              setRooms(updated);
            }}
          />

          <label>Notes:</label>
          <textarea
            rows={3}
            value={room.notes}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].notes = e.target.value;
              setRooms(updated);
            }}
            style={{ width: '100%' }}
          /><br />

          <button
            onClick={() => removeRoom(index)}
            style={{ marginTop: '1rem', backgroundColor: 'red', color: 'white', border: 'none', padding: '0.5rem 1rem' }}
          >
            Remove Room
          </button>
        </div>
      ))}

      <button
        onClick={addRoom}
        style={{ backgroundColor: 'black', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px' }}
      >
        + Add Another Room
      </button>
    </div>
  );
}
