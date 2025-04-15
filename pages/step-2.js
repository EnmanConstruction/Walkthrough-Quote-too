// File: /pages/walkthrough/step-2.js
import { useState } from 'react';

const defaultRoom = {
  customLabel: '',
  type: 'Bathroom',
  length: '',
  width: '',
  electrical: {
    outlets: '',
    switches: '',
    switchType: '',
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
    sink: false
  },
  cabinets: {
    lowers: '',
    uppers: '',
    gableEnds: '',
    plumbingLocation: '',
    electricalLocation: '',
    countertopType: ''
  },
  paintDrywall: {
    deleteIntercom: false,
    headerBypass: false,
    buildoutBypass: false,
    headerKitchen: false,
    ceilingType: '',
    paintCeiling: false,
    paintWalls: false,
    paintBaseCase: false,
    paintCabinets: false,
    sealerRequired: false,
    insulationVB: false,
    moldResistant: false,
    drywallPatches: false,
    backingRequired: false
  },
  tile: {
    tubTile: false,
    backsplashTile: false,
    tileEdge: '',
    tileColor: '',
    tileEdgeColor: '',
    tileEdgeSize: '',
    grout: '',
    groutSealer: false
  },
  baceCase: {
    baseboardType: '',
    baseboardLF: '',
    casingType: '',
    casingLF: '',
    flooringType: '',
    flooringArea: ''
  },
  notes: '',
  photo: ''
};

export default function Step2() {
  const [rooms, setRooms] = useState([{ ...defaultRoom }]);

  const handleChange = (index, section, field, value) => {
    const updatedRooms = [...rooms];
    if (section) {
      updatedRooms[index][section][field] = value;
    } else {
      updatedRooms[index][field] = value;
    }
    setRooms(updatedRooms);
  };

  const handlePhotoChange = (index, file) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].photo = file.name;
    setRooms(updatedRooms);
  };

  const addRoom = () => {
    setRooms([...rooms, { ...defaultRoom }]);
  };

  const removeRoom = (index) => {
    const updatedRooms = rooms.filter((_, i) => i !== index);
    setRooms(updatedRooms);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📍 Step 2: Room-by-Room Walkthrough</h1>
      {rooms.map((room, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '2rem', borderRadius: '8px' }}>
          <h2>{room.customLabel || `Room ${index + 1}`}</h2>

          <label>Room Label:
            <input
              value={room.customLabel}
              onChange={(e) => handleChange(index, null, 'customLabel', e.target.value)}
              placeholder="e.g., Main Bath, Kitchen A"
              style={{ width: '100%' }}
            />
          </label>

          <label>Room Type:
            <select
              value={room.type}
              onChange={(e) => handleChange(index, null, 'type', e.target.value)}
              style={{ width: '100%' }}
            >
              <option>Bathroom</option>
              <option>Kitchen</option>
              <option>Bedroom</option>
              <option>Common Area</option>
              <option>Other</option>
            </select>
          </label>

          <label>Dimensions (L x W in ft):
            <input placeholder="Length" value={room.length} onChange={(e) => handleChange(index, null, 'length', e.target.value)} />
            x
            <input placeholder="Width" value={room.width} onChange={(e) => handleChange(index, null, 'width', e.target.value)} />
          </label>

          {/* Conditional sections will be rendered here based on room.type */}

          <label>Upload Photo:
            <input type="file" onChange={(e) => handlePhotoChange(index, e.target.files[0])} />
          </label>
          {room.photo && <p><strong>File:</strong> {room.photo}</p>}

          <label>Notes:
            <textarea value={room.notes} onChange={(e) => handleChange(index, null, 'notes', e.target.value)} style={{ width: '100%' }} />
          </label>

          <button onClick={() => removeRoom(index)} style={{ marginTop: '1rem', background: 'red', color: 'white', padding: '0.5rem' }}>Remove Room</button>
        </div>
      ))}

      <button onClick={addRoom} style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: 'white', borderRadius: '4px' }}>+ Add Another Room</button>
    </div>
  );
}
