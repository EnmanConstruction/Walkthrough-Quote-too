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
    plumbing: true,
    doors: true,
    windows: true,
    insulation: true,
    miscellaneous: true
  },
  flooring: { type: '', area: '' },
  tile: {
    hasTubTile: false,
    hasBacksplash: false,
    edge: '',
    tileColor: '',
    edgeColor: '',
    edgeSize: '',
    grout: '',
    groutSealer: false
  },
  painting: {
    ceiling: false,
    walls: false,
    baseCase: false,
    cabinets: false,
    sealerRequired: false
  },
  baseAndCase: {
    paint: false,
    replace: false,
    linearFeet: '',
    material: ''
  },
  drywall: {
    ceilingType: '',
    drywallPatches: false,
    moldDrywall: false,
    insulation: false,
    deleteIntercom: false,
    backingRequired: false,
    patchCount: '',
    ceilingDrywallType: '',
    wallDrywallType: ''
  },
  electrical: {
    outlets: '',
    switches: '',
    switchType: '',
    smokeDetector: false,
    gfci: '',
    lightFixtures: '',
    exhaustFan: false,
    fanLocation: '',
    panelUpgradeRequired: false
  },
  cabinets: {
    upperQty: '',
    lowerQty: '',
    linearFeet: '',
    gableEnds: '',
    vanityQty: '',
    vanitySize: '',
    drawerBanks: '',
    finishType: '',
    hardwareType: '',
    softClose: false
  },
  countertops: {
    sqft: '',
    type: '',
    edgeStyle: '',
    backsplashHeight: '',
    color: ''
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
    plumbingNotes: ''
  },
  doors: {
    type: '',
    count: '',
    color: '',
    knobType: '',
    stopType: '',
    hingeFinish: ''
  },
  windows: {
    quantity: '',
    egressRequired: false,
    replace: false,
    trimNeeded: false
  },
  insulation: {
    ceiling: false,
    walls: false,
    vapourBarrier: false,
    soundproofing: false
  },
  miscellaneous: {
    fireCaulking: false,
    codeNotes: '',
    clientRequests: ''
  }
};

export default defaultRoom;
