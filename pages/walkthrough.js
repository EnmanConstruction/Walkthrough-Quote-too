
// âœ… FINAL WALKTHROUGH.JS â€” Full Conditional Logic + Grouping (MAC Friendly Version)
// Paste this into /pages/walkthrough.js in your project

import defaultRoom from '../lib/defaultRoom';
import { useState } from 'react';

export default function Walkthrough() {
  const [totalSqft, setTotalSqft] = useState('');
  const [hourlyRate, setHourlyRate] = useState(120);
  const [rooms, setRooms] = useState([{ ...defaultRoom }]);

  const handleRoomChange = (index, field, value) => {
    const updated = [...rooms];
    updated[index][field] = value;
    setRooms(updated);
  };

  const handleTradeChange = (index, trade, field, value) => {
    const updated = [...rooms];
    updated[index][trade][field] = value;
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
    <div style={{ marginBottom: '8px' }}>
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

  const renderTradeInputs = (room, index) => (
    <div>
      {room.includeTrades.flooring && (
        <Section title="Flooring">
          {renderInput("Type", room.flooring.type, e => handleTradeChange(index, 'flooring', 'type', e.target.value))}
          {renderInput("Area (sqft)", room.flooring.area, e => handleTradeChange(index, 'flooring', 'area', e.target.value))}
        </Section>
      )}

      {room.includeTrades.tile && (
        <Section title="Tile">
          {renderCheckbox("Tub Tile", room.tile.hasTubTile, e => handleTradeChange(index, 'tile', 'hasTubTile', e.target.checked))}
          {renderCheckbox("Backsplash", room.tile.hasBacksplash, e => handleTradeChange(index, 'tile', 'hasBacksplash', e.target.checked))}
          {(room.tile.hasTubTile || room.tile.hasBacksplash) && (
            <>
              {renderInput("Edge", room.tile.edge, e => handleTradeChange(index, 'tile', 'edge', e.target.value))}
              {renderInput("Tile Color", room.tile.tileColor, e => handleTradeChange(index, 'tile', 'tileColor', e.target.value))}
              {renderInput("Edge Color", room.tile.edgeColor, e => handleTradeChange(index, 'tile', 'edgeColor', e.target.value))}
              {renderInput("Edge Size", room.tile.edgeSize, e => handleTradeChange(index, 'tile', 'edgeSize', e.target.value))}
              {renderInput("Grout", room.tile.grout, e => handleTradeChange(index, 'tile', 'grout', e.target.value))}
              {renderCheckbox("Grout Sealer", room.tile.groutSealer, e => handleTradeChange(index, 'tile', 'groutSealer', e.target.checked))}
            </>
          )}
        </Section>
      )}

      {room.includeTrades.painting && (
        <Section title="Painting">
          {renderCheckbox("Ceiling", room.painting.ceiling, e => handleTradeChange(index, 'painting', 'ceiling', e.target.checked))}
          {renderCheckbox("Walls", room.painting.walls, e => handleTradeChange(index, 'painting', 'walls', e.target.checked))}
          {renderCheckbox("Base/Case", room.painting.baseCase, e => handleTradeChange(index, 'painting', 'baseCase', e.target.checked))}
          {renderCheckbox("Cabinets", room.painting.cabinets, e => handleTradeChange(index, 'painting', 'cabinets', e.target.checked))}
          {renderCheckbox("Sealer Required", room.painting.sealerRequired, e => handleTradeChange(index, 'painting', 'sealerRequired', e.target.checked))}
        </Section>
      )}
    </div>
  );

  return (
    <div>
      <h1>Step 2: Room-by-Room Walkthrough</h1>
      {renderInput("Total Sqft", totalSqft, e => setTotalSqft(e.target.value))}
      {renderInput("Hourly Rate", hourlyRate, e => setHourlyRate(e.target.value), 'number')}

      {rooms.map((room, index) => (
        <div key={index} style={{ border: '2px solid black', margin: '20px 0', padding: '10px' }}>
          <h2>Room {index + 1}</h2>
          <button onClick={() => removeRoom(index)}>Remove</button>
          {renderInput("Label", room.label, e => handleRoomChange(index, 'label', e.target.value))}
          {renderInput("Length (ft)", room.length, e => handleRoomChange(index, 'length', e.target.value))}
          {renderInput("Width (ft)", room.width, e => handleRoomChange(index, 'width', e.target.value))}
          {renderInput("Notes", room.notes, e => handleRoomChange(index, 'notes', e.target.value))}
          {renderTradeInputs(room, index)}
        </div>
      ))}

      <button onClick={addRoom}>+ Add Another Room</button>
    </div>
  );
}
