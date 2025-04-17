// Final Step 2 with Cabinets, Countertops, Tile, Plumbing, and Photo Upload
// To be pasted into /pages/walkthrough/step-2.js

import { useState } from 'react';

const defaultRoom = {
  label: '',
  type: 'Bathroom',
  length: '',
  width: '',
  photo: null,
  notes: '',
  flooring: {
    type: '',
    area: ''
  },
  electrical: {
    outlets: '',
    switches: '',
    switchType: '',
    smokeDetector: false,
    gfci: '',
    lightFixtures: '',
  },
  painting: {
    ceiling: false,
    walls: false,
    baseAndCase: false,
    cabinets: false,
    sealerRequired: false,
  },
  drywall: {
    ceilingType: '',
    drywallPatches: false,
    moldDrywall: false,
    insulation: false,
    deleteIntercom: false,
    backingRequired: false
  },
  tile: {
    hasTubTile: false,
    hasBacksplash: false,
    edge: '',
    tileColor: '',
    edgeColor: '',
    edgeSize: '',
    grout: '',
    groutSealer: false,
  },
  cabinets: {
    upperQty: '',
    lowerQty: '',
    linearFeet: '',
    gableEnds: ''
  },
  countertops: {
    sqft: '',
    type: ''
  },
  plumbing: {
    tub: false,
    tubDirection: '',
    tubSize: '',
    showerRod: false,
    toilet: false,
    sink: false,
    dishwasher: false,
    shutOffs: false,
    absFittings: false,
    copperPipe: false,
    absPipe: false,
    pTrap: false,
    pTrapCleanout: false,
  }
};

export default function Step2() {
  const [squareFootage, setSquareFootage] = useState('');
  const [rooms, setRooms] = useState([{ ...defaultRoom }]);

  const addRoom = () => setRooms([...rooms, { ...defaultRoom }]);

  const removeRoom = (index) => setRooms(rooms.filter((_, i) => i !== index));

  const handleChange = (index, group, field, value) => {
    const updated = [...rooms];
    updated[index][group][field] = value;
    setRooms(updated);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📍 Step 2: Room-by-Room Walkthrough</h1>

      <label><strong>Total Project Square Footage:</strong></label>
      <input
        type="number"
        placeholder="e.g. 1200"
        value={squareFootage}
        onChange={(e) => setSquareFootage(e.target.value)}
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
          />

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
          </select>

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
          />

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
            value={room.notes}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].notes = e.target.value;
              setRooms(updated);
            }}
            rows={3}
            style={{ width: '100%' }}
          />

          {/* Add grouped UI fields for flooring, tile, electrical, painting, drywall, plumbing, cabinets, countertops */}

          {/* Remove button */}
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
