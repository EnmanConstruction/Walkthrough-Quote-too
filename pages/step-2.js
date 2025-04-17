// File: /pages/walkthrough/step-2.js

import { useState } from 'react';

const defaultRoom = {
  label: '',
  type: 'Bathroom',
  length: '',
  width: '',
  photo: null,
  notes: '',
  flooring: { type: '', area: '' },
  tile: { hasTubTile: false, hasBacksplash: false, edge: '', tileColor: '', edgeColor: '', edgeSize: '', grout: '', groutSealer: false },
  painting: { ceiling: false, walls: false, baseCase: false, cabinets: false, sealerRequired: false },
  baseAndCase: { paint: false, replace: false, linearFeet: '', material: '' },
  drywall: { ceilingType: '', drywallPatches: false, moldDrywall: false, insulation: false, deleteIntercom: false, backingRequired: false },
  electrical: { outlets: '', switches: '', switchType: '', smokeDetector: false, gfci: '', lightFixtures: '' },
  cabinets: { upperQty: '', lowerQty: '', linearFeet: '', gableEnds: '', vanityQty: '', vanitySize: '' },
  countertops: { sqft: '', type: '' },
  plumbing: { tub: false, tubDirection: '', tubSize: '', showerRod: false, toilet: false, sink: false, absFittings: false, copperPipe: false, shutOffs: false, absPipe: false, pTrap: false, pTrapCleanout: false, plumbingNotes: '' },
};

