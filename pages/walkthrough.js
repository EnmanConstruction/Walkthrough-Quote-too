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
  countertops: { sqft: '', type: '' },
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
  materials: [],
};

export default function Walkthrough() {
  const [rooms, setRooms] = useState([defaultRoom]);
  const [totalSqft, setTotalSqft] = useState('');
  const [showJson, setShowJson] = useState(false);

  const addRoom = () => setRooms([...rooms, { ...defaultRoom }] );
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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Step 2: Room-by-Room Walkthrough</h1>

      <label className="block font-semibold mb-1">Total Project Square Footage:</label>
      <input
        className="w-full p-2 border rounded mb-6"
        type="text"
        placeholder="e.g. 1200"
        value={totalSqft}
        onChange={(e) => setTotalSqft(e.target.value)}
      />

      {rooms.map((room, index) => (
        <div key={index} className="border p-4 rounded shadow mb-6">
          <h2 className="text-xl font-bold mb-2">Room {index + 1}</h2>

          <button
            onClick={() => removeRoom(index)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded mb-2"
          >Remove</button>

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

            <div className="col-span-2 flex gap-2">
              <input
                className="w-1/2 p-2 border rounded"
                placeholder="Length"
                value={room.length}
                onChange={(e) => handleChange(index, null, 'length', e.target.value)}
              />
              <input
                className="w-1/2 p-2 border rounded"
                placeholder="Width"
                value={room.width}
                onChange={(e) => handleChange(index, null, 'width', e.target.value)}
              />
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

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Trade Summary</h3>
            <p><strong>Flooring:</strong> {room.flooring.type || '—'} ({room.flooring.area || '0'} sqft)</p>
            <p><strong>Painting:</strong> Walls: {room.painting.walls ? 'Yes' : '—'}, Cabinets: {room.painting.cabinets ? 'Yes' : '—'}</p>
            <p><strong>Base & Case:</strong> {room.baseAndCase.paint || room.baseAndCase.replace ? 'Yes' : '—'}</p>
            <p><strong>Drywall:</strong> {room.drywall.ceilingType || '—'}</p>
            <p><strong>Electrical:</strong> {room.electrical.outlets || 0} outlets, {room.electrical.switches || 0} switches</p>
            <p><strong>Cabinets:</strong> Uppers: {room.cabinets.upperQty || 0}, Lowers: {room.cabinets.lowerQty || 0}</p>
            <p><strong>Countertops:</strong> {room.countertops.sqft || 0} sqft ({room.countertops.type || '—'})</p>
            <p><strong>Plumbing:</strong> Tub: {room.plumbing.tub ? 'Yes' : '—'}, Sink: {room.plumbing.sink ? 'Yes' : '—'}, Toilet: {room.plumbing.toilet ? 'Yes' : '—'}</p>
          </div>
        </div>
      ))}

      <button
        onClick={addRoom}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >+ Add Another Room</button>

      <div className="mt-6">
        <button
          onClick={() => setShowJson(!showJson)}
          className="text-sm text-gray-600 hover:text-black"
        >
          {showJson ? '▼' : '▶'} 🔍 Developer Preview (JSON Output)
        </button>
        {showJson && (
          <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
            {JSON.stringify({ totalSqft, rooms }, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
