import { useState } from 'react';

const defaultRoom = {
  label: '',
  type: 'Bathroom',
  length: '',
  width: '',
  photo: null,
  notes: '',
  flooring: { type: '', area: '' },
  tile: {
    hasTubTile: false,
    hasBacksplash: false,
    edge: '',
    tileColor: '',
    edgeColor: '',
    edgeSize: '',
    grout: '',
    groutSealer: false
  },
  painting: {
    ceiling: false,
    walls: false,
    baseAndCase: false,
    cabinets: false,
    sealerRequired: false
  },
  drywall: {
    ceilingType: '',
    drywallPatches: false,
    moldDrywall: false,
    insulation: false,
    deleteIntercom: false,
    backingRequired: false
  },
  electrical: {
    outlets: '',
    switches: '',
    switchType: '',
    smokeDetector: false,
    gfci: '',
    lightFixtures: ''
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
    plumbingNotes: '',
    absFittings: false,
    copperPipe: false,
    shutoffs: false,
    standardFittings: false,
    absPipe: false,
    ptrap: false,
    ptrapCleanout: false
  }
};

export default function Step2() {
  const [totalSqft, setTotalSqft] = useState('');
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

  const addRoom = () => setRooms([...rooms, { ...defaultRoom }]);
  const removeRoom = (index) => setRooms(rooms.filter((_, i) => i !== index));

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
        <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h2>Room {index + 1}</h2>

          <label>Room Label:</label>
          <input type="text" value={room.label} onChange={(e) => handleChange(index, null, 'label', e.target.value)} />

          <label>Room Type:</label>
          <select value={room.type} onChange={(e) => handleChange(index, null, 'type', e.target.value)}>
            <option>Bathroom</option>
            <option>Kitchen</option>
            <option>Bedroom</option>
            <option>Common Area</option>
            <option>Other</option>
          </select>

          <label>Dimensions (L x W in ft):</label>
          <input placeholder="Length" value={room.length} onChange={(e) => handleChange(index, null, 'length', e.target.value)} /> x
          <input placeholder="Width" value={room.width} onChange={(e) => handleChange(index, null, 'width', e.target.value)} />

          <label>Upload Photo:</label>
          <input type="file" onChange={(e) => handleChange(index, null, 'photo', e.target.files[0])} />

          <label>Notes:</label>
          <textarea value={room.notes} onChange={(e) => handleChange(index, null, 'notes', e.target.value)} style={{ width: '100%' }} />

          {/* Floor to Ceiling Sections */}
          <div className="trade-section">
            <h4>Flooring</h4>
            <label>Type:</label>
            <input type="text" value={room.flooring.type} onChange={(e) => handleChange(index, 'flooring', 'type', e.target.value)} />
            <label>Area (sq ft):</label>
            <input type="number" value={room.flooring.area} onChange={(e) => handleChange(index, 'flooring', 'area', e.target.value)} />
          </div>

          <div className="trade-section">
            <h4>Tile</h4>
            <label><input type="checkbox" checked={room.tile.hasTubTile} onChange={(e) => handleChange(index, 'tile', 'hasTubTile', e.target.checked)} /> Tub Tile</label>
            <label><input type="checkbox" checked={room.tile.hasBacksplash} onChange={(e) => handleChange(index, 'tile', 'hasBacksplash', e.target.checked)} /> Backsplash</label>
            <label>Edge:</label>
            <input type="text" value={room.tile.edge} onChange={(e) => handleChange(index, 'tile', 'edge', e.target.value)} />
            <label>Tile Color:</label>
            <input type="text" value={room.tile.tileColor} onChange={(e) => handleChange(index, 'tile', 'tileColor', e.target.value)} />
            <label>Edge Color:</label>
            <input type="text" value={room.tile.edgeColor} onChange={(e) => handleChange(index, 'tile', 'edgeColor', e.target.value)} />
            <label>Edge Size:</label>
            <input type="text" value={room.tile.edgeSize} onChange={(e) => handleChange(index, 'tile', 'edgeSize', e.target.value)} />
            <label>Grout:</label>
            <input type="text" value={room.tile.grout} onChange={(e) => handleChange(index, 'tile', 'grout', e.target.value)} />
            <label><input type="checkbox" checked={room.tile.groutSealer} onChange={(e) => handleChange(index, 'tile', 'groutSealer', e.target.checked)} /> Grout Sealer</label>
          </div>

          <div className="trade-section">
            <h4>Painting</h4>
            <label><input type="checkbox" checked={room.painting.ceiling} onChange={(e) => handleChange(index, 'painting', 'ceiling', e.target.checked)} /> Ceiling</label>
            <label><input type="checkbox" checked={room.painting.walls} onChange={(e) => handleChange(index, 'painting', 'walls', e.target.checked)} /> Walls</label>
            <label><input type="checkbox" checked={room.painting.baseAndCase} onChange={(e) => handleChange(index, 'painting', 'baseAndCase', e.target.checked)} /> Base & Case</label>
            <label><input type="checkbox" checked={room.painting.cabinets} onChange={(e) => handleChange(index, 'painting', 'cabinets', e.target.checked)} /> Cabinets</label>
            <label><input type="checkbox" checked={room.painting.sealerRequired} onChange={(e) => handleChange(index, 'painting', 'sealerRequired', e.target.checked)} /> Sealer Required</label>
          </div>

          <div className="trade-section">
            <h4>Drywall</h4>
            <label>Ceiling Type:</label>
            <input type="text" value={room.drywall.ceilingType} onChange={(e) => handleChange(index, 'drywall', 'ceilingType', e.target.value)} />
            <label><input type="checkbox" checked={room.drywall.drywallPatches} onChange={(e) => handleChange(index, 'drywall', 'drywallPatches', e.target.checked)} /> Drywall Patches</label>
            <label><input type="checkbox" checked={room.drywall.moldDrywall} onChange={(e) => handleChange(index, 'drywall', 'moldDrywall', e.target.checked)} /> Mold-Resistant Drywall</label>
            <label><input type="checkbox" checked={room.drywall.insulation} onChange={(e) => handleChange(index, 'drywall', 'insulation', e.target.checked)} /> Insulation</label>
            <label><input type="checkbox" checked={room.drywall.deleteIntercom} onChange={(e) => handleChange(index, 'drywall', 'deleteIntercom', e.target.checked)} /> Delete Intercom</label>
            <label><input type="checkbox" checked={room.drywall.backingRequired} onChange={(e) => handleChange(index, 'drywall', 'backingRequired', e.target.checked)} /> Backing Required</label>
          </div>

          <div className="trade-section">
            <h4>Electrical</h4>
            <label>Outlets:</label>
            <input type="text" value={room.electrical.outlets} onChange={(e) => handleChange(index, 'electrical', 'outlets', e.target.value)} />
            <label>Switches:</label>
            <input type="text" value={room.electrical.switches} onChange={(e) => handleChange(index, 'electrical', 'switches', e.target.value)} />
            <label>Switch Type:</label>
            <input type="text" value={room.electrical.switchType} onChange={(e) => handleChange(index, 'electrical', 'switchType', e.target.value)} />
            <label><input type="checkbox" checked={room.electrical.smokeDetector} onChange={(e) => handleChange(index, 'electrical', 'smokeDetector', e.target.checked)} /> Smoke Detector</label>
            <label>GFCI:</label>
            <input type="text" value={room.electrical.gfci} onChange={(e) => handleChange(index, 'electrical', 'gfci', e.target.value)} />
            <label>Light Fixtures:</label>
            <input type="text" value={room.electrical.lightFixtures} onChange={(e) => handleChange(index, 'electrical', 'lightFixtures', e.target.value)} />
          </div>

          <div className="trade-section">
            <h4>Cabinets</h4>
            <label>Upper Qty:</label>
            <input type="text" value={room.cabinets.upperQty} onChange={(e) => handleChange(index, 'cabinets', 'upperQty', e.target.value)} />
            <label>Lower Qty:</label>
            <input type="text" value={room.cabinets.lowerQty} onChange={(e) => handleChange(index, 'cabinets', 'lowerQty', e.target.value)} />
            <label>Linear Feet:</label>
            <input type="text" value={room.cabinets.linearFeet} onChange={(e) => handleChange(index, 'cabinets', 'linearFeet', e.target.value)} />
            <label>Gable Ends:</label>
            <input type="text" value={room.cabinets.gableEnds} onChange={(e) => handleChange(index, 'cabinets', 'gableEnds', e.target.value)} />
          </div>

          <div className="trade-section">
            <h4>Countertops</h4>
            <label>Square Feet:</label>
            <input type="text" value={room.countertops.sqft} onChange={(e) => handleChange(index, 'countertops', 'sqft', e.target.value)} />
            <label>Type:</label>
            <input type="text" value={room.countertops.type} onChange={(e) => handleChange(index, 'countertops', 'type', e.target.value)} />
          </div>

          <div className="trade-section">
            <h4>Plumbing</h4>
            <label><input type="checkbox" checked={room.plumbing.tub} onChange={(e) => handleChange(index, 'plumbing', 'tub', e.target.checked)} /> Tub</label>
            <label>Direction:</label>
            <input type="text" value={room.plumbing.tubDirection} onChange={(e) => handleChange(index, 'plumbing', 'tubDirection', e.target.value)} />
            <label>Size:</label>
            <input type="text" value={room.plumbing.tubSize} onChange={(e) => handleChange(index, 'plumbing', 'tubSize', e.target.value)} />
            <label><input type="checkbox" checked={room.plumbing.showerRod} onChange={(e) => handleChange(index, 'plumbing', 'showerRod', e.target.checked)} /> Shower Rod</label>
            <label><input type="checkbox" checked={room.plumbing.toilet} onChange={(e) => handleChange(index, 'plumbing', 'toilet', e.target.checked)} /> Toilet</label>
            <label><input type="checkbox" checked={room.plumbing.sink} onChange={(e) => handleChange(index, 'plumbing', 'sink', e.target.checked)} /> Sink</label>
            <label>Notes:</label>
            <input type="text" value={room.plumbing.plumbingNotes} onChange={(e) => handleChange(index, 'plumbing', 'plumbingNotes', e.target.value)} />
            <label><input type="checkbox" checked={room.plumbing.absFittings} onChange={(e) => handleChange(index, 'plumbing', 'absFittings', e.target.checked)} /> ABS Fittings</label>
            <label><input type="checkbox" checked={room.plumbing.copperPipe} onChange={(e) => handleChange(index, 'plumbing', 'copperPipe', e.target.checked)} /> Copper Pipe</label>
            <label><input type="checkbox" checked={room.plumbing.shutoffs} onChange={(e) => handleChange(index, 'plumbing', 'shutoffs', e.target.checked)} /> Shut-offs</label>
            <label><input type="checkbox" checked={room.plumbing.standardFittings} onChange={(e) => handleChange(index, 'plumbing', 'standardFittings', e.target.checked)} /> Standard Fittings</label>
            <label><input type="checkbox" checked={room.plumbing.absPipe} onChange={(e) => handleChange(index, 'plumbing', 'absPipe', e.target.checked)} /> ABS Pipe</label>
            <label><input type="checkbox" checked={room.plumbing.ptrap} onChange={(e) => handleChange(index, 'plumbing', 'ptrap', e.target.checked)} /> P-Trap</label>
            <label><input type="checkbox" checked={room.plumbing.ptrapCleanout} onChange={(e) => handleChange(index, 'plumbing', 'ptrapCleanout', e.target.checked)} /> P-Trap w/ Cleanout</label>
          </div>

          <button onClick={() => removeRoom(index)} style={{ marginTop: '1rem', backgroundColor: 'red', color: 'white' }}>Remove Room</button>
        </div>
      ))}

      <button onClick={addRoom} style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: 'white' }}>+ Add Another Room</button>
    </div>
  );
}