export default function Step2() {
  const [rooms, setRooms] = useState([defaultRoom]);
  const [totalSqft, setTotalSqft] = useState('');

  const addRoom = () => setRooms([...rooms, { ...defaultRoom }]);

  const handleChange = (index, section, field, value) => {
    const newRooms = [...rooms];
    if (section && typeof newRooms[index][section] === 'object') {
      newRooms[index][section][field] = value;
    } else {
      newRooms[index][field] = value;
    }
    setRooms(newRooms);
  };

  const removeRoom = (index) => setRooms(rooms.filter((_, i) => i !== index));
  const displayRoomTitle = (index, label) => label || `Room ${index + 1}`;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📍 Step 2: Room-by-Room Walkthrough</h1>
      <label><strong>Total Project Square Footage:</strong></label>
      <input type="text" placeholder="e.g. 1200" value={totalSqft} onChange={(e) => setTotalSqft(e.target.value)} style={{ width: '100%', marginBottom: '1rem' }} />

      {rooms.map((room, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>{displayRoomTitle(index, room.label)}</h2>
            <button onClick={() => removeRoom(index)} style={{ backgroundColor: 'red', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>✖</button>
          </div>

          <label>Room Label:</label>
          <input value={room.label} onChange={(e) => handleChange(index, null, 'label', e.target.value)} placeholder="e.g. Main Bath, Kitchen A" style={{ width: '100%' }} /><br />

          <label>Room Type:</label>
          <select value={room.type} onChange={(e) => handleChange(index, null, 'type', e.target.value)}>
            <option>Bathroom</option>
            <option>Kitchen</option>
            <option>Bedroom</option>
            <option>Common Area</option>
            <option>Other</option>
          </select>

          <label>Dimensions (L x W in ft):</label>
          <input value={room.length} placeholder="Length" onChange={(e) => handleChange(index, null, 'length', e.target.value)} /> x
          <input value={room.width} placeholder="Width" onChange={(e) => handleChange(index, null, 'width', e.target.value)} /><br />

          <label>Upload Photo:</label>
          <input type="file" onChange={(e) => handleChange(index, null, 'photo', e.target.files[0])} /><br />

          <label>Notes:</label>
          <textarea value={room.notes} onChange={(e) => handleChange(index, null, 'notes', e.target.value)} style={{ width: '100%' }} /><br />

          {/* Full field group rendering goes below */}
          <fieldset style={{ marginTop: '1rem', padding: '1rem' }}>
            <legend><strong>🪵 Flooring</strong></legend>
            <label>Type:</label>
            <input value={room.flooring.type} onChange={(e) => handleChange(index, 'flooring', 'type', e.target.value)} />
            <label>Area (sq ft):</label>
            <input value={room.flooring.area} onChange={(e) => handleChange(index, 'flooring', 'area', e.target.value)} />
          </fieldset>

          <fieldset style={{ marginTop: '1rem', padding: '1rem' }}>
            <legend><strong>🧱 Tile</strong></legend>
            <label><input type="checkbox" checked={room.tile.hasTubTile} onChange={(e) => handleChange(index, 'tile', 'hasTubTile', e.target.checked)} /> Tub Tile</label>
            <label><input type="checkbox" checked={room.tile.hasBacksplash} onChange={(e) => handleChange(index, 'tile', 'hasBacksplash', e.target.checked)} /> Backsplash</label>
            <label>Edge:</label>
            <input value={room.tile.edge} onChange={(e) => handleChange(index, 'tile', 'edge', e.target.value)} />
            <label>Tile Color:</label>
            <input value={room.tile.tileColor} onChange={(e) => handleChange(index, 'tile', 'tileColor', e.target.value)} />
            <label>Edge Color:</label>
            <input value={room.tile.edgeColor} onChange={(e) => handleChange(index, 'tile', 'edgeColor', e.target.value)} />
            <label>Edge Size:</label>
            <input value={room.tile.edgeSize} onChange={(e) => handleChange(index, 'tile', 'edgeSize', e.target.value)} />
            <label>Grout:</label>
            <input value={room.tile.grout} onChange={(e) => handleChange(index, 'tile', 'grout', e.target.value)} />
            <label><input type="checkbox" checked={room.tile.groutSealer} onChange={(e) => handleChange(index, 'tile', 'groutSealer', e.target.checked)} /> Grout Sealer</label>
          </fieldset>

          <fieldset style={{ marginTop: '1rem', padding: '1rem' }}>
            <legend><strong>🖌️ Painting</strong></legend>
            <label><input type="checkbox" checked={room.painting.ceiling} onChange={(e) => handleChange(index, 'painting', 'ceiling', e.target.checked)} /> Ceiling</label>
            <label><input type="checkbox" checked={room.painting.walls} onChange={(e) => handleChange(index, 'painting', 'walls', e.target.checked)} /> Walls</label>
            <label><input type="checkbox" checked={room.painting.baseCase} onChange={(e) => handleChange(index, 'painting', 'baseCase', e.target.checked)} /> Base & Case</label>
            <label><input type="checkbox" checked={room.painting.cabinets} onChange={(e) => handleChange(index, 'painting', 'cabinets', e.target.checked)} /> Cabinets</label>
            <label><input type="checkbox" checked={room.painting.sealerRequired} onChange={(e) => handleChange(index, 'painting', 'sealerRequired', e.target.checked)} /> Sealer Required</label>
          </fieldset>

          <fieldset style={{ marginTop: '1rem', padding: '1rem' }}>
            <legend><strong>📏 Base & Case (Material)</strong></legend>
            <label><input type="checkbox" checked={room.baseAndCase.paint} onChange={(e) => handleChange(index, 'baseAndCase', 'paint', e.target.checked)} /> Paint</label>
            <label><input type="checkbox" checked={room.baseAndCase.replace} onChange={(e) => handleChange(index, 'baseAndCase', 'replace', e.target.checked)} /> Replace</label>
            <label>Linear Feet:</label>
            <input value={room.baseAndCase.linearFeet} onChange={(e) => handleChange(index, 'baseAndCase', 'linearFeet', e.target.value)} />
            <label>Material:</label>
            <input value={room.baseAndCase.material} onChange={(e) => handleChange(index, 'baseAndCase', 'material', e.target.value)} />
          </fieldset>

          {/* Continue rendering for drywall, electrical, cabinets, countertops, plumbing next... */}
        </div>
      ))}

      <button onClick={addRoom} style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontWeight: 'bold' }}>+ Add Another Room</button>
    </div>
  );
}
