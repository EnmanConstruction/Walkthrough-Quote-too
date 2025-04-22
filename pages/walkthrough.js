import defaultRoom from '../lib/defaultRoom';
import { useState } from 'react';

export default function Walkthrough() {
  const [totalSqft, setTotalSqft] = useState('');
  const [hourlyRate, setHourlyRate] = useState(120);
  const [rooms, setRooms] = useState([{ ...defaultRoom }]);

  const handleRoomChange = (index, field, value) => {
    const updatedRooms = [...rooms];
    updatedRooms[index][field] = value;
    setRooms(updatedRooms);
  };

  const handleTradeChange = (index, trade, field, value) => {
    const updatedRooms = [...rooms];
    updatedRooms[index][trade][field] = value;
    setRooms(updatedRooms);
  };

  const addRoom = () => setRooms([...rooms, { ...defaultRoom }]);
  const removeRoom = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms.splice(index, 1);
    setRooms(updatedRooms);
  };

  const renderInput = (label, value, onChange, type = 'text') => (
    <div><label>{label}</label><input type={type} value={value} onChange={onChange} /></div>
  );

  const renderCheckbox = (label, checked, onChange) => (
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={checked} onChange={onChange} /> {label}
    </label>
  );

  const renderTradeInputs = (room, index) => (
    <div>
      <h4>Trade Sections</h4>

      {room.includeTrades.flooring && (
        <div>
          {renderInput("Flooring Type", room.flooring.type, e => handleTradeChange(index, 'flooring', 'type', e.target.value))}
          {renderInput("Flooring Area (sqft)", room.flooring.area, e => handleTradeChange(index, 'flooring', 'area', e.target.value))}
        </div>
      )}

      {room.includeTrades.tile && (
        <div>
          {renderCheckbox("Has Tub Tile?", room.tile.hasTubTile, e => handleTradeChange(index, 'tile', 'hasTubTile', e.target.checked))}
          {renderCheckbox("Has Backsplash?", room.tile.hasBacksplash, e => handleTradeChange(index, 'tile', 'hasBacksplash', e.target.checked))}
          {renderInput("Tile Edge", room.tile.edge, e => handleTradeChange(index, 'tile', 'edge', e.target.value))}
          {renderInput("Tile Color", room.tile.tileColor, e => handleTradeChange(index, 'tile', 'tileColor', e.target.value))}
          {renderInput("Edge Color", room.tile.edgeColor, e => handleTradeChange(index, 'tile', 'edgeColor', e.target.value))}
          {renderInput("Edge Size", room.tile.edgeSize, e => handleTradeChange(index, 'tile', 'edgeSize', e.target.value))}
          {renderInput("Grout", room.tile.grout, e => handleTradeChange(index, 'tile', 'grout', e.target.value))}
          {renderCheckbox("Grout Sealer", room.tile.groutSealer, e => handleTradeChange(index, 'tile', 'groutSealer', e.target.checked))}
        </div>
      )}

      {room.includeTrades.painting && (
        <div>
          {renderCheckbox("Ceiling Paint?", room.painting.ceiling, e => handleTradeChange(index, 'painting', 'ceiling', e.target.checked))}
          {renderCheckbox("Wall Paint?", room.painting.walls, e => handleTradeChange(index, 'painting', 'walls', e.target.checked))}
          {renderCheckbox("Cabinet Paint?", room.painting.cabinets, e => handleTradeChange(index, 'painting', 'cabinets', e.target.checked))}
          {renderCheckbox("Sealer Required?", room.painting.sealerRequired, e => handleTradeChange(index, 'painting', 'sealerRequired', e.target.checked))}
        </div>
      )}

      {room.includeTrades.baseAndCase && (
        <div>
          {renderCheckbox("Paint Base/Casing?", room.baseAndCase.paint, e => handleTradeChange(index, 'baseAndCase', 'paint', e.target.checked))}
          {renderCheckbox("Replace Base/Casing?", room.baseAndCase.replace, e => handleTradeChange(index, 'baseAndCase', 'replace', e.target.checked))}
          {renderInput("Linear Feet", room.baseAndCase.linearFeet, e => handleTradeChange(index, 'baseAndCase', 'linearFeet', e.target.value))}
          {renderInput("Material", room.baseAndCase.material, e => handleTradeChange(index, 'baseAndCase', 'material', e.target.value))}
        </div>
      )}

      {room.includeTrades.drywall && (
        <div>
          {renderInput("Ceiling Type", room.drywall.ceilingType, e => handleTradeChange(index, 'drywall', 'ceilingType', e.target.value))}
          {renderCheckbox("Drywall Patches", room.drywall.drywallPatches, e => handleTradeChange(index, 'drywall', 'drywallPatches', e.target.checked))}
          {renderCheckbox("Mold-Resistant Drywall", room.drywall.moldDrywall, e => handleTradeChange(index, 'drywall', 'moldDrywall', e.target.checked))}
          {renderCheckbox("Insulation", room.drywall.insulation, e => handleTradeChange(index, 'drywall', 'insulation', e.target.checked))}
          {renderCheckbox("Delete Intercom", room.drywall.deleteIntercom, e => handleTradeChange(index, 'drywall', 'deleteIntercom', e.target.checked))}
          {renderCheckbox("Backing Required", room.drywall.backingRequired, e => handleTradeChange(index, 'drywall', 'backingRequired', e.target.checked))}
        </div>
      )}

      {room.includeTrades.electrical && (
        <div>
          {renderInput("Outlets", room.electrical.outlets, e => handleTradeChange(index, 'electrical', 'outlets', e.target.value))}
          {renderInput("Switches", room.electrical.switches, e => handleTradeChange(index, 'electrical', 'switches', e.target.value))}
          {renderCheckbox("Panel Upgrade?", room.electrical.panelUpgradeRequired, e => handleTradeChange(index, 'electrical', 'panelUpgradeRequired', e.target.checked))}
        </div>
      )}

      {room.includeTrades.cabinets && (
        <div>
          {renderInput("Uppers", room.cabinets.upperQty, e => handleTradeChange(index, 'cabinets', 'upperQty', e.target.value))}
          {renderInput("Lowers", room.cabinets.lowerQty, e => handleTradeChange(index, 'cabinets', 'lowerQty', e.target.value))}
          {renderInput("Vanity Qty", room.cabinets.vanityQty, e => handleTradeChange(index, 'cabinets', 'vanityQty', e.target.value))}
          {renderCheckbox("Soft Close", room.cabinets.softClose, e => handleTradeChange(index, 'cabinets', 'softClose', e.target.checked))}
        </div>
      )}

      {room.includeTrades.countertops && (
        <div>
          {renderInput("Sqft", room.countertops.sqft, e => handleTradeChange(index, 'countertops', 'sqft', e.target.value))}
          {renderInput("Type", room.countertops.type, e => handleTradeChange(index, 'countertops', 'type', e.target.value))}
        </div>
      )}

      {room.includeTrades.plumbing && (
        <div>
          {renderCheckbox("Tub", room.plumbing.tub, e => handleTradeChange(index, 'plumbing', 'tub', e.target.checked))}
          {room.plumbing.tub && (
            <div style={{ marginLeft: '20px' }}>
              {renderInput("Tub Direction", room.plumbing.tubDirection, e => handleTradeChange(index, 'plumbing', 'tubDirection', e.target.value))}
              {renderInput("Tub Size", room.plumbing.tubSize, e => handleTradeChange(index, 'plumbing', 'tubSize', e.target.value))}
              {renderCheckbox("Shower Rod", room.plumbing.showerRod, e => handleTradeChange(index, 'plumbing', 'showerRod', e.target.checked))}
              {renderCheckbox("ABS Fittings", room.plumbing.absFittings, e => handleTradeChange(index, 'plumbing', 'absFittings', e.target.checked))}
              {renderCheckbox("Copper Pipe", room.plumbing.copperPipe, e => handleTradeChange(index, 'plumbing', 'copperPipe', e.target.checked))}
              {renderCheckbox("Shut-Offs", room.plumbing.shutOffs, e => handleTradeChange(index, 'plumbing', 'shutOffs', e.target.checked))}
              {renderCheckbox("ABS Pipe", room.plumbing.absPipe, e => handleTradeChange(index, 'plumbing', 'absPipe', e.target.checked))}
              {renderCheckbox("P-Trap", room.plumbing.pTrap, e => handleTradeChange(index, 'plumbing', 'pTrap', e.target.checked))}
              {renderCheckbox("P-Trap w/ Cleanout", room.plumbing.pTrapCleanout, e => handleTradeChange(index, 'plumbing', 'pTrapCleanout', e.target.checked))}
              {renderInput("Plumbing Notes", room.plumbing.plumbingNotes, e => handleTradeChange(index, 'plumbing', 'plumbingNotes', e.target.value))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <h1>Step 2: Room-by-Room Walkthrough</h1>
      <label>Total Project Square Footage:</label>
      <input value={totalSqft} onChange={e => setTotalSqft(e.target.value)} placeholder="e.g. 1200" />

      <label style={{ marginLeft: '20px' }}>Quote Hourly Rate ($/hr):</label>
      <input type="number" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} />

      {rooms.map((room, index) => (
        <div key={index}>
          <h2>Room {index + 1}</h2>
          <button onClick={() => removeRoom(index)}>Remove</button>

          {renderInput("Room Label", room.label, e => handleRoomChange(index, 'label', e.target.value))}
          <label>Room Type</label>
          <select value={room.type} onChange={e => handleRoomChange(index, 'type', e.target.value)}>
            <option value="Bathroom">Bathroom</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Living Room">Living Room</option>
            <option value="Common Area">Common Area</option>
            <option value="Other">Other</option>
          </select>

          {renderInput("Length", room.length, e => handleRoomChange(index, 'length', e.target.value))}
          {renderInput("Width", room.width, e => handleRoomChange(index, 'width', e.target.value))}
          <div>
            <label>Upload Photo</label>
            <input type="file" onChange={e => handleRoomChange(index, 'photo', e.target.files[0])} />
          </div>
          <div>
            <label>Notes</label>
            <textarea value={room.notes} onChange={e => handleRoomChange(index, 'notes', e.target.value)} />
          </div>

          {renderTradeInputs(room, index)}
        </div>
      ))}

      <button onClick={addRoom}>+ Add Another Room</button>
    </div>
  );
}
