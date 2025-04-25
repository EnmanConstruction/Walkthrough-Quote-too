
// âœ… FIELD-FIRST WALKTHROUGH.JS (Full Code)

import defaultRoom from '../lib/defaultRoom';
import { useState } from 'react';

export default function Walkthrough() {
  const [rooms, setRooms] = useState([{ ...defaultRoom }]);

  const handleChange = (index, section, field, value) => {
    const updated = [...rooms];
    updated[index][section][field] = value;
    setRooms(updated);
  };

  const handleNested = (index, section, group, field, value) => {
    const updated = [...rooms];
    updated[index][section][group][field] = value;
    setRooms(updated);
  };

  const addRoom = () => setRooms([...rooms, { ...defaultRoom }]);
  const removeRoom = (index) => {
    const updated = [...rooms];
    updated.splice(index, 1);
    setRooms(updated);
  };

  const renderInput = (label, value, onChange, type = 'text') => (
    <div style={{ marginBottom: '8px' }}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );

  const renderCheckbox = (label, checked, onChange) => (
    <div style={{ marginBottom: '6px' }}>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} /> {label}
      </label>
    </div>
  );

  const Section = ({ title, children }) => (
    <div style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}>
      <h3>{title}</h3>
      {children}
    </div>
  );

  return (
    <div>
      <h1>Field-First Walkthrough</h1>
      {rooms.map((room, index) => (
        <div key={index} style={{ margin: '30px 0', border: '2px solid black', padding: '15px' }}>
          <h2>Room {index + 1}</h2>
          <button onClick={() => removeRoom(index)}>Remove</button>

          {renderInput("Room Label", room.label, e => handleChange(index, '', 'label', e.target.value))}
          {renderInput("Room Type", room.type, e => handleChange(index, '', 'type', e.target.value))}
          {renderInput("Notes", room.notes, e => handleChange(index, '', 'notes', e.target.value))}

          <Section title="Measurements">
            {renderInput("Length (ft)", room.measurements.length, e => handleChange(index, 'measurements', 'length', e.target.value))}
            {renderInput("Width (ft)", room.measurements.width, e => handleChange(index, 'measurements', 'width', e.target.value))}
            {renderInput("Ceiling Height (ft)", room.measurements.ceilingHeight, e => handleChange(index, 'measurements', 'ceilingHeight', e.target.value))}
            {renderInput("Total Sqft", room.measurements.sqft, e => handleChange(index, 'measurements', 'sqft', e.target.value))}
            {renderInput("Baseboard LF", room.measurements.baseLF, e => handleChange(index, 'measurements', 'baseLF', e.target.value))}
            {renderInput("Casing LF", room.measurements.caseLF, e => handleChange(index, 'measurements', 'caseLF', e.target.value))}
            {renderInput("Tile Edge LF", room.measurements.tileLF, e => handleChange(index, 'measurements', 'tileLF', e.target.value))}
            {renderInput("Cabinet LF", room.measurements.cabinetLF, e => handleChange(index, 'measurements', 'cabinetLF', e.target.value))}
          </Section>

          <Section title="Counts">
            {renderInput("Windows", room.counts.windows, e => handleChange(index, 'counts', 'windows', e.target.value))}
            {renderInput("Doors", room.counts.doors, e => handleChange(index, 'counts', 'doors', e.target.value))}
            {renderInput("Outlets", room.counts.outlets, e => handleChange(index, 'counts', 'outlets', e.target.value))}
            {renderInput("Switches", room.counts.switches, e => handleChange(index, 'counts', 'switches', e.target.value))}
            {renderInput("Lights", room.counts.lights, e => handleChange(index, 'counts', 'lights', e.target.value))}
            {renderInput("Smoke Detectors", room.counts.smokeDetectors, e => handleChange(index, 'counts', 'smokeDetectors', e.target.value))}

            {renderCheckbox("Tub", room.counts.fixtures.tub, e => handleNested(index, 'counts', 'fixtures', 'tub', e.target.checked))}
            {renderCheckbox("Toilet", room.counts.fixtures.toilet, e => handleNested(index, 'counts', 'fixtures', 'toilet', e.target.checked))}
            {renderCheckbox("Sink", room.counts.fixtures.sink, e => handleNested(index, 'counts', 'fixtures', 'sink', e.target.checked))}
          </Section>
        </div>
      ))}
      <button onClick={addRoom}>+ Add Room</button>
    </div>
  );
}
