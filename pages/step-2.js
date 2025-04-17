<div className="trade-section">
  <h4>Flooring</h4>
  <label>Type:</label>
  <input type="text" value={room.flooring.type} onChange={(e) => handleChange(index, 'flooring', 'type', e.target.value)} />
  <label>Area (sq ft):</label>
  <input type="number" value={room.flooring.area} onChange={(e) => handleChange(index, 'flooring', 'area', e.target.value)} />
</div>

<div className="trade-section">
  <h4>Tile</h4>
  <label><input type="checkbox" checked={room.tile.hasTubTile} onChange={(e) => handleChange(index, 'tile', 'hasTubTile', e.target.checked)} /> Tub Tile</label>
  <label><input type="checkbox" checked={room.tile.hasBacksplash} onChange={(e) => handleChange(index, 'tile', 'hasBacksplash', e.target.checked)} /> Backsplash</label>
  <label>Edge:</label>
  <input type="text" value={room.tile.edge} onChange={(e) => handleChange(index, 'tile', 'edge', e.target.value)} />
  <label>Tile Color:</label>
  <input type="text" value={room.tile.tileColor} onChange={(e) => handleChange(index, 'tile', 'tileColor', e.target.value)} />
  <label>Edge Color:</label>
  <input type="text" value={room.tile.edgeColor} onChange={(e) => handleChange(index, 'tile', 'edgeColor', e.target.value)} />
  <label>Edge Size:</label>
  <input type="text" value={room.tile.edgeSize} onChange={(e) => handleChange(index, 'tile', 'edgeSize', e.target.value)} />
  <label>Grout:</label>
  <input type="text" value={room.tile.grout} onChange={(e) => handleChange(index, 'tile', 'grout', e.target.value)} />
  <label><input type="checkbox" checked={room.tile.groutSealer} onChange={(e) => handleChange(index, 'tile', 'groutSealer', e.target.checked)} /> Grout Sealer</label>
</div>

<div className="trade-section">
  <h4>Painting</h4>
  <label><input type="checkbox" checked={room.painting.ceiling} onChange={(e) => handleChange(index, 'painting', 'ceiling', e.target.checked)} /> Ceiling</label>
  <label><input type="checkbox" checked={room.painting.walls} onChange={(e) => handleChange(index, 'painting', 'walls', e.target.checked)} /> Walls</label>
  <label><input type="checkbox" checked={room.painting.baseAndCase} onChange={(e) => handleChange(index, 'painting', 'baseAndCase', e.target.checked)} /> Base & Case</label>
  <label><input type="checkbox" checked={room.painting.cabinets} onChange={(e) => handleChange(index, 'painting', 'cabinets', e.target.checked)} /> Cabinets</label>
  <label><input type="checkbox" checked={room.painting.sealerRequired} onChange={(e) => handleChange(index, 'painting', 'sealerRequired', e.target.checked)} /> Sealer Required</label>
</div>

<div className="trade-section">
  <h4>Drywall</h4>
  <label>Ceiling Type:</label>
  <input type="text" value={room.drywall.ceilingType} onChange={(e) => handleChange(index, 'drywall', 'ceilingType', e.target.value)} />
  <label><input type="checkbox" checked={room.drywall.drywallPatches} onChange={(e) => handleChange(index, 'drywall', 'drywallPatches', e.target.checked)} /> Drywall Patches</label>
  <label><input type="checkbox" checked={room.drywall.moldDrywall} onChange={(e) => handleChange(index, 'drywall', 'moldDrywall', e.target.checked)} /> Mold-Resistant Drywall</label>
  <label><input type="checkbox" checked={room.drywall.insulation} onChange={(e) => handleChange(index, 'drywall', 'insulation', e.target.checked)} /> Insulation</label>
  <label><input type="checkbox" checked={room.drywall.deleteIntercom} onChange={(e) => handleChange(index, 'drywall', 'deleteIntercom', e.target.checked)} /> Delete Intercom</label>
  <label><input type="checkbox" checked={room.drywall.backingRequired} onChange={(e) => handleChange(index, 'drywall', 'backingRequired', e.target.checked)} /> Backing Required</label>
</div>

<div className="trade-section">
  <h4>Electrical</h4>
  <label>Outlets:</label>
  <input type="text" value={room.electrical.outlets} onChange={(e) => handleChange(index, 'electrical', 'outlets', e.target.value)} />
  <label>Switches:</label>
  <input type="text" value={room.electrical.switches} onChange={(e) => handleChange(index, 'electrical', 'switches', e.target.value)} />
  <label>Switch Type:</label>
  <input type="text" value={room.electrical.switchType} onChange={(e) => handleChange(index, 'electrical', 'switchType', e.target.value)} />
  <label><input type="checkbox" checked={room.electrical.smokeDetector} onChange={(e) => handleChange(index, 'electrical', 'smokeDetector', e.target.checked)} /> Smoke Detector</label>
  <label>GFCI:</label>
  <input type="text" value={room.electrical.gfci} onChange={(e) => handleChange(index, 'electrical', 'gfci', e.target.value)} />
  <label>Light Fixtures:</label>
  <input type="text" value={room.electrical.lightFixtures} onChange={(e) => handleChange(index, 'electrical', 'lightFixtures', e.target.value)} />
</div>

<div className="trade-section">
  <h4>Cabinets</h4>
  <label>Upper Qty:</label>
  <input type="text" value={room.cabinets.upperQty} onChange={(e) => handleChange(index, 'cabinets', 'upperQty', e.target.value)} />
  <label>Lower Qty:</label>
  <input type="text" value={room.cabinets.lowerQty} onChange={(e) => handleChange(index, 'cabinets', 'lowerQty', e.target.value)} />
  <label>Linear Feet:</label>
  <input type="text" value={room.cabinets.linearFeet} onChange={(e) => handleChange(index, 'cabinets', 'linearFeet', e.target.value)} />
  <label>Gable Ends:</label>
  <input type="text" value={room.cabinets.gableEnds} onChange={(e) => handleChange(index, 'cabinets', 'gableEnds', e.target.value)} />
</div>

<div className="trade-section">
  <h4>Countertops</h4>
  <label>Square Feet:</label>
  <input type="text" value={room.countertops.sqft} onChange={(e) => handleChange(index, 'countertops', 'sqft', e.target.value)} />
  <label>Type:</label>
  <input type="text" value={room.countertops.type} onChange={(e) => handleChange(index, 'countertops', 'type', e.target.value)} />
</div>
