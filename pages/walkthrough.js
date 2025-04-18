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
  materials: [],
};

export default function Walkthrough() {
  const [rooms, setRooms] = useState([defaultRoom]);
  const [totalSqft, setTotalSqft] = useState('');

  const calculateMaterials = (room) => {
    const materials = [];
    if (room.plumbing.tub) materials.push('Tub silicone', 'Caulking', 'Tub spout');
    if (room.tile.hasBacksplash) materials.push('Tile adhesive', 'Grout', 'Grout sealer');
    if (room.tile.edgeColor || room.tile.edgeSize) materials.push('Matching Schluter edge profile');
    return materials;
  };

  const addRoom = () => setRooms([...rooms, { ...defaultRoom }]);
  const removeRoom = (index) => setRooms(rooms.filter((_, i) => i !== index));
  const displayRoomTitle = (index, label) => label || `Room ${index + 1}`;

  const handleChange = (index, section, field, value) => {
    const updated = [...rooms];
    if (section && typeof updated[index][section] === 'object') {
      updated[index][section][field] = value;
    } else {
      updated[index][field] = value;
    }

    const length = parseFloat(updated[index].length);
    const width = parseFloat(updated[index].width);
    if (!isNaN(length) && !isNaN(width)) {
      updated[index].flooring.area = (length * width).toFixed(2);
    }

    updated[index].materials = calculateMaterials(updated[index]);
    setRooms(updated);
  };

  const showPlumbing = (type) => type === 'Bathroom' || type === 'Kitchen';

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Step 2: Room-by-Room Walkthrough</h1>

      <label className="block font-semibold mb-1">Total Project Square Footage:</label>
      <input
        className="w-full p-2 border rounded mb-6"
        type="number"
        placeholder="e.g. 1200"
        value={totalSqft}
        onChange={(e) => setTotalSqft(e.target.value)}
        min="0"
      />

      {rooms.map((room, index) => (
        <div key={index} className="border p-4 rounded shadow mb-8 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{displayRoomTitle(index, room.label)}</h2>
            <button
              onClick={() => removeRoom(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >Remove</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Room Label</label>
              <input
                className="w-full p-2 border rounded"
                value={room.label}
                placeholder="e.g. Main Bath, Kitchen A"
                onChange={(e) => handleChange(index, null, 'label', e.target.value)}
              />
            </div>

            <div>
              <label className="block font-medium">Room Type</label>
              <select
                className="w-full p-2 border rounded"
                value={room.type}
                onChange={(e) => handleChange(index, null, 'type', e.target.value)}
              >
                <option>Bathroom</option>
                <option>Kitchen</option>
                <option>Bedroom</option>
                <option>Common Area</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block font-medium">Dimensions (L x W in ft)</label>
              <div className="flex gap-2">
                <input
                  className="w-1/2 p-2 border rounded"
                  type="number"
                  value={room.length}
                  placeholder="Length"
                  onChange={(e) => handleChange(index, null, 'length', e.target.value)}
                  min="0"
                />
                <input
                  className="w-1/2 p-2 border rounded"
                  type="number"
                  value={room.width}
                  placeholder="Width"
                  onChange={(e) => handleChange(index, null, 'width', e.target.value)}
                  min="0"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block font-medium">Upload Photo</label>
              <input
                className="w-full"
                type="file"
                onChange={(e) => handleChange(index, null, 'photo', e.target.files[0])}
              />
            </div>

            <div className="col-span-2">
              <label className="block font-medium">Notes</label>
              <textarea
                className="w-full p-2 border rounded"
                value={room.notes}
                onChange={(e) => handleChange(index, null, 'notes', e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Trade Sections Summary</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
              <div><strong>Flooring:</strong> {room.flooring.type || '—'} ({room.flooring.area || '0'} sq ft)</div>
              <div><strong>Tile:</strong> Tub: {room.tile.hasTubTile ? 'Yes' : 'No'}, Backsplash: {room.tile.hasBacksplash ? 'Yes' : 'No'}, Edge: {room.tile.edge || '—'}, Color: {room.tile.tileColor || '—'}</div>
              <div><strong>Painting:</strong> Walls: {room.painting.walls ? 'Yes' : 'No'}, Ceiling: {room.painting.ceiling ? 'Yes' : 'No'}, Sealer: {room.painting.sealerRequired ? 'Yes' : 'No'}</div>
              <div><strong>Base & Case:</strong> Replace: {room.baseAndCase.replace ? 'Yes' : 'No'}, Material: {room.baseAndCase.material || '—'}</div>
              <div><strong>Drywall:</strong> Patches: {room.drywall.drywallPatches ? 'Yes' : 'No'}, Mold Res: {room.drywall.moldDrywall ? 'Yes' : 'No'}, Insul: {room.drywall.insulation ? 'Yes' : 'No'}</div>
              <div><strong>Electrical:</strong> Outlets: {room.electrical.outlets || '—'}, Smoke: {room.electrical.smokeDetector ? 'Yes' : 'No'}</div>
              <div><strong>Cabinets:</strong> Uppers: {room.cabinets.upperQty || '0'}, Vanity: {room.cabinets.vanityQty || '0'} ({room.cabinets.vanitySize || '—'})</div>
              <div><strong>Countertops:</strong> {room.countertops.sqft || '0'} sq ft, {room.countertops.type || '—'}</div>
              {showPlumbing(room.type) && (
                <div><strong>Plumbing:</strong> Tub: {room.plumbing.tub ? 'Yes' : 'No'}, Dir: {room.plumbing.tubDirection || '—'}, Shower Rod: {room.plumbing.showerRod ? 'Yes' : 'No'}</div>
              )}
              {room.materials.length > 0 && (
                <div className="col-span-2"><strong>⚙️ Materials Triggered:</strong> {room.materials.join(', ')}</div>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addRoom}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
      >+ Add Another Room</button>

      <div className="mt-10 bg-gray-100 border border-gray-300 rounded p-4">
        <h4 className="text-md font-semibold mb-2">🔍 Developer Preview (JSON Output)</h4>
        <pre className="text-xs overflow-x-auto whitespace-pre-wrap bg-white p-2 border rounded">
          {JSON.stringify({ totalSqft, rooms }, null, 2)}
        </pre>
        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold">
          ➡️ Continue to Step 3
        </button>
      </div>
    </div>
  );
}
