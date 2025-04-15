import { useState } from 'react';

const defaultRoom = {
  label: '',
  type: 'Bathroom',
  length: '',
  width: '',
  electrical: {
    outlets: '',
    switches: '',
    switchType: [],
    smokeDetector: false,
    gfci: '',
    lightFixtures: '',
  },
  doors: {
    type: '',
    hinges: false,
    doorStops: false,
    knobType: '',
    knobColor: '',
  },
  plumbing: {
    tub: false,
    tubDirection: '',
    tubSize: '',
    showerRod: false,
    toilet: false,
    sink: false,
    shutOffs: false,
    absFittings: false,
    copperPipe: false,
    fittings: '',
    absPipe: '',
    pTrap: false,
    pTrapCleanout: false,
    plumbingNotes: '',
  },
  cabinets: {
    roomLocation: '',
    lowers: '',
    uppers: '',
    gableEnds: '',
    plumbingLocation: '',
    electricalLocation: '',
    countertopType: '',
  },
  drywall: {
    deleteIntercom: false,
    headerBiPass: false,
    buildoutBiPass: false,
    headerKitchen: false,
    ceilingType: '',
    insulationVB: false,
    moldResistant: false,
    patches: false,
    backing: false,
  },
  painting: {
    ceiling: false,
    walls: false,
    baseAndCase: false,
    cabinets: false,
    sealerRequired: false,
  },
  tile: {
    tubTile: false,
    backsplashTile: false,
    tileEdge: '',
    tileColor: '',
    tileEdgeColor: '',
    tileEdgeSize: '',
    grout: '',
    groutSealer: false,
  },
  notes: '',
  photo: null
};

export default function Step2() {
  const [rooms, setRooms] = useState([JSON.parse(JSON.stringify(defaultRoom))]);

  const addRoom = () => {
    setRooms([...rooms, JSON.parse(JSON.stringify(defaultRoom))]);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📍 Step 2: Room-by-Room Walkthrough</h1>
      {rooms.map((room, index) => (
        <div key={index} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>{room.label || `Room ${index + 1}`}</h2>
          <div>
            <label>Room Label:</label>
            <input
              type="text"
              placeholder="e.g., Main Bath, Kitchen A"
              value={room.label}
              onChange={(e) => {
                const updated = [...rooms];
                updated[index].label = e.target.value;
                setRooms(updated);
              }}
            />
          </div>
          <div>
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
            </select>
          </div>
          <div>
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
            />
          </div>
          <div>
            <label>Upload Photo:</label>
            <input
              type="file"
              onChange={(e) => {
                const updated = [...rooms];
                updated[index].photo = e.target.files[0];
                setRooms(updated);
              }}
            />
          </div>
          <div>
            <label>Notes:</label>
            <textarea
              value={room.notes}
              onChange={(e) => {
                const updated = [...rooms];
                updated[index].notes = e.target.value;
                setRooms(updated);
              }}
              rows={3}
              style={{ width: '100%' }}
            />
          </div>
          <button
            onClick={() => {
              const updated = [...rooms];
              updated.splice(index, 1);
              setRooms(updated);
            }}
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
