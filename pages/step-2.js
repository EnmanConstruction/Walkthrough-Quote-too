// File: /pages/walkthrough/step-2.js

import { useState } from 'react';

const defaultRoom = {
  type: '',
  length: '',
  width: '',
  electrical: {
    outlets: '',
    switches: '',
    switchType: [],
    smokeDetector: false,
    gfcis: '',
    lightFixtures: ''
  },
  doors: {
    type: '',
    hinges: false,
    doorStops: false,
    knobType: '',
    knobColor: ''
  },
  plumbing: {
    tub: false,
    tubDirection: '',
    tubSize: '',
    showerRod: false,
    toilet: false,
    sink: false,
    plumbingNotes: ''
  },
  cabinets: {
    roomLocation: '',
    lowers: '',
    uppers: '',
    gableEnds: '',
    plumbingLocation: '',
    electricalLocation: '',
    counterType: ''
  },
  notes: '',
  photo: null
};

export default function StepTwo() {
  const [rooms, setRooms] = useState([{ ...defaultRoom }]);

  const addRoom = () => {
    setRooms([...rooms, { ...defaultRoom }]);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📍 Step 2: Room-by-Room Data</h1>
      {rooms.map((room, index) => (
        <div key={index} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Room {index + 1}</h2>
          <label>Room Type:
            <select>
              <option>Bathroom</option>
              <option>Kitchen</option>
              <option>Bedroom</option>
              <option>Living Room</option>
              <option>Common Area</option>
              <option>Other</option>
            </select>
          </label><br/><br/>

          <label>Dimensions (L x W in ft):
            <input placeholder="Length" /> x <input placeholder="Width" />
          </label><br/><br/>

          <strong>Electrical</strong><br/>
          Outlets: <input placeholder="0" /> <br/>
          Switches: <input placeholder="0" /> <br/>
          Switch Type: <input placeholder="Single / 3-way / Dimmer" /> <br/>
          GFCIs: <input placeholder="0" /> <br/>
          Smoke Detector: <input type="checkbox" /> <br/>
          Light Fixtures: <input placeholder="0" /> <br/>

          <strong>Doors</strong><br/>
          Door Type: <input placeholder="Bi-fold / Bi-pass / Privacy / Passenger" /><br/>
          Hinges: <input type="checkbox" /> <br/>
          Door Stops: <input type="checkbox" /> <br/>
          Knob Type: <input placeholder="Passage / Privacy" /> <br/>
          Knob Color: <input placeholder="Black / Nickel / Chrome" /> <br/>

          <strong>Plumbing</strong><br/>
          Tub Installed: <input type="checkbox" /> <br/>
          Tub Direction: <input placeholder="Left / Right / Alcove" /> <br/>
          Tub Size: <input placeholder="60x30" /> <br/>
          Shower Rod Needed: <input type="checkbox" /> <br/>
          Toilet: <input type="checkbox" /> <br/>
          Sink: <input type="checkbox" /> <br/>
          Plumbing Notes: <textarea rows="2" style={{ width: '100%' }} /> <br/>

          <strong>Cabinets</strong><br/>
          Room Location: <input placeholder="Kitchen / Bathroom / Other" /><br/>
          Base Cabinets (LF): <input /><br/>
          Upper Cabinets (LF): <input /><br/>
          Gable Ends: <input /><br/>
          Plumbing Location: <input /><br/>
          Electrical Location: <input /><br/>
          Countertop Type: <input placeholder="Laminate / Quartz / Other" /><br/>

          <strong>Notes / Photos</strong><br/>
          Notes: <textarea rows="3" style={{ width: '100%' }} /><br/>
          Upload Photo: <input type="file" /><br/>
        </div>
      ))}
      <button onClick={addRoom} style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: 'white', borderRadius: '4px' }}>+ Add Another Room</button>
    </div>
  );
}
