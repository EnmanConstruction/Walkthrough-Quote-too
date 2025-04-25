const defaultRoom = {
  label: '',
  type: 'Bathroom',
  notes: '',
  photo: null,

  measurements: {
    length: '',
    width: '',
    ceilingHeight: '',
    sqft: '',
    baseLF: '',
    caseLF: '',
    tileLF: '',
    cabinetLF: ''
  },

  counts: {
    windows: 0,
    doors: 0,
    outlets: 0,
    switches: 0,
    lights: 0,
    smokeDetectors: 0,
    fixtures: {
      tub: false,
      toilet: false,
      sink: false
    }
  },

  trades: {
    flooring: {
      include: false,
      type: ''
    },
    tile: {
      include: false,
      hasTubTile: false,
      hasBacksplash: false,
      edgeType: '',
      grout: '',
      groutSealer: false,
      tileColor: '',
      edgeColor: '',
      edgeSize: ''
    },
    painting: {
      include: false,
      ceiling: false,
      walls: false,
      baseCase: false,
      cabinets: false,
      sealerRequired: false
    },
    drywall: {
      include: false,
      ceilingType: '',
      patching: false,
      insulation: false,
      deleteIntercom: false,
      backingRequired: false,
      moldResistant: false
    },
    electrical: {
      include: false,
      panelUpgrade: false,
      gfci: false,
      arcFault: false,
      exhaustFan: false
    },
    plumbing: {
      include: false,
      tubDirection: '',
      tubSize: '',
      showerRod: false,
      absFittings: false,
      copperPipe: false,
      shutOffs: false,
      absPipe: false,
      pTrap: false,
      pTrapCleanout: false,
      plumbingNotes: ''
    },
    cabinets: {
      include: false,
      upperQty: '',
      lowerQty: '',
      vanityQty: '',
      finishType: '',
      softClose: false
    },
    countertops: {
      include: false,
      sqft: '',
      type: '',
      edgeStyle: '',
      color: ''
    },
    misc: {
      fireCaulking: false,
      clientRequests: '',
      codeNotes: ''
    }
  }
};

export default defaultRoom;
