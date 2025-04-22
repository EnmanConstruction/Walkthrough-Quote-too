const defaultRoom = {
  label: '',
  type: 'Bathroom',
  length: '',
  width: '',
  photo: null,
  notes: '',
  includeTrades: {
    flooring: true,
    tile: true,
    painting: true,
    baseAndCase: true,
    drywall: true,
    electrical: true,
    cabinets: true,
    countertops: true,
    plumbing: true
  },
  flooring: { type: '', area: '' },
  tile: { hasTubTile: false, hasBacksplash: false },
  painting: { walls: false },
  plumbing: { tub: false, toilet: false, sink: false }
};

export default defaultRoom;
