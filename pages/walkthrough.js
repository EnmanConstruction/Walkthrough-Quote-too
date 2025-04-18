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
  const [rooms, setRooms] = useState([JSON.parse(JSON.stringify(defaultRoom))]);
  const [totalSqft, setTotalSqft] = useState('');
  const [expanded, setExpanded] = useState(false);

  const addRoom = () => setRooms([...rooms, JSON.parse(JSON.stringify(defaultRoom))]);
  const removeRoom = (index) => setRooms(rooms.filter((_, i) => i !== index));
  const handleChange = (index, section, field, value) => {
    const updatedRooms = [...rooms];
    if (section && typeof updatedRooms[index][section] === 'object') {
      updatedRooms[index][section][field] = value;
    } else {
      updatedRooms[index][field] = value;
    }
    setRooms(updatedRooms);
  };

  const displayRoomTitle = (index, label) => label || `Room ${index + 1}`;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Step 2: Room-by-Room Walkthrough</h1>
      <label>Total Project Square Footage:</label>
      <input
        type="text"
        className="border ml-2 mb-4"
        placeholder="e.g. 1200"
        value={totalSqft}
        onChange={(e) => setTotalSqft(e.target.value)}
      /><br />

      {rooms.map((room, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold">{displayRoomTitle(index, room.label)}</h2>

          <button onClick={() => removeRoom(index)} className="mb-2">Remove</button><br />

          <label>Room Label</label>
          <input
            type="text"
            placeholder="e.g. Main Bath, Kitchen A"
            value={room.label}
            onChange={(e) => handleChange(index, null, 'label', e.target.value)}
          /><br />

          <label>Room Type</label>
          <select
            value={room.type}
            onChange={(e) => handleChange(index, null, 'type', e.target.value)}
          >
            <option>Bathroom</option>
            <option>Kitchen</option>
            <option>Bedroom</option>
            <option>Common Area</option>
            <option>Other</option>
          </select><br />

          <label>Dimensions (L x W in ft)</label><br />
          <input
            type="text"
            placeholder="Length"
            value={room.length}
            onChange={(e) => handleChange(index, null, 'length', e.target.value)}
          />
          <input
            type="text"
            placeholder="Width"
            value={room.width}
            onChange={(e) => handleChange(index, null, 'width', e.target.value)}
          /><br />

          <label>Upload Photo</label>
          <input
            type="file"
            onChange={(e) => handleChange(index, null, 'photo', e.target.files[0])}
          /><br />

          <label>Notes</label><br />
          <textarea
            value={room.notes}
            onChange={(e) => handleChange(index, null, 'notes', e.target.value)}
          /><br /><br />

          <h3 className="font-bold text-lg">Trade Summary</h3>
          <p><strong>Flooring:</strong> {room.flooring.type || '—'} ({room.flooring.area || '0'} sqft)</p>
          <p><strong>Painting:</strong> Walls: {room.painting.walls || '—'}, Cabinets: {room.painting.cabinets || '—'}</p>
          <p><strong>Base & Case:</strong> {room.baseAndCase.paint ? 'Paint' : '—'}</p>
          <p><strong>Drywall:</strong> {room.drywall.ceilingType || '—'}</p>
          <p><strong>Electrical:</strong> {room.electrical.outlets || 0} outlets, {room.electrical.switches || 0} switches</p>
          <p><strong>Cabinets:</strong> Uppers: {room.cabinets.upperQty || 0}, Lowers: {room.cabinets.lowerQty || 0}</p>
          <p><strong>Countertops:</strong> {room.countertops.sqft || 0} sqft ({room.countertops.type || '—'})</p>
          <p><strong>Plumbing:</strong> Tub: {room.plumbing.tubDirection || '—'}, Sink: {room.plumbing.sink ? 'Yes' : '—'}, Toilet: {room.plumbing.toilet ? 'Yes' : '—'}</p>
        </div>
      ))}

      <button onClick={addRoom}>+ Add Another Room</button>

      <details className="mt-6">
        <summary className="font-medium">🔍 Developer Preview (JSON Output)</summary>
        <pre>{JSON.stringify({ totalSqft, rooms }, null, 2)}</pre>
      </details>
    </div>
  );
}
