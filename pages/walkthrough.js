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
  const [rooms, setRooms] = useState([defaultRoom]);
  const [totalSqft, setTotalSqft] = useState('');
  const [quoteHourlyRate, setQuoteHourlyRate] = useState('120');

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
    setRooms(updated);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Step 2: Room-by-Room Walkthrough</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-semibold mb-1">Total Project Square Footage:</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="e.g. 1200"
            value={totalSqft}
            onChange={(e) => setTotalSqft(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Quote Hourly Rate ($/hr):</label>
          <input
            className="w-full p-2 border rounded"
            type="number"
            min="0"
            value={quoteHourlyRate}
            onChange={(e) => setQuoteHourlyRate(e.target.value)}
          />
        </div>
      </div>

      {rooms.map((room, index) => (
        <div key={index} className="border p-4 rounded shadow mb-8">
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
                  value={room.length}
                  placeholder="Length"
                  onChange={(e) => handleChange(index, null, 'length', e.target.value)}
                />
                <input
                  className="w-1/2 p-2 border rounded"
                  value={room.width}
                  placeholder="Width"
                  onChange={(e) => handleChange(index, null, 'width', e.target.value)}
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
            <p className="text-lg font-semibold">Trade Sections</p>

            <div className="mt-2">
              <label className="block font-medium">Flooring Type</label>
              <input
                className="w-full p-2 border rounded"
                value={room.flooring.type}
                placeholder="e.g. LVP, Tile, Carpet"
                onChange={(e) => handleChange(index, 'flooring', 'type', e.target.value)}
              />
            </div>

            <div className="mt-2">
              <label className="block font-medium">Flooring Area (sqft)</label>
              <input
                className="w-full p-2 border rounded"
                type="number"
                value={room.flooring.area}
                placeholder="e.g. 125"
                onChange={(e) => handleChange(index, 'flooring', 'area', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addRoom}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
      >+ Add Another Room</button>
    </div>
  );
}
