// File: /pages/walkthrough/step-2.js
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
  tile: {
    isTiledFloor: false,
    tileColor: '',
    edgeSize: '',
    grout: '',
    groutSealer: false,
    edgeColor: ''
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
  }
};

export default function Step2() {
  const [squareFootage, setSquareFootage] = useState('');
  const [rooms, setRooms] = useState([{ ...defaultRoom }]);

  const addRoom = () => {
    setRooms([...rooms, { ...defaultRoom }]);
  };

  const removeRoom = (index) => {
    const updated = rooms.filter((_, i) => i !== index);
    setRooms(updated);
  };

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

          <h4>Flooring</h4>
          <label>Type:</label>
          <select
            value={room.flooring.type}
            onChange={(e) => handleChange(index, 'flooring', 'type', e.target.value)}
          >
            <option value="">Select</option>
            <option value="LVP">LVP</option>
            <option value="Carpet">Carpet</option>
            <option value="Hardwood">Hardwood</option>
            <option value="Tile">Tile</option>
            <option value="Other">Other</option>
          </select><br />

          <label>Area (sqft):</label>
          <input
            type="text"
            value={room.flooring.area}
            onChange={(e) => handleChange(index, 'flooring', 'area', e.target.value)}
          /><br />

          {room.flooring.type === 'Tile' && (
            <div>
              <h4>Tile Details</h4>
              <input
                placeholder="Tile Color"
                value={room.tile.tileColor}
                onChange={(e) => handleChange(index, 'tile', 'tileColor', e.target.value)}
              /><br />
              <input
                placeholder="Edge Size (e.g. 3/8, 1/2)"
                value={room.tile.edgeSize}
                onChange={(e) => handleChange(index, 'tile', 'edgeSize', e.target.value)}
              /><br />
              <input
                placeholder="Grout"
                value={room.tile.grout}
                onChange={(e) => handleChange(index, 'tile', 'grout', e.target.value)}
              /><br />
              <input
                placeholder="Edge Color"
                value={room.tile.edgeColor}
                onChange={(e) => handleChange(index, 'tile', 'edgeColor', e.target.value)}
              /><br />
              <label><input type="checkbox" checked={room.tile.groutSealer} onChange={(e) => handleChange(index, 'tile', 'groutSealer', e.target.checked)} /> Grout Sealer</label><br />
            </div>
          )}

          <h4>Electrical</h4>
          <input placeholder="Outlets" value={room.electrical.outlets} onChange={(e) => handleChange(index, 'electrical', 'outlets', e.target.value)} />
          <input placeholder="Switches" value={room.electrical.switches} onChange={(e) => handleChange(index, 'electrical', 'switches', e.target.value)} />
          <input placeholder="Switch Type" value={room.electrical.switchType} onChange={(e) => handleChange(index, 'electrical', 'switchType', e.target.value)} />
          <input placeholder="GFCIs" value={room.electrical.gfci} onChange={(e) => handleChange(index, 'electrical', 'gfci', e.target.value)} />
          <input placeholder="Light Fixtures" value={room.electrical.lightFixtures} onChange={(e) => handleChange(index, 'electrical', 'lightFixtures', e.target.value)} />
          <label><input type="checkbox" checked={room.electrical.smokeDetector} onChange={(e) => handleChange(index, 'electrical', 'smokeDetector', e.target.checked)} /> Smoke Detector</label>

          <h4>Painting</h4>
          <label><input type="checkbox" checked={room.painting.ceiling} onChange={(e) => handleChange(index, 'painting', 'ceiling', e.target.checked)} /> Ceiling</label>
          <label><input type="checkbox" checked={room.painting.walls} onChange={(e) => handleChange(index, 'painting', 'walls', e.target.checked)} /> Walls</label>
          <label><input type="checkbox" checked={room.painting.baseAndCase} onChange={(e) => handleChange(index, 'painting', 'baseAndCase', e.target.checked)} /> Base & Case</label>
          <label><input type="checkbox" checked={room.painting.cabinets} onChange={(e) => handleChange(index, 'painting', 'cabinets', e.target.checked)} /> Cabinets</label>
          <label><input type="checkbox" checked={room.painting.sealerRequired} onChange={(e) => handleChange(index, 'painting', 'sealerRequired', e.target.checked)} /> Sealer Required</label>

          <h4>Drywall & Ceiling</h4>
          <input placeholder="Ceiling Type (flat/texture)" value={room.drywall.ceilingType} onChange={(e) => handleChange(index, 'drywall', 'ceilingType', e.target.value)} /><br />
          <label><input type="checkbox" checked={room.drywall.drywallPatches} onChange={(e) => handleChange(index, 'drywall', 'drywallPatches', e.target.checked)} /> Drywall Patches</label>
          <label><input type="checkbox" checked={room.drywall.moldDrywall} onChange={(e) => handleChange(index, 'drywall', 'moldDrywall', e.target.checked)} /> Mold-Resistant Drywall</label>
          <label><input type="checkbox" checked={room.drywall.insulation} onChange={(e) => handleChange(index, 'drywall', 'insulation', e.target.checked)} /> Insulation / Vapor Barrier</label>
          <label><input type="checkbox" checked={room.drywall.backingRequired} onChange={(e) => handleChange(index, 'drywall', 'backingRequired', e.target.checked)} /> Backing Materials</label>

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
