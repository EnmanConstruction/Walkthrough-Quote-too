
// force rebuild
// Full working visual rendering version with all trade sections

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
    baseCase: false,
    cabinets: false,
    sealerRequired: false,
  },
  baseAndCase: {
    paint: false,
    replace: false,
    linearFeet: '',
    material: '',
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
  },
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

          {/* Full Trade Sections Start Here */}

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>🪵 Flooring</legend>
            Type: <input value={room.flooring.type} onChange={(e) => handleChange(index, 'flooring', 'type', e.target.value)} />
            Area (sq ft): <input value={room.flooring.area} onChange={(e) => handleChange(index, 'flooring', 'area', e.target.value)} />
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend🧱 Tile</legend>
            <label><input type="checkbox" checked={room.tile.hasTubTile} onChange={(e) => handleChange(index, 'tile', 'hasTubTile', e.target.checked)} /> Tub Tile</label>
            <label><input type="checkbox" checked={room.tile.hasBacksplash} onChange={(e) => handleChange(index, 'tile', 'hasBacksplash', e.target.checked)} /> Backsplash</label>
            Edge: <input value={room.tile.edge} onChange={(e) => handleChange(index, 'tile', 'edge', e.target.value)} />
            Tile Color: <input value={room.tile.tileColor} onChange={(e) => handleChange(index, 'tile', 'tileColor', e.target.value)} />
            Edge Color: <input value={room.tile.edgeColor} onChange={(e) => handleChange(index, 'tile', 'edgeColor', e.target.value)} />
            Edge Size: <input value={room.tile.edgeSize} onChange={(e) => handleChange(index, 'tile', 'edgeSize', e.target.value)} />
            Grout: <input value={room.tile.grout} onChange={(e) => handleChange(index, 'tile', 'grout', e.target.value)} />
            <label><input type="checkbox" checked={room.tile.groutSealer} onChange={(e) => handleChange(index, 'tile', 'groutSealer', e.target.checked)} /> Grout Sealer</label>
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>🎨 Painting</legend>
            {['ceiling', 'walls', 'baseCase', 'cabinets', 'sealerRequired'].map((key) => (
              <label key={key}><input type="checkbox" checked={room.painting[key]} onChange={(e) => handleChange(index, 'painting', key, e.target.checked)} /> {key.charAt(0).toUpperCase() + key.slice(1)}</label>
            ))}
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>🪚 Base & Case (Material)</legend>
            <label><input type="checkbox" checked={room.baseAndCase.paint} onChange={(e) => handleChange(index, 'baseAndCase', 'paint', e.target.checked)} /> Paint</label>
            <label><input type="checkbox" checked={room.baseAndCase.replace} onChange={(e) => handleChange(index, 'baseAndCase', 'replace', e.target.checked)} /> Replace</label>
            Linear Feet: <input value={room.baseAndCase.linearFeet} onChange={(e) => handleChange(index, 'baseAndCase', 'linearFeet', e.target.value)} />
            Material: <input value={room.baseAndCase.material} onChange={(e) => handleChange(index, 'baseAndCase', 'material', e.target.value)} />
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>🧱 Drywall</legend>
            Ceiling Type: <input value={room.drywall.ceilingType} onChange={(e) => handleChange(index, 'drywall', 'ceilingType', e.target.value)} />
            {['drywallPatches', 'moldDrywall', 'insulation', 'deleteIntercom', 'backingRequired'].map((key) => (
              <label key={key}><input type="checkbox" checked={room.drywall[key]} onChange={(e) => handleChange(index, 'drywall', key, e.target.checked)} /> {key}</label>
            ))}
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>💡 Electrical</legend>
            Outlets: <input value={room.electrical.outlets} onChange={(e) => handleChange(index, 'electrical', 'outlets', e.target.value)} />
            Switches: <input value={room.electrical.switches} onChange={(e) => handleChange(index, 'electrical', 'switches', e.target.value)} />
            Switch Type: <input value={room.electrical.switchType} onChange={(e) => handleChange(index, 'electrical', 'switchType', e.target.value)} />
            <label><input type="checkbox" checked={room.electrical.smokeDetector} onChange={(e) => handleChange(index, 'electrical', 'smokeDetector', e.target.checked)} /> Smoke Detector</label>
            GFCI: <input value={room.electrical.gfci} onChange={(e) => handleChange(index, 'electrical', 'gfci', e.target.value)} />
            Light Fixtures: <input value={room.electrical.lightFixtures} onChange={(e) => handleChange(index, 'electrical', 'lightFixtures', e.target.value)} />
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>🪟 Cabinets</legend>
            Upper Qty: <input value={room.cabinets.upperQty} onChange={(e) => handleChange(index, 'cabinets', 'upperQty', e.target.value)} />
            Lower Qty: <input value={room.cabinets.lowerQty} onChange={(e) => handleChange(index, 'cabinets', 'lowerQty', e.target.value)} />
            Linear Feet: <input value={room.cabinets.linearFeet} onChange={(e) => handleChange(index, 'cabinets', 'linearFeet', e.target.value)} />
            Gable Ends: <input value={room.cabinets.gableEnds} onChange={(e) => handleChange(index, 'cabinets', 'gableEnds', e.target.value)} />
            Vanity Qty: <input value={room.cabinets.vanityQty} onChange={(e) => handleChange(index, 'cabinets', 'vanityQty', e.target.value)} />
            Vanity Size: <input value={room.cabinets.vanitySize} onChange={(e) => handleChange(index, 'cabinets', 'vanitySize', e.target.value)} />
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>🪵 Countertops</legend>
            Square Feet: <input value={room.countertops.sqft} onChange={(e) => handleChange(index, 'countertops', 'sqft', e.target.value)} />
            Type: <input value={room.countertops.type} onChange={(e) => handleChange(index, 'countertops', 'type', e.target.value)} />
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>🚿 Plumbing</legend>
            <label><input type="checkbox" checked={room.plumbing.tub} onChange={(e) => handleChange(index, 'plumbing', 'tub', e.target.checked)} /> Tub</label>
            Direction: <input value={room.plumbing.tubDirection} onChange={(e) => handleChange(index, 'plumbing', 'tubDirection', e.target.value)} />
            Size: <input value={room.plumbing.tubSize} onChange={(e) => handleChange(index, 'plumbing', 'tubSize', e.target.value)} />
            {['showerRod', 'toilet', 'sink', 'shutOffs', 'absFittings', 'copperPipe', 'absPipe', 'pTrap', 'pTrapCleanout'].map((key) => (
              <label key={key}><input type="checkbox" checked={room.plumbing[key]} onChange={(e) => handleChange(index, 'plumbing', key, e.target.checked)} /> {key}</label>
            ))}
            <br />Plumbing Notes:
            <textarea value={room.plumbing.plumbingNotes} onChange={(e) => handleChange(index, 'plumbing', 'plumbingNotes', e.target.value)} />
          </fieldset>
        </div>
      ))}

      <button onClick={addRoom} style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontWeight: 'bold' }}>+ Add Another Room</button>
    </div>
  );
}
