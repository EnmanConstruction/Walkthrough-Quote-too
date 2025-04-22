
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

  const addRoom = () => {
    setRooms([...rooms, { ...defaultRoom }]);
  };

  const removeRoom = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms.splice(index, 1);
    setRooms(updatedRooms);
  };

  const renderTradeInputs = (room, index) => {
    return (
      <div>
        <h4>Trade Sections</h4>

        {room.includeTrades.flooring && (
          <div>
            <label>Flooring Type</label>
            <input
              type="text"
              value={room.flooring.type}
              placeholder="e.g. LVP, Tile, Carpet"
              onChange={(e) => handleTradeChange(index, 'flooring', 'type', e.target.value)}
            />
            <br />
            <label>Flooring Area (sqft)</label>
            <input
              type="number"
              value={room.flooring.area}
              placeholder="e.g. 125"
              onChange={(e) => handleTradeChange(index, 'flooring', 'area', e.target.value)}
            />
          </div>
        )}

        {room.includeTrades.tile && (
          <div>
            <label>Has Tub Tile?</label>
            <input
              type="checkbox"
              checked={room.tile.hasTubTile}
              onChange={(e) => handleTradeChange(index, 'tile', 'hasTubTile', e.target.checked)}
            />
            <br />
            <label>Has Backsplash?</label>
            <input
              type="checkbox"
              checked={room.tile.hasBacksplash}
              onChange={(e) => handleTradeChange(index, 'tile', 'hasBacksplash', e.target.checked)}
            />
          </div>
        )}

        {room.includeTrades.painting && (
          <div>
            <label>Wall Paint?</label>
            <input
              type="checkbox"
              checked={room.painting.walls}
              onChange={(e) => handleTradeChange(index, 'painting', 'walls', e.target.checked)}
            />
          </div>
        )}

        {room.includeTrades.plumbing && (
          <div>
            <label>Plumbing - Tub:</label>
            <input
              type="checkbox"
              checked={room.plumbing.tub}
              onChange={(e) => handleTradeChange(index, 'plumbing', 'tub', e.target.checked)}
            />
            <label> Toilet:</label>
            <input
              type="checkbox"
              checked={room.plumbing.toilet}
              onChange={(e) => handleTradeChange(index, 'plumbing', 'toilet', e.target.checked)}
            />
            <label> Sink:</label>
            <input
              type="checkbox"
              checked={room.plumbing.sink}
              onChange={(e) => handleTradeChange(index, 'plumbing', 'sink', e.target.checked)}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <h1>Step 2: Room-by-Room Walkthrough</h1>
      <label>Total Project Square Footage:</label>
      <input
        type="text"
        value={totalSqft}
        onChange={(e) => setTotalSqft(e.target.value)}
        placeholder="e.g. 1200"
      />

      <label style={{ marginLeft: '20px' }}>Quote Hourly Rate ($/hr):</label>
      <input
        type="number"
        value={hourlyRate}
        onChange={(e) => setHourlyRate(e.target.value)}
      />

      {rooms.map((room, index) => (
        <div key={index}>
          <h2>Room {index + 1}</h2>
          <button onClick={() => removeRoom(index)}>Remove</button>

          <div>
            <label>Room Label</label>
            <input
              type="text"
              value={room.label}
              placeholder="e.g. Main Bath, Kitchen A"
              onChange={(e) => handleRoomChange(index, 'label', e.target.value)}
            />
          </div>

          <div>
            <label>Room Type</label>
            <select
              value={room.type}
              onChange={(e) => handleRoomChange(index, 'type', e.target.value)}
            >
              <option value="Bathroom">Bathroom</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Living Room">Living Room</option>
              <option value="Common Area">Common Area</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label>Dimensions (L x W in ft)</label>
            <input
              type="text"
              placeholder="Length"
              value={room.length}
              onChange={(e) => handleRoomChange(index, 'length', e.target.value)}
            />
            <input
              type="text"
              placeholder="Width"
              value={room.width}
              onChange={(e) => handleRoomChange(index, 'width', e.target.value)}
            />
          </div>

          <div>
            <label>Upload Photo</label>
            <input
              type="file"
              onChange={(e) => handleRoomChange(index, 'photo', e.target.files[0])}
            />
          </div>

          <div>
            <label>Notes</label>
            <textarea
              value={room.notes}
              onChange={(e) => handleRoomChange(index, 'notes', e.target.value)}
            />
          </div>

          {renderTradeInputs(room, index)}
        </div>
      ))}

      <button onClick={addRoom}>+ Add Another Room</button>
    </div>
  );
}
