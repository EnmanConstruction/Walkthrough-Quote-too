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
    plumbingNotes: '',
    absFittings: false,
    copperPipe: false,
    shutOffs: false,
    absPipe: false,
    pTrap: false,
    pTrapCleanout: false,
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
    biPassHeader: false,
    biPassBuildout: false,
    kitchenHeader: false,
    ceilingType: '',
    paintCeiling: false,
    paintWalls: false,
    paintBaseCase: false,
    paintCabinets: false,
    sealerRequired: false,
    insulation: false,
    moldDrywall: false,
    drywallPatches: false,
    backingRequired: false,
  },
  tile: {
    tubTile: false,
    backsplash: false,
    edge: '',
    tileColor: '',
    edgeColor: '',
    edgeSize: '',
    grout: '',
    groutSealer: false,
  },
};

export default function Step2() {
  const [squareFootage, setSquareFootage] = useState('');
  const [rooms, setRooms] = useState([defaultRoom]);

  const addRoom = () => {
    setRooms([...rooms, defaultRoom]);
  };

  const removeRoom = (index) => {
    const newRooms = [...rooms];
    newRooms.splice(index, 1);
    setRooms(newRooms);
  };

  const handleChange = (index, field, value) => {
    const updated = [...rooms];
    updated[index][field] = value;
    setRooms(updated);
  };

  const handleNestedChange = (index, group, field, value) => {
    const updated = [...rooms];
    updated[index][group][field] = value;
    setRooms(updated);
  };

  const renderRoomFields = (room, index) => {
    const showPlumbing = room.type === 'Bathroom' || room.type === 'Kitchen';
    const showCabinets = room.type === 'Bathroom' || room.type === 'Kitchen' || room.type === 'Other';
    const showDrywall = true;
    const showTile = room.type === 'Bathroom' || room.type === 'Kitchen';

    return (
      <div key={index} style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '1rem', marginBottom: '2rem' }}>
        <h2>{room.label || `Room ${index + 1}`}</h2>

        <label>Room Label: </label>
        <input
          value={room.label}
          onChange={(e) => handleChange(index, 'label', e.target.value)}
          placeholder="e.g., Main Bath, Kitchen A"
        /><br/>

        <label>Room Type: </label>
        <select value={room.type} onChange={(e) => handleChange(index, 'type', e.target.value)}>
          <option>Bathroom</option>
          <option>Kitchen</option>
          <option>Bedroom</option>
          <option>Common Area</option>
          <option>Other</option>
        </select><br/>

        <label>Dimensions (L x W in ft): </label>
        <input
          type="text"
          placeholder="Length"
          value={room.length}
          onChange={(e) => handleChange(index, 'length', e.target.value)}
        /> X
        <input
          type="text"
          placeholder="Width"
          value={room.width}
          onChange={(e) => handleChange(index, 'width', e.target.value)}
        /><br/>

        <label>Upload Photo: </label>
        <input
          type="file"
          onChange={(e) => handleChange(index, 'photo', e.target.files[0])}
        /><br/>

        <label>Notes: </label>
        <textarea
          rows="2"
          value={room.notes}
          onChange={(e) => handleChange(index, 'notes', e.target.value)}
          style={{ width: '100%' }}
        /><br/>

        {/* --- Electrical --- */}
        <h4>Electrical</h4>
        <input placeholder="Outlets" value={room.electrical.outlets} onChange={(e) => handleNestedChange(index, 'electrical', 'outlets', e.target.value)} />
        <input placeholder="Switches" value={room.electrical.switches} onChange={(e) => handleNestedChange(index, 'electrical', 'switches', e.target.value)} />
        <input placeholder="Switch Type" value={room.electrical.switchType} onChange={(e) => handleNestedChange(index, 'electrical', 'switchType', e.target.value)} />
        <input placeholder="GFCIs" value={room.electrical.gfci} onChange={(e) => handleNestedChange(index, 'electrical', 'gfci', e.target.value)} />
        <input placeholder="Light Fixtures" value={room.electrical.lightFixtures} onChange={(e) => handleNestedChange(index, 'electrical', 'lightFixtures', e.target.value)} />
        <label><input type="checkbox" checked={room.electrical.smokeDetector} onChange={(e) => handleNestedChange(index, 'electrical', 'smokeDetector', e.target.checked)} /> Smoke Detector</label>

        {/* --- Plumbing --- */}
        {showPlumbing && (
          <>
            <h4>Plumbing</h4>
            <label><input type="checkbox" checked={room.plumbing.tub} onChange={(e) => handleNestedChange(index, 'plumbing', 'tub', e.target.checked)} /> Tub Installed</label>
            <input placeholder="Tub Direction" value={room.plumbing.tubDirection} onChange={(e) => handleNestedChange(index, 'plumbing', 'tubDirection', e.target.value)} />
            <input placeholder="Tub Size" value={room.plumbing.tubSize} onChange={(e) => handleNestedChange(index, 'plumbing', 'tubSize', e.target.value)} />
            <label><input type="checkbox" checked={room.plumbing.showerRod} onChange={(e) => handleNestedChange(index, 'plumbing', 'showerRod', e.target.checked)} /> Shower Rod Needed</label>
            <label><input type="checkbox" checked={room.plumbing.toilet} onChange={(e) => handleNestedChange(index, 'plumbing', 'toilet', e.target.checked)} /> Toilet</label>
            <label><input type="checkbox" checked={room.plumbing.sink} onChange={(e) => handleNestedChange(index, 'plumbing', 'sink', e.target.checked)} /> Sink</label>
            <input placeholder="Plumbing Notes" value={room.plumbing.plumbingNotes} onChange={(e) => handleNestedChange(index, 'plumbing', 'plumbingNotes', e.target.value)} />
            <label><input type="checkbox" checked={room.plumbing.absFittings} onChange={(e) => handleNestedChange(index, 'plumbing', 'absFittings', e.target.checked)} /> ABS Fittings</label>
            <label><input type="checkbox" checked={room.plumbing.copperPipe} onChange={(e) => handleNestedChange(index, 'plumbing', 'copperPipe', e.target.checked)} /> Copper Pipe</label>
            <label><input type="checkbox" checked={room.plumbing.shutOffs} onChange={(e) => handleNestedChange(index, 'plumbing', 'shutOffs', e.target.checked)} /> Shut Offs</label>
            <label><input type="checkbox" checked={room.plumbing.absPipe} onChange={(e) => handleNestedChange(index, 'plumbing', 'absPipe', e.target.checked)} /> ABS Pipe</label>
            <label><input type="checkbox" checked={room.plumbing.pTrap} onChange={(e) => handleNestedChange(index, 'plumbing', 'pTrap', e.target.checked)} /> P-Trap</label>
            <label><input type="checkbox" checked={room.plumbing.pTrapCleanout} onChange={(e) => handleNestedChange(index, 'plumbing', 'pTrapCleanout', e.target.checked)} /> P-Trap with Cleanout</label>
          </>
        )}

        {/* --- Additional field groups like drywall, tile, cabinets, etc. would go here in similar format --- */}

        <br/><button onClick={() => removeRoom(index)} style={{ background: 'red', color: 'white', marginTop: '10px' }}>Remove Room</button>
      </div>
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📍 Step 2: Room-by-Room Walkthrough</h1>
      <label><strong>Total Project Square Footage:</strong></label>
      <textarea
        value={squareFootage}
        onChange={(e) => setSquareFootage(e.target.value)}
        placeholder="Enter total square footage"
        rows="1"
        style={{ width: '100%' }}
      />
      <br/><br/>

      {rooms.map(renderRoomFields)}
      <button onClick={addRoom} style={{ marginTop: '1rem', background: 'black', color: 'white' }}>+ Add Another Room</button>
    </div>
  );
}
