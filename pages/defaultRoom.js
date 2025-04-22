const defaultRoom = {
  label: '',
  type: 'Bathroom',
  date: '',
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
    cornerBead: false,
    greenBoard: false,
    fullReplacement: false,
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
    panelUpgradeRequired: false,
    fixtureHeights: '',
    arcFaultBreakers: false
  },
  cabinets: {
    upperQty: '',
    lowerQty: '',
    linearFeet: '',
    gableEnds: '',
    vanityQty: '',
    vanitySize: '',
    lazySusans: '',
    cornerUnits: '',
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
    plumbingNotes: '',
    showerValve: false,
    supplyLines: false,
    newDrain: false,
    ventingRequired: false
  }
};

export default defaultRoom;
