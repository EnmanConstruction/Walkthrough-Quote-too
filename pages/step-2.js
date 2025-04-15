import { useState } from 'react';

const defaultRoom = {
  label: '',
  type: 'Bathroom',
  length: '',
  width: '',
  photo: null,
  notes: '',
  electrical: {
    outlets: '',
    switches: '',
    switchType: [],
    gfci: '',
    smokeDetector: false,
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
    absFittings: false,
    copperPipe: false,
    shutOffs: false,
    absPipe: false,
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
  drywallPaint: {
    deleteIntercom: false,
    headerBypass: false,
    buildoutBypass: false,
    headerKitchen: false,
    ceilingType: '',
    paintCeiling: false,
    paintWalls: false,
    paintBaseCase: false,
    paintCabinets: false,
    sealerRequired: false,
    insulationVB: false,
    moldResistant: false,
    patches: false,
    backing: false,
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
    tileNotes: '',
  }
};

export default function Step2() {
  const [rooms, setRooms] = useState([defaultRoom]);

  const addRoom = () => {
    setRooms([...rooms, defaultRoom]);
  };

  const removeRoom = (indexToRemove) => {
    const updated = rooms.filter((_, i) => i !== indexToRemove);
    setRooms(updated);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📍 Step 2: Room-by-Room Walkthrough</h1>
      {rooms.map((room, index) => (
        <div key={index} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>{room.label || `Room ${index + 1}`}</h2>
          <label>Room Label:</label>
          <input
            value={room.label}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].label = e.target.value;
              setRooms(updated);
            }}
            placeholder="e.g., Main Bath, Kitchen A"
          /><br />

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
          </select><br />

          <label>Dimensions (L x W in ft):</label>
          <input
            placeholder="Length"
            value={room.length}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].length = e.target.value;
              setRooms(updated);
            }}
          />
          x
          <input
            placeholder="Width"
            value={room.width}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].width = e.target.value;
              setRooms(updated);
            }}
          /><br />

          <label>Upload Photo:</label>
          <input type="file" /><br />

          <label>Notes:</label>
          <textarea
            rows="2"
            value={room.notes}
            onChange={(e) => {
              const updated = [...rooms];
              updated[index].notes = e.target.value;
              setRooms(updated);
            }}
            style={{ width: '100%' }}
          /><br />

          <button onClick={() => removeRoom(index)} style={{ marginTop: '1rem', backgroundColor: 'red', color: 'white' }}>Remove Room</button>
        </div>
      ))}
      <button onClick={addRoom} style={{ marginTop: '1rem', backgroundColor: 'black', color: 'white' }}>+ Add Another Room</button>
    </div>
  );
}
