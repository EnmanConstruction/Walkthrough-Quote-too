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
    area: '',
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
    backingRequired: false,
  },
  electrical: {
    outlets: '',
    switches: '',
    switchType: '',
    smokeDetector: false,
    gfci: '',
    lightFixtures: '',
  },
  cabinets: {
    upperQty: '',
    lowerQty: '',
    linearFeet: '',
    gableEnds: '',
    vanityQty: '',
    vanitySize: '',
  },
  countertops: {
    sqft: '',
    type: '',
  },
  plumbing: {
    tub: false,
    tubDirection: '',
    tubSize: '',
    showerRod: false,
    toilet: false,
    sink: false,
    absFittings: false,
    copperPipe: false,
    shutOffs: false,
    absPipe: false,
    pTrap: false,
    pTrapCleanout: false,
    plumbingNotes: '',
  }
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

  const removeRoom = (index) => {
    const newRooms = rooms.filter((_, i) => i !== index);
    setRooms(newRooms);
  };

  const displayRoomTitle = (index, label) => label ? label : `Room ${index + 1}`;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📍 Step 2: Room-by-Room Walkthrough</h1>

      <label><strong>Total Project Square Footage:</strong></label>
      <input
        type="text"
        placeholder="e.g. 1200"
        value={totalSqft}
        onChange={(e) => setTotalSqft(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
      />

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

          <div style={{ borderTop: '1px solid #ddd', margin: '1rem 0' }}></div>
          <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>🧱 Trades</h3>
          <div style={{ marginBottom: '1rem' }}>
  <h4>🪵 Flooring</h4>
  <label>Type:</label>
  <input value={room.flooring.type} onChange={(e) => handleChange(index, 'flooring', 'type', e.target.value)} />
  <label>Area (sq ft):</label>
  <input value={room.flooring.area} onChange={(e) => handleChange(index, 'flooring', 'area', e.target.value)} />
</div>

<div style={{ marginBottom: '1rem' }}>
  <h4>🧱 Tile</h4>
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
</div>

<div style={{ marginBottom: '1rem' }}>
  <h4>🖌️ Painting</h4>
  <label><input type="checkbox" checked={room.painting.ceiling} onChange={(e) => handleChange(index, 'painting', 'ceiling', e.target.checked)} /> Ceiling</label>
  <label><input type="checkbox" checked={room.painting.walls} onChange={(e) => handleChange(index, 'painting', 'walls', e.target.checked)} /> Walls</label>
  <label><input type="checkbox" checked={room.painting.baseAndCase} onChange={(e) => handleChange(index, 'painting', 'baseAndCase', e.target.checked)} /> Base & Case</label>
  <label><input type="checkbox" checked={room.painting.cabinets} onChange={(e) => handleChange(index, 'painting', 'cabinets', e.target.checked)} /> Cabinets</label>
  <label><input type="checkbox" checked={room.painting.sealerRequired} onChange={(e) => handleChange(index, 'painting', 'sealerRequired', e.target.checked)} /> Sealer Required</label>
</div>

<div style={{ marginBottom: '1rem' }}>
  <h4>🧱 Drywall</h4>
  <label>Ceiling Type:</label>
  <input value={room.drywall.ceilingType} onChange={(e) => handleChange(index, 'drywall', 'ceilingType', e.target.value)} />
  <label><input type="checkbox" checked={room.drywall.drywallPatches} onChange={(e) => handleChange(index, 'drywall', 'drywallPatches', e.target.checked)} /> Drywall Patches</label>
  <label><input type="checkbox" checked={room.drywall.moldDrywall} onChange={(e) => handleChange(index, 'drywall', 'moldDrywall', e.target.checked)} /> Mold-Resistant Drywall</label>
  <label><input type="checkbox" checked={room.drywall.insulation} onChange={(e) => handleChange(index, 'drywall', 'insulation', e.target.checked)} /> Insulation</label>
  <label><input type="checkbox" checked={room.drywall.deleteIntercom} onChange={(e) => handleChange(index, 'drywall', 'deleteIntercom', e.target.checked)} /> Delete Intercom</label>
  <label><input type="checkbox" checked={room.drywall.backingRequired} onChange={(e) => handleChange(index, 'drywall', 'backingRequired', e.target.checked)} /> Backing Required</label>
</div>

<div style={{ marginBottom: '1rem' }}>
  <h4>💡 Electrical</h4>
  <label>Outlets:</label>
  <input value={room.electrical.outlets} onChange={(e) => handleChange(index, 'electrical', 'outlets', e.target.value)} />
  <label>Switches:</label>
  <input value={room.electrical.switches} onChange={(e) => handleChange(index, 'electrical', 'switches', e.target.value)} />
  <label>Switch Type:</label>
  <input value={room.electrical.switchType} onChange={(e) => handleChange(index, 'electrical', 'switchType', e.target.value)} />
  <label><input type="checkbox" checked={room.electrical.smokeDetector} onChange={(e) => handleChange(index, 'electrical', 'smokeDetector', e.target.checked)} /> Smoke Detector</label>
  <label>GFCI:</label>
  <input value={room.electrical.gfci} onChange={(e) => handleChange(index, 'electrical', 'gfci', e.target.value)} />
  <label>Light Fixtures:</label>
  <input value={room.electrical.lightFixtures} onChange={(e) => handleChange(index, 'electrical', 'lightFixtures', e.target.value)} />
</div>

<div style={{ marginBottom: '1rem' }}>
  <h4>🪟 Cabinets</h4>
  <label>Upper Qty:</label>
  <input value={room.cabinets.upperQty} onChange={(e) => handleChange(index, 'cabinets', 'upperQty', e.target.value)} />
  <label>Lower Qty:</label>
  <input value={room.cabinets.lowerQty} onChange={(e) => handleChange(index, 'cabinets', 'lowerQty', e.target.value)} />
  <label>Linear Feet:</label>
  <input value={room.cabinets.linearFeet} onChange={(e) => handleChange(index, 'cabinets', 'linearFeet', e.target.value)} />
  <label>Gable Ends:</label>
  <input value={room.cabinets.gableEnds} onChange={(e) => handleChange(index, 'cabinets', 'gableEnds', e.target.value)} />
  <label>Vanity Qty:</label>
  <input value={room.cabinets.vanityQty} onChange={(e) => handleChange(index, 'cabinets', 'vanityQty', e.target.value)} />
  <label>Vanity Size:</label>
  <input value={room.cabinets.vanitySize} onChange={(e) => handleChange(index, 'cabinets', 'vanitySize', e.target.value)} />
</div>

<div style={{ marginBottom: '1rem' }}>
  <h4>🧮 Countertops</h4>
  <label>Square Feet:</label>
  <input value={room.countertops.sqft} onChange={(e) => handleChange(index, 'countertops', 'sqft', e.target.value)} />
  <label>Type:</label>
  <input value={room.countertops.type} onChange={(e) => handleChange(index, 'countertops', 'type', e.target.value)} />
</div>

<div style={{ marginBottom: '1rem' }}>
  <h4>🚿 Plumbing</h4>
  <label><input type="checkbox" checked={room.plumbing.tub} onChange={(e) => handleChange(index, 'plumbing', 'tub', e.target.checked)} /> Tub</label>
  <label>Direction:</label>
  <input value={room.plumbing.tubDirection} onChange={(e) => handleChange(index, 'plumbing', 'tubDirection', e.target.value)} />
  <label>Size:</label>
  <input value={room.plumbing.tubSize} onChange={(e) => handleChange(index, 'plumbing', 'tubSize', e.target.value)} />
  <label><input type="checkbox" checked={room.plumbing.showerRod} onChange={(e) => handleChange(index, 'plumbing', 'showerRod', e.target.checked)} /> Shower Rod</label>
  <label><input type="checkbox" checked={room.plumbing.toilet} onChange={(e) => handleChange(index, 'plumbing', 'toilet', e.target.checked)} /> Toilet</label>
  <label><input type="checkbox" checked={room.plumbing.sink} onChange={(e) => handleChange(index, 'plumbing', 'sink', e.target.checked)} /> Sink</label>
  <label><input type="checkbox" checked={room.plumbing.shutOffs} onChange={(e) => handleChange(index, 'plumbing', 'shutOffs', e.target.checked)} /> Shut Offs</label>
  <label><input type="checkbox" checked={room.plumbing.absFittings} onChange={(e) => handleChange(index, 'plumbing', 'absFittings', e.target.checked)} /> ABS Fittings</label>
  <label><input type="checkbox" checked={room.plumbing.copperPipe} onChange={(e) => handleChange(index, 'plumbing', 'copperPipe', e.target.checked)} /> Copper Pipe</label>
  <label><input type="checkbox" checked={room.plumbing.absPipe} onChange={(e) => handleChange(index, 'plumbing', 'absPipe', e.target.checked)} /> ABS Pipe</label>
  <label><input type="checkbox" checked={room.plumbing.pTrap} onChange={(e) => handleChange(index, 'plumbing', 'pTrap', e.target.checked)} /> P-Trap</label>
  <label><input type="checkbox" checked={room.plumbing.pTrapCleanout} onChange={(e) => handleChange(index, 'plumbing', 'pTrapCleanout', e.target.checked)} /> P-Trap with Cleanout</label>
  <label>Plumbing Notes:</label>
  <textarea value={room.plumbing.plumbingNotes} onChange={(e) => handleChange(index, 'plumbing', 'plumbingNotes', e.target.value)} style={{ width: '100%' }} />
</div>
        </div>
      ))}

      <button onClick={addRoom} style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontWeight: 'bold' }}>+ Add Another Room</button>
    </div>
  );
}
