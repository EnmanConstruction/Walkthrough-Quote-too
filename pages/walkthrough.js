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
    hasTubTile: false, hasBacksplash: false, edge: '', tileColor: '', edgeColor: '', edgeSize: '', grout: '', groutSealer: false,
  },
  painting: {
    ceiling: false, walls: false, baseCase: false, cabinets: false, sealerRequired: false,
  },
  baseAndCase: {
    paint: false, replace: false, linearFeet: '', material: '',
  },
  drywall: {
    ceilingType: '', drywallPatches: false, moldDrywall: false, insulation: false, deleteIntercom: false, backingRequired: false,
  },
  electrical: {
    outlets: '', switches: '', switchType: '', smokeDetector: false, gfci: '', lightFixtures: '',
  },
  cabinets: {
    upperQty: '', lowerQty: '', linearFeet: '', gableEnds: '', vanityQty: '', vanitySize: '',
  },
  countertops: { sqft: '', type: '' },
  plumbing: {
    tub: false, tubDirection: '', tubSize: '', showerRod: false, toilet: false, sink: false,
    absFittings: false, copperPipe: false, shutOffs: false, absPipe: false, pTrap: false, pTrapCleanout: false, plumbingNotes: '',
  },
};

export default function Walkthrough() {
  const [rooms, setRooms] = useState([JSON.parse(JSON.stringify(defaultRoom))]);
  const [totalSqft, setTotalSqft] = useState('');

  const addRoom = () => setRooms([...rooms, JSON.parse(JSON.stringify(defaultRoom))]);
  const removeRoom = (index) => setRooms(rooms.filter((_, i) => i !== index));

  const handleChange = (index, section, field, value) => {
    const updated = [...rooms];
    if (section && typeof updated[index][section] === 'object') {
      updated[index][section][field] = value;
    } else {
      updated[index][field] = value;
    }
    setRooms(updated);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Step 2: Room-by-Room Walkthrough</h1>

      <label>Total Project Square Footage:</label>
      <input
        className="border p-1 mb-4 ml-2"
        value={totalSqft}
        onChange={(e) => setTotalSqft(e.target.value)}
        placeholder="e.g. 1200"
      />

      {rooms.map((room, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold mt-6 mb-2">Room {index + 1}</h2>

          <button className="bg-gray-300 px-2 py-1 rounded mb-2" onClick={() => removeRoom(index)}>Remove</button>

          <div>
            <label>Room Label </label>
            <input
              value={room.label}
              onChange={(e) => handleChange(index, null, 'label', e.target.value)}
              placeholder="e.g. Main Bath, Kitchen A"
              className="border ml-1"
            />
          </div>

          <div>
            <label>Room Type </label>
            <select
              value={room.type}
              onChange={(e) => handleChange(index, null, 'type', e.target.value)}
              className="border ml-1"
            >
              <option>Bathroom</option>
              <option>Kitchen</option>
              <option>Bedroom</option>
              <option>Common Area</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label>Dimensions (L x W in ft)</label><br />
            <input
              className="border"
              value={room.length}
              placeholder="Length"
              onChange={(e) => handleChange(index, null, 'length', e.target.value)}
            />
            <input
              className="border ml-2"
              value={room.width}
              placeholder="Width"
              onChange={(e) => handleChange(index, null, 'width', e.target.value)}
            />
          </div>

          <div>
            <label>Upload Photo </label>
            <input
              className="border"
              type="file"
              onChange={(e) => handleChange(index, null, 'photo', e.target.files[0])}
            />
          </div>

          <div>
            <label>Notes</label><br />
            <textarea
              className="border w-full"
              value={room.notes}
              onChange={(e) => handleChange(index, null, 'notes', e.target.value)}
            />
          </div>

          <fieldset className="border mt-4 p-2">
            <legend><strong>Base & Case</strong></legend>
            <label><input type="checkbox" checked={room.baseAndCase.paint} onChange={(e) => handleChange(index, 'baseAndCase', 'paint', e.target.checked)} /> Paint</label>
            <label className="ml-4"><input type="checkbox" checked={room.baseAndCase.replace} onChange={(e) => handleChange(index, 'baseAndCase', 'replace', e.target.checked)} /> Replace</label>
            <label className="ml-4">Linear Feet:</label>
            <input className="border ml-1" value={room.baseAndCase.linearFeet} onChange={(e) => handleChange(index, 'baseAndCase', 'linearFeet', e.target.value)} />
            <label className="ml-2">Material:</label>
            <input className="border ml-1" value={room.baseAndCase.material} onChange={(e) => handleChange(index, 'baseAndCase', 'material', e.target.value)} />
          </fieldset>

          <fieldset className="border mt-4 p-2">
            <legend><strong>Drywall</strong></legend>
            <label>Ceiling Type:</label>
            <input className="border ml-1" value={room.drywall.ceilingType} onChange={(e) => handleChange(index, 'drywall', 'ceilingType', e.target.value)} />
            <div className="mt-2">
              <label><input type="checkbox" checked={room.drywall.drywallPatches} onChange={(e) => handleChange(index, 'drywall', 'drywallPatches', e.target.checked)} /> Drywall Patches</label>
              <label className="ml-4"><input type="checkbox" checked={room.drywall.moldDrywall} onChange={(e) => handleChange(index, 'drywall', 'moldDrywall', e.target.checked)} /> Mold Resistant</label>
              <label className="ml-4"><input type="checkbox" checked={room.drywall.insulation} onChange={(e) => handleChange(index, 'drywall', 'insulation', e.target.checked)} /> Insulation</label>
              <label className="ml-4"><input type="checkbox" checked={room.drywall.deleteIntercom} onChange={(e) => handleChange(index, 'drywall', 'deleteIntercom', e.target.checked)} /> Delete Intercom</label>
              <label className="ml-4"><input type="checkbox" checked={room.drywall.backingRequired} onChange={(e) => handleChange(index, 'drywall', 'backingRequired', e.target.checked)} /> Backing Required</label>
            </div>
          </fieldset>
        </div>
      ))}

      <button onClick={addRoom} className="bg-green-600 text-white px-4 py-2 rounded mt-6">+ Add Another Room</button>

      <details className="mt-8">
        <summary className="cursor-pointer font-semibold text-gray-800">🔍 Developer Preview (JSON Output)</summary>
        <pre className="bg-gray-100 text-xs mt-2 p-2 rounded overflow-auto max-w-full whitespace-pre-wrap">{JSON.stringify({ totalSqft, rooms }, null, 2)}</pre>
      </details>
    </div>
  );
}

